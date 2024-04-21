import csv
import win32com.client
import time
from pathlib import Path
import pickle
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import BernoulliNB
import joblib

# Load the count vectorizer
with open(r"C:\Users\pc\Desktop\pcd\mail_model\count_vectorizer.pkl", "rb") as f:
    vectorizer = pickle.load(f)

# Load the Bernoulli Naive Bayes model
model = joblib.load(r"C:\Users\pc\Desktop\pcd\mail_model\bernoulli_nb_model.pkl")

# CSV file to store email details
csv_file = r"C:\Users\pc\Desktop\pcd\latest_email\your_emails.csv"
fieldnames = ['Subject', 'Sender', 'Time', 'Body', 'Attachments', 'Predicted_Label']  # Added 'Body'

# Open the CSV file in append mode and write the header if the file is empty
with open(csv_file, mode='a', newline='', encoding='utf-8') as file:
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    if file.tell() == 0:
        writer.writeheader()

# Connect to Outlook
outlook = win32com.client.Dispatch("Outlook.Application").GetNamespace("MAPI")

# Connect to inbox folder
inbox = outlook.GetDefaultFolder(6)  # Inbox folder

# Function to predict label
def predict_label(body_text):
    X_body = vectorizer.transform([body_text])
    predicted_label = model.predict(X_body)[0]
    predicted_label_str = "Not Spam" if predicted_label == -1 else " Spam"
    return predicted_label_str

while True:
    # Get messages
    messages = inbox.Items
    email_data = []  # List to hold email details for batch processing

    for message in messages:
        # Process only unread messages
        if message.UnRead:
            subject = message.Subject
            sender = message.SenderEmailAddress
            time_received = message.ReceivedTime.strftime("%Y-%m-%d %H:%M:%S")
            body = message.Body  # Extract email body
            attachments = [attachment.FileName for attachment in message.Attachments]

            # Predict email label
            predicted_label_str = predict_label(body)

            # Append email details to list for batch processing
            email_data.append({'Subject': subject, 'Sender': sender, 'Time': time_received, 'Body': body, 'Attachments': ", ".join(attachments), 'Predicted_Label': predicted_label_str})
            
            # Mark message as read
            message.UnRead = False

    # Append email details to CSV after processing the batch
    with open(csv_file, mode='a', newline='', encoding='utf-8') as file:
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        for email in email_data:
            writer.writerow(email)

    # Wait for a while before checking for new emails again (e.g., every 30 seconds)
    time.sleep(30)
