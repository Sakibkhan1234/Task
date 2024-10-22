import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo"> <span className='cr'><span>Pr</span></span> <span className='pro'>Pro-Skills</span></div>
      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>Classes</li>
          <li>Plans</li>
          <li>About Us</li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="signin-btn">Sign In</button>
      </div>
    </header>
  );
};

export default Header;
