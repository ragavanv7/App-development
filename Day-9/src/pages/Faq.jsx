import React from 'react';

// FAQ data as an array of objects
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
  // Add more FAQ items as needed
];

const FAQPage = () => {
  return (
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
  );
};

export default FAQPage;
