import React, { useState } from 'react';

function InvestmentManagement() {
  const [investments, setInvestments] = useState([]);
  const [newInvestment, setNewInvestment] = useState({ policyNumber: '', amount: '' });

  // Function to handle adding a new investment
  const handleAddInvestment = () => {
    if (newInvestment.policyNumber && newInvestment.amount) {
      setInvestments([...investments, newInvestment]);
      setNewInvestment({ policyNumber: '', amount: '' });
    }
  };

  return (
    <div>
      <h2>Life Insurance Investment Management</h2>
      <div>
        <h3>Add New Investment</h3>
        <label htmlFor="policyNumber">Policy Number:</label>
        <input
          type="text"
          id="policyNumber"
          value={newInvestment.policyNumber}
          onChange={(e) => setNewInvestment({ ...newInvestment, policyNumber: e.target.value })}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          type="text"
          id="amount"
          value={newInvestment.amount}
          onChange={(e) => setNewInvestment({ ...newInvestment, amount: e.target.value })}
        />
        <button onClick={handleAddInvestment}>Add Investment</button>
      </div>
      <div>
        <h3>Investment List</h3>
        <table>
          <thead>
            <tr>
              <th>Policy Number</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {investments.map((investment, index) => (
              <tr key={index}>
                <td>{investment.policyNumber}</td>
                <td>${investment.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InvestmentManagement;
