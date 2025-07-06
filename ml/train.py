import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib

df = pd.read_csv('leads.csv')
X = df[['activity_count', 'email_opens', 'website_visits']]
y = df['converted']
model = RandomForestClassifier()
model.fit(X, y)
joblib.dump(model, 'model.pkl')
print("Model saved!")