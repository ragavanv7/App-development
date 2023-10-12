import React, { useState } from 'react';
import "../assets/css/Terms.css";
import { useNavigate } from 'react-router-dom';

const TermsPage = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const navigate = useNavigate();

  const handleAcceptTerms = () => {
    // You can perform additional actions here, such as storing the acceptance status in your application's state or database.
    setAcceptedTerms(true);

    // Redirect the user to the desired page after accepting the terms.
    navigate('/dashboard'); // Change '/dashboard' to the actual route you want to navigate to.
  };

  return (

    <div className='body1'>
    <div className='card1'>
      <h1>Terms and Conditions</h1>
      <p>
        <h2>
        Please read these terms and conditions carefully before using our life
        insurance services.
        </h2>
      </p>
        <div className='ragavan'>
      <ul>
        <li>
        Age Eligibility: Typically, you must be within a certain age range (e.g., 18 to 65 years) to apply for a life insurance policy. Age requirements can vary depending on the type of policy.
        </li>
        <li>
        Premium Payments: You are required to pay regular premium payments as specified in the policy. Failure to make premium payments can result in policy lapse or other consequences.
        </li>
        <li>
        Health Information: You may be required to provide detailed information about your health, including medical examinations and medical history. Some policies may have exclusions or higher premiums based on your health.
        </li>
        <li>
        Policy Coverage: The policy will specify the coverage amount and the duration of the coverage. Make sure you understand the coverage details, including any riders or additional benefits.
        </li>
        <li>
        Beneficiary Designation: You will need to designate one or more beneficiaries who will receive the death benefit in the event of your passing. You can typically change your beneficiaries at any time.

        </li>
        <li>
        Policy Exclusions: Policies may have exclusions for certain events or circumstances, such as suicide within the first two years of the policy or death resulting from certain activities.
        </li>
        <li>
        Policy Surrender: You may have the option to surrender the policy and receive a surrender value if you decide to cancel the policy before maturity. Surrender values are subject to terms and conditions.
        </li>
        <li>
        Suicide Clause: Most policies have a suicide clause that limits coverage within the first two years of the policy. After this period, the full death benefit is typically payable.
        </li>
        <li>
        Payment Modes: You can choose the frequency of premium payments, such as monthly, quarterly, semi-annually, or annually.
        </li>
        <li>
        Policy Renewability: Term life insurance policies may offer the option to renew the policy at the end of the term, often at a higher premium.
        </li>
      </ul>
      </div>
      


      

      {/* Add your additional terms and conditions content here */}
      
      <div className="terms-acceptance">
        <label>
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={() => setAcceptedTerms(!acceptedTerms)}
           className='checkbox-1'/>{' '}
          <h4>I accept the terms and conditions</h4>
        </label>
       
      </div>
      <div>
      <button
          className="accept-button"
          disabled={!acceptedTerms}
          onClick={handleAcceptTerms}
        >
          <h2>Accept</h2>
        </button>
        </div>
    </div>
    <br />
    <br />
    </div>
  );
};

export default TermsPage;
