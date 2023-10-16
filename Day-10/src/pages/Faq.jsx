import React from 'react';
import "../assets/css/Faq.css";
const faqData = [
  {
    question: 'What types of insurance policies do you offer?',
    answer: 'We offer a range of insurance policies, including term life, whole life, and universal life insurance. Each type has its own features and benefits.',
  },
  {
    question: 'How do I file a claim?',
    answer: 'To file a claim, please visit our "Claims" page and follow the instructions provided. You can also contact our customer support for assistance.',
  },
  {
    question: 'Can I update my policy information?',
    answer: 'Yes, you can update your policy information by logging into your account and visiting the "Profile" section. If you need further assistance, please contact us.',
  },
  
  {
    question: 'How can I choose the right life insurance policy?',
    answer: 'Choosing the right life insurance policy depends on your financial goals and needs. Our agents can help you assess your situation and recommend the best option for you.',
  },
  {
    question: 'How do I calculate the coverage amount I need?',
    answer: 'You can use our online calculator to estimate the coverage amount needed based on factors like income, expenses, debts, and future financial goals.',
  },
  {
    question: 'Can I update my beneficiary designation?',
    answer: 'Yes, you can update your beneficiary information by contacting our customer support or through your online account.',
  },
  {
    question: 'What happens if I miss a premium payment?',
    answer: 'If you miss a premium payment, your policy may lapse or be subject to a grace period. Contact our support team to discuss your options.',
  },
  // Add more FAQ items as needed
];

const FAQPage = () => {
  return (
      <div className='fq'>
    <div>
      
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <h3>{`Q${index + 1}: ${item.question}`}</h3>
            <p>{`A: ${item.answer}`}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQPage;
