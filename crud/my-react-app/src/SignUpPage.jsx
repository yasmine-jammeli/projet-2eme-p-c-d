import React from 'react';
import './css/sign.css'; // Import your CSS file
import Logo from './assets/logo.png';
import Foundation from './assets/foundation.jpg';
import SignUp from './components/SignUp'

const SignUpPage = () => {
    return (
        <div className="page">
            <div className="half-left">
                <img src={Logo} alt="Logo" />
                <p>Lorem ipsum dolor sit amet, consectetur adorem ipsum dolor sit amet, consectetur adorem ipsum dolor sit amet, consectetur adorem ipsum dolor sit amet, consectetur adorem ipsum dolor sit amet, consectetur adorem ipsum dolor sit amet, consectetur adorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="half-right">
            <SignUp/>
            </div>
        </div>
    );
}

export default SignUpPage;
