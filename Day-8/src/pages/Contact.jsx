import { useState } from 'react';
import toast, {Toaster} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { login1 } from '../redux/userSlice';
import { useDispatch } from "react-redux";
import '../assets/css/Contact.css'

const ContactUsPage = () => {
  const nav = useNavigate();
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>If you have any questions or need assistance, please don't hesitate to contact us. We are here to help.</p>
      <div className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" onClick={() => nav("/HOME")}>Submit</button>
        </form>
      </div>
      <div className="contact-details">
        <h2>Contact Information</h2>
        <p>
          <strong>Phone:</strong> (123) 456-7890<br />
          <strong>Email:</strong> info@example.com<br />
          <strong>Address:</strong> 123 Insurance Way, Suite 456, City, State, Zip
        </p>
      </div>
    </div>
  );
};

export default ContactUsPage;
