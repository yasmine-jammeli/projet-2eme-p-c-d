from pathlib import Path
import datetime
import re
import time
import csv

import win32com.client  #pip install pywin32

# Create output folder
output_dir = Path.cwd() / "latest_email"
output_dir.mkdir(parents=True, exist_ok=True)

# CSV file to store email details
csv_file = output_dir / "emails.csv"
fieldnames = ['Subject', 'Body', 'Sender', 'Time', 'Attachments']

# Open the CSV file in append mode and write the header if the file is empty
with open(csv_file, mode='a', newline='', encoding='utf-8') as file:
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    if file.tell() == 0:
        writer.writeheader()

# Connect to outlook
outlook = win32com.client.Dispatch("Outlook.Application").GetNamespace("MAPI")

# Connect to inbox folder
inbox = outlook.GetDefaultFolder(6)  # Inbox folder

while True:
    # Get messages
    messages = inbox.Items

    for message in messages:
        # Process only unread messages
        if message.UnRead:
            subject = message.Subject
            body = message.body
            sender = message.SenderEmailAddress
            time_received = message.ReceivedTime.strftime("%Y-%m-%d %H:%M:%S")
            attachments = [attachment.FileName for attachment in message.Attachments]

            # Create separate folder for each message, exclude special characters and timestamp
            current_time = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
            target_folder = output_dir / re.sub('[^0-9a-zA-Z]+', '', subject) / current_time
            target_folder.mkdir(parents=True, exist_ok=True)

            # Write body to text file
            body_file_path = target_folder / "EMAIL_BODY.txt"
            body_file_path.write_text(str(body), encoding='utf-8')

            # Read the body text from the file
            with open(body_file_path, 'w', encoding='utf-8') as body_file:
                body_text = body_file.read()

            # Save attachments
            for attachment in message.Attachments:
                filename = re.sub('[^0-9a-zA-Z\.]+', '', attachment.FileName)
                attachment.SaveAsFile(target_folder / filename)
            
            # Mark message as read
            message.UnRead = False

            # Append email details to CSV
            with open(csv_file, mode='a', newline='', encoding='utf-8') as file:
                writer = csv.DictWriter(file, fieldnames=fieldnames)
                writer.writerow({'Subject': subject, 'Body': body_text, 'Sender': sender, 'Time': time_received, 'Attachments': ", ".join(attachments)})

    # Wait for a while before checking for new emails again (e.g., every 30 seconds)
    time.sleep(30)
