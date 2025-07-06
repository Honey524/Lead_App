
# Lead Scoring Project

Instructions and details in project files.# 🧠 Lead Scoring Intelligence

A full-stack AI-powered application to automatically score and segment leads based on their engagement behavior (website visits, email opens, activity count).  

This tool helps marketing and sales teams prioritize leads, improve conversions, and focus on high-potential opportunities.

---

## 🚀 Features

- Upload CSV files with lead data
- Predict lead score using a pre-trained machine learning model
- Segment leads into High, Medium, and Low categories
- Visualize segments and scores with charts
- Export scored leads as CSV
- Modern, responsive React frontend

---

## 🗂 Project Structure

```
lead_scoring_project/
├── backend/
│   ├── app.js                # Express server (Node)
│   ├── routes/
│   │   └── leadRoutes.js
│   ├── models/
│   │   └── Lead.js
│   ├── controllers/
│   │   └── leadController.js
│   ├── config/
│   │   └── db.js
├── ml/
│   ├── app.py                # Flask ML scoring API
│   └── model.pkl            # Trained ML model
├── frontend/
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   ├── index.css
│   │   └── components/
│   │       ├── LeadTable.js
│   │       ├── SegmentChart.js
│   │       └── ScoreBarChart.js
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Backend (Node.js Express)

```bash
cd backend
npm install
node app.js
```

---

### 2️⃣ ML Scoring API (Flask)

```bash
cd ml
pip install flask pandas joblib flask-cors
python app.py
```

> Make sure `model.pkl` is present in the `ml/` folder.

---

### 3️⃣ Frontend (React)

```bash
cd frontend
npm install
npm start
```

---

## 🗂 CSV Format

Your input CSV file should contain these columns:

```
name,email,company,activity_count,email_opens,website_visits
```

### Example

```csv
name,email,company,activity_count,email_opens,website_visits
John Doe,john@example.com,Acme Inc,5,10,3
Jane Smith,jane@example.com,Globex,3,4,2
```

---

## 🧾 API Endpoints

### POST `/upload`

- **URL**: `http://localhost:8000/upload`
- **Payload**: CSV file (`multipart/form-data`)
- **Response**: JSON list of scored leads with fields: `name`, `email`, `company`, `score`, `segment`

---

## 💻 Visualizations

- **Segment Chart**: Pie chart showing distribution of High, Medium, Low segments.
- **Score Bar Chart**: Bar chart of scores across all leads.
- **Table**: Detailed view of each lead and its score.

---

## 🟢 Export

After scoring, you can export the full list as a CSV by clicking **"Export Lead Scores"**.

---

## ❤️ Credits

- **Frontend**: React, Recharts, React Icons, React Spinners
- **Backend API**: Node.js (Express)
- **ML Scoring API**: Flask, Pandas, Scikit-learn
- **Model**: Trained offline and saved as `model.pkl`

---

## 🛡️ License

MIT License — free to use and modify.

---

## 💬 Support

If you face any issues, feel free to create an issue or ask here.  
Happy scoring! 🚀✨

# Lead_App

