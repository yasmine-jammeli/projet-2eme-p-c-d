import joblib

# Load the RandomForestClassifier model
loaded_model = joblib.load('C:/Users/pc/Desktop/pcd/mail_model/random_forest_classifier_model.pkl')

# Example data for testing
example_data = ["Hey there! Just checking in.",
                   "You have a package waiting for you at the post office.",
                   "Invest in our new cryptocurrency for guaranteed returns!",
                   "Reminder: Your appointment is scheduled for tomorrow at 2 PM."]

# Preprocess the example data (if needed)

# Make predictions
predictions = loaded_model.predict(example_data)

# Print predictions
for text, prediction in zip(example_data, predictions):
    print(f"Text: {text}")
    print(f"Prediction: {'Not Spam' if prediction == 1 else 'Spam'}")
    print()
