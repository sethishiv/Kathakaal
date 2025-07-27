import React from 'react';
import './LoanTypesSection.css';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaGraduationCap, FaBriefcase} from 'react-icons/fa';  //icons used

//list of loans 
const loanTypes=[
  {
    title:'Personal Loan',
    icon: <FaUser />,
    description: 'For life’s essentials — medical needs, repairs, or family support — when you need it most.',
  },
  {
    title: 'Education Loan',
    icon: <FaGraduationCap />,
    description: 'Helping students and parents invest in brighter futures',
    comingSoon: true,
  },
  {
    title: 'Business Loan',
    icon: <FaBriefcase />,
    description: 'Boost your business growth with quick funding.',
    comingSoon: true,
  }
]
const LoanTypesSection = () => {
  const navigate = useNavigate();
  return (
<<<<<<< HEAD
    <section>
=======
    <section id="loan-types" className="loan-types-section">
>>>>>>> 472b3bc (Designed and implemented the LoanTypes Section)
      <h2>Explore Loan Types</h2>
      <p className="loan-subtitle">
        Loans that meet you where you are.
      </p>
      <div className="loan-grid">
        {loanTypes.map((loan, index) => (
          <div className="loan-card" key={index}>
            <div className="loan-card-body">
              <div className="loan-header">
                <div className="loan-icon">{loan.icon}</div>
                <h3 className="loan-title">{loan.title}</h3>
              </div>
              <p className="loan-description">{loan.description}</p>
            </div>
            {/* if they are coming soon then will not show the loan buttons  */}
            {loan.comingSoon ? (
              <div className="coming-soon-tag">Coming Soon</div>
            ) : (
              <div className="loan-buttons">
                <button className="btn-secondary">Know More</button>
                <button
                  className="btn-primary"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate('/loans');
                  }}
                >
                  Apply Now
                </button>
              </div>
      )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoanTypesSection;
