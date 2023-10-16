import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/css/Welcome.css";

const WelcomePage = () => {
  const navigate = useNavigate();

  const quotes = [
    {
      text: 'Life insurance is the greatest proof of love that we can leave our loved ones.',
      author: 'Unknown',
    },
    {
      text: 'The only time to buy life insurance is before you need it.',
      author: 'Winston Churchill',
    },
    {
      text: 'Life insurance is the shield that protects the family from financial ruin.',
      author: 'Dave Ramsey',
    },
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const handleUserLogin = () => {
    navigate('/Login');
  };

  const handleAdminLogin = () => {
    navigate('/AdminLogin');
  };

  const handleGetQuote = () => {
    navigate('/Signup');
  };

  return (
    <div className='bg-col'>
    <div className='bg-imgW'>
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Welcome to the Life Insurance Portal</h1>
        <h2>Protecting your loved ones is your responsibility. We're here to help you do just that.</h2>
        <button onClick={handleUserLogin} className="btn">User Login</button>
        <button onClick={handleAdminLogin} className="btn">Admin Login</button>
      </div>
      <div className="quote-container">
        <p className="quote-text">"{randomQuote.text}"</p>
        <p className="quote-author">- {randomQuote.author}</p>
      </div>
      <div className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Life Insurance Policies</li>
          <li>Term Life Insurance</li>
          <li>Whole Life Insurance</li>
          <li>Universal Life Insurance</li>
        </ul>
      </div>
      <div className="cta">
        <h2>Ready to Protect Your Family?</h2>
        <p>Get started with us today. Explore our insurance options and secure your family's future.</p>
        <button onClick={handleGetQuote} className="btn">SIGN UP</button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default WelcomePage;
