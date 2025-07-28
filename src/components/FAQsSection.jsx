import React,{ useState } from 'react';
import './FAQsSection.css';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    question: 'Who can apply for a loan?',
    answer: 'Anyone in the informal sector with a UPI account can apply.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, all data is anonymized and encrypted. Your privacy is fully respected.',
  },
  {
    question: 'How does KathaKaal assess me?',
    answer: 'We use your digital behavior (like UPI activity and bills) and your personal story to assess reliability.',
  },
  {
    question: 'Can I repay early?',
    answer: 'Yes, you can repay early without penalties. Early payment helps build trust.',
  },
  {
    question: 'Do I need a credit score?',
    answer: 'No credit history or CIBIL score is required..',
  },
  {
    question: 'Is it necessary to be part of SHGs?',
    answer: 'No, it is not neccesary to be part of any SHGs.',
  },
];

const FAQsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

   const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
<<<<<<< HEAD
    <section>
      <h2>FAQs</h2>
      <div>
        <h3>Question 1?</h3>
        <p>Answer for question 1.</p>
=======
    <section id="faqs" className="faq-section">
      <h2>Frequently Asked Questions(FAQs)</h2>
       <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-icon">{activeIndex === index ? <FiChevronUp/> : <FiChevronDown/> }</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
>>>>>>> e71f650 (Added testimonials and FAQs Section)
      </div>
    </section>
  );
};

export default FAQsSection;
