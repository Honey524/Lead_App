import React, { useState } from 'react';
import './LeadTable.css';

function LeadTable({ leads }) {
  const [selectedSegment, setSelectedSegment] = useState('All');

  // Handle dropdown change
  const handleFilterChange = (e) => {
    setSelectedSegment(e.target.value);
  };

  // Filter leads based on selected segment
  const filteredLeads =
    selectedSegment === 'All'
      ? leads
      : leads.filter((lead) => lead.segment === selectedSegment);

  return (
    <div className="table-wrapper">
      <div className="filter-container">
        <label htmlFor="segmentFilter">Filter by Segment:</label>
        <select
          id="segmentFilter"
          value={selectedSegment}
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <table className="lead-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Score</th>
            <th>Segment</th>
          </tr>
        </thead>
        <tbody>
          {filteredLeads.length > 0 ? (
            filteredLeads.map((lead, idx) => (
              <tr key={idx}>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.company}</td>
                <td>{lead.score}</td>
                <td>
                  <span className={`segment ${lead.segment.toLowerCase()}`}>
                    {lead.segment}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>
                No leads to display
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default LeadTable;
