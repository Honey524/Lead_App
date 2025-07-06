from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib

# Create Flask app
app = Flask(__name__)
CORS(app)

# Load your pre-trained model
model = joblib.load('model.pkl')

@app.route('/upload', methods=['POST'])
def upload_file():
    # Check if file part is present in the request
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']

    # Check if a file is actually selected
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        # Read CSV file into DataFrame
        df = pd.read_csv(file)

        # Check for required columns
        required_cols = ['name', 'email', 'company', 'activity_count', 'email_opens', 'website_visits']
        if not all(col in df.columns for col in required_cols):
            return jsonify({'error': 'CSV file missing required columns'}), 400

        # Extract features for prediction
        features = df[['activity_count', 'email_opens', 'website_visits']]
        
        # Predict probabilities (score)
        scores = model.predict_proba(features)[:, 1]
        df['score'] = scores.round(2)  # Round to 2 decimal places

        # Define segmentation function
        def segment(score):
            if score > 0.8:
                return "High"
            elif score > 0.5:
                return "Medium"
            else:
                return "Low"

        # Apply segmentation
        df['segment'] = df['score'].apply(segment)

        # Prepare final result DataFrame
        result = df[['name', 'email', 'company', 'score', 'segment']]

        # Return JSON response
        return jsonify(result.to_dict(orient='records'))

    except Exception as e:
        # Catch and return errors
        return jsonify({'error': str(e)}), 500

# Run the app
if __name__ == '__main__':
    app.run(port=8000, debug=True)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=10000)
