// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LeadTable from './components/LeadTable';
import SegmentChart from './components/SegmentChart';
import ScoreBarChart from './components/ScoreBarChart';
import { FaFileExport } from 'react-icons/fa';
import { BeatLoader } from 'react-spinners';
import './App.css';

function App() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setLeads(response.data);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Something went wrong while uploading.');
    } finally {
      setLoading(false);
    }
  };

const handleExport = () => {
  const csvContent = [
    ['Name', 'Email', 'Company', 'Score', 'Segment'],
    ...leads.map(l => [l.name, l.email, l.company, l.score, l.segment])
  ].map(e => e.join(",")).join("\n");

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "scored_leads.csv");
  link.click();
};


  return (
    <div className="app-container">
      <header className="header">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="AI Logo" className="logo" />
        <h1>Lead Scoring Intelligence</h1>
        <p>Upload your CSV and instantly score & segment your leads using AI</p>
      </header>

      <div className="upload-export">
        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="file-input"
        />
        <button onClick={handleExport} className="export-btn">
          <FaFileExport /> Export Lead Scores
        </button>
      </div>

      {loading ? (
        <div className="loading">
          <BeatLoader color="#333" size={12} />
          <p>Processing file...</p>
        </div>
      ) : leads.length === 0 ? (
        <div className="no-leads">No leads uploaded yet. Please upload a CSV file to get started.</div>
      ) : (
        <>
          <div className="chart-row">
  <div className="chart-card">
    <SegmentChart leads={leads} />
  </div>
  <div className="chart-card">
    <ScoreBarChart leads={leads} />
  </div>
</div>



          <div className="table-container">
            <LeadTable leads={leads} />
          </div>
        </>
      )}

      <footer className="footer">
        <h2>About This Project</h2>
        <p>
          This AI-powered lead scoring dashboard helps sales and marketing teams prioritize leads based on
          engagement metrics like website visits, email opens, and activity count. The model uses historical
          data to score and segment leads into High, Medium, or Low potential.
        </p>
        <p>Crafted with 💡 by React, Flask, Pandas, and Scikit-learn.</p>
      </footer>
    </div>
  );
}

export default App;