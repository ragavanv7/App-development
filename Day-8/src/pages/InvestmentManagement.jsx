import React, { useState } from 'react';
import '../assets/css/Investment.css';

function InvestmentManagement() {
  const [investments, setInvestments] = useState([]);
  const [newInvestment, setNewInvestment] = useState({
    policyName: '',
    amount: '',
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    phone: '',
  });

  const handleAddInvestment = () => {
    if (
      newInvestment.policyName &&
      newInvestment.amount &&
      newInvestment.firstName &&
      newInvestment.lastName &&
      newInvestment.age &&
      newInvestment.gender &&
      newInvestment.phone
    ) {
      setInvestments([...investments, newInvestment]);
      setNewInvestment({
        policyName: '',
        amount: '',
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        phone: '',
      });
    }
  }

  // Generate an array of age options up to 60
  const ageOptions = [];
  for (let i = 0; i <= 60; i++) {
    ageOptions.push(i);
  }

  return (
    <div>
      <div className='In-Main'>
        <div className='In-card'>
          <h2>Apply Life Insurance</h2>
          <div>
            <h3>Application Form</h3>
            <div className='In-Select'>
              <h3>Select Policies</h3>
              <select
                id='policyName'
                aria-label='Policy Name'
                value={newInvestment.policyName}
                onChange={(e) =>
                  setNewInvestment({ ...newInvestment, policyName: e.target.value })
                }
                style={{ width: '20vw', height: '5vh' }}
              >
                <option value=''>Select Policy Name</option>
                <option value='Life Insurance'>Life Insurance</option>
                <option value='Term Life Insurance'>Term Life Insurance</option>
                <option value='Whole Life Insurance'>Whole Life Insurance</option>
                <option value='Universal Life Insurance'>Universal Life Insurance</option>
              </select>
            </div>
            <div className='In-Amount'>
              <h3>Amount</h3>
              <input
                type='text'
                id='amount'
                aria-label='Amount'
                value={newInvestment.amount}
                onChange={(e) => setNewInvestment({ ...newInvestment, amount: e.target.value })}
              />
            </div>
            <div className='In-Info'>
              <h3>Additional Information</h3>
              <input
                type='text'
                id='firstName'
                aria-label='First Name'
                placeholder='First Name'
                value={newInvestment.firstName}
                onChange={(e) =>
                  setNewInvestment({ ...newInvestment, firstName: e.target.value })
                }
              />
              <input
                type='text'
                id='lastName'
                aria-label='Last Name'
                placeholder='Last Name'
                value={newInvestment.lastName}
                onChange={(e) =>
                  setNewInvestment({ ...newInvestment, lastName: e.target.value })
                }
              />
              <div>
                <label htmlFor='age'>Age</label>
                <select
                  id='age'
                  aria-label='Age'
                  value={newInvestment.age}
                  onChange={(e) => setNewInvestment({ ...newInvestment, age: e.target.value })}
                >
                  <option value=''>Select Age</option>
                  {ageOptions.map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </select>
              </div>
              <label htmlFor='age'>Gender</label>
              <select
                id='gender'
                aria-label='Gender'
                value={newInvestment.gender}
                onChange={(e) =>
                  setNewInvestment({ ...newInvestment, gender: e.target.value })
                }
              >
                <option value=''>Select Gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
              </select>
              <input
                type='text'
                id='phone'
                aria-label='Phone'
                placeholder='Phone'
                value={newInvestment.phone}
                onChange={(e) => setNewInvestment({ ...newInvestment, phone: e.target.value })}
              />
            </div>
            <div className='In-button'>
              <button onClick={handleAddInvestment}>Apply Policy</button>
            </div>
          </div>
          <div className='In-Det'> 
            <h3>Application Details</h3>
            <table>
              <thead>
                <tr>
                  <th>Policy Name</th>
                  <th>Amount</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {investments.map((investment, index) => (
                  <tr key={index}>
                    <td>{investment.policyName}</td>
                    <td>${investment.amount}</td>
                    <td>{investment.firstName}</td>
                    <td>{investment.lastName}</td>
                    <td>{investment.age}</td>
                    <td>{investment.gender}</td>
                    <td>{investment.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestmentManagement;
