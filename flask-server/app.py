from flask import Flask, render_template
from threading import Thread
import subprocess
import csv
from collections import deque

app = Flask(__name__)

# Queue to store email entries
email_queue = deque(maxlen=1)

def run_email_script():
    # Call your Python script as a separate process
    subprocess.Popen(['python', '-u', 'C:\\Users\\pc\\Desktop\\pcd\\security updates\\flask_integration\\flask-server\\automate_email.py'])

# Function to fetch latest email from CSV
def fetch_latest_email():
    with open(r'C:\Users\pc\Desktop\pcd\latest_email\your_emails.csv', mode='r', newline='', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            email_queue.append(row)

@app.route('/')
def index():
    # Fetch latest email when accessing the homepage
    fetch_latest_email()
    if email_queue:
        latest_email = email_queue[0]
        return f"Latest Email subject : {latest_email['Subject']},the body : {latest_email['Body']},the Sender : {latest_email['Sender']}, Prediction: {latest_email['Predicted_Label']}"
    else:
        return 'No emails processed yet.'

@app.route('/run_script')
def execute_script():
    # Start a new thread to run the email script
    email_thread = Thread(target=run_email_script)
    email_thread.start()
    return 'Email processing initiated.'

if __name__ == '__main__':
    app.run(debug=True)
