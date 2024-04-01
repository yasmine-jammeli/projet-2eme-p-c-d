// Footer.jsx
import React from 'react';
import './Footer.css'; // Import CSS file for styling

function Footer() {
  return (
    <footer className='footer'>
      <div className='social-icons'>
        <a href='#!' className='social-icon'>
          <i className='fab fa-facebook-f'></i>
        </a>
        <a href='#!' className='social-icon'>
          <i className='fab fa-twitter'></i>
        </a>
        <a href='#!' className='social-icon'>
          <i className='fab fa-google'></i>
        </a>
        <a href='#!' className='social-icon'>
          <i className='fab fa-instagram'></i>
        </a>
        <a href='#!' className='social-icon'>
          <i className='fab fa-linkedin-in'></i>
        </a>
        <a href='#!' className='social-icon'>
          <i className='fab fa-github'></i>
        </a>
      </div>
      <div className='footer-text'>
        © {new Date().getFullYear()}CyberHook Defender 
      </div>
    </footer>
  );
}

export default Footer;
