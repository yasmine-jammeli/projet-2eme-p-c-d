import React from 'react';
import './css/welcome.css'; // Import your CSS file
import Foundation from './assets/foundation.jpg';
import Logo from './assets/logo.png';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';


const WelcomePage = () => {
    return (
        <div className="welcome-container">
            <div className="left-half" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <img src={Logo} alt="Logo" style={{ width: '80%', }} />
                <div className="content">
                     <h1>WHO ARE WE?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className="contact-us">
                    <a href="#">Contact Us</a>
                    </div>
  </div>
</div>

            <div className="right-half">
                <div className="welcome-message">
                    <h1>WELCOME !</h1>
                    <p>Looking to secure your company and protect your team?</p>
                    <div className="create-account">
                    <button><Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>create Account </Link></button>
                    </div>
                    <br/><p>Already a customer?</p>
                    <div className="login">
                        <button><Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link></button>
                    </div>
                </div> 
            <Footer/>
            </div>
        </div>
    );
}

export default WelcomePage;
