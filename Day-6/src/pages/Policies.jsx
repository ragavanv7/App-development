import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Components/Layout';
import "../assets/css/Policies.css";
import NavbarHome from '../Components/NavbarHome';
import { useNavigate } from 'react-router-dom';
const PrivacyPolicy = () => {
    return (
        <div className='body'>
        <div className='cardP'>
      <div className="privacy-policy">
        <h2>Privacy Policy</h2>
        <p>
          Welcome to the Life Insurance Portal privacy policy. Your privacy is
          important to us, and we are committed to protecting your personal
          information.
        </p>
  
        <h3>Information We Collect</h3>
        <p>
          We may collect the following types of information when you use our
          portal:
        </p>
        <ul>
          <li>Personal Information (such as name, address, and contact details)</li>
          <li>Financial Information (related to insurance policies)</li>
          <li>Usage Data (including browsing history and interactions with the portal)</li>
        </ul>
  
        <h3>How We Use Your Information</h3>
        <p>We use your information for the following purposes:</p>
        <ul>
          <li>Provide and maintain our services</li>
          <li>Process insurance applications and claims</li>
          <li>Improve our portal and services</li>
          <li>Communicate with you about policies and updates</li>
        </ul>
  
        <h3>Security</h3>
        <p>
          We take the security of your data seriously and implement measures to
          protect it. However, no method of transmission over the internet is
          completely secure, and we cannot guarantee the absolute security of your
          data.
        </p>
  
        <h3>Third-Party Links</h3>
        <p>
          Our portal may contain links to third-party websites or services. Please
          note that we are not responsible for their privacy practices. We
          encourage you to read the privacy policies of those third parties.
        </p>
  
        <h3>Contact Us</h3>
        <p>
          If you have any questions or concerns about our privacy policy, please
          contact us at <a href="mailto:contact@lifeinsuranceportal.com">https://www.facebook.com/profile.php?id=61551350851775</a>.
        </p>
  
        <p>
          This privacy policy is effective as of [Date] and may be updated
          periodically. Please check this page for any updates.
        </p>
      </div>
      </div>
      </div>
    );
  };
  
  export default PrivacyPolicy;