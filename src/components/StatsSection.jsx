import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stat">
        <h2 className='a'>1000+</h2>
        <p>Courses to choose from</p>
      </div>
      <div className="stat">
        <h2 className='b'>5000+</h2>
        <p>Students Trained</p>
      </div>
      <div className="stat">
        <h2 className='c'>200+</h2>
        <p>Professional Trainers</p>
      </div>
    </section>
  );
};

export default StatsSection;
