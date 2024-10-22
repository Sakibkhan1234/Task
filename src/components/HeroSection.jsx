import React from 'react';
import './HeroSection.css';
import demo from '../images/demo.png'
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Learn a <span style={{ display: 'inline-block', position: 'relative', fontSize: '48px', fontWeight: 'bold' }}>New Skill  <svg
        style={{
          position: 'absolute',
          bottom: '-10px',
          left: '0',
          width: '100%',
          height: '20px'
        }}
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
      >
        <path d="M0,15 Q40,-3 100,15" stroke="#F7C600" strokeWidth="5" fill="none" />
      </svg></span> Everyday, Anytime, and Anywhere.</h1>
        <p>
          <span className='th'>1000+ </span>Courses covering all tech domains for you to learn and explore new opportunities. Learn from Industry Experts and land your Dream Job.
        </p>
        <div className="hero-buttons">
          <button className="start-trial-btn">Start Trial</button>
          <button className="how-it-works-btn">How it Works</button>
        </div>
      </div>
      <div className="hero-images">
        <img src={demo} alt="girl" className="hero-img" />
      </div>
    </section>
  );
};

export default HeroSection;
