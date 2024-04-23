import React from 'react';
import '../css/usersettings.css';
import Phish from '../assets/phishing.jpg';


class UserSettings extends React.Component {
    render() {
        return (
            <div className="container-fluid mt-5">
                <div className="row h-50 justify-content-center ">
                    <div className="col-lg-5  pb-5">
                        <div className="author-card pb-3">
                            <div className="author-card-cover" style={{backgroundImage: "url(https://bootdey.com/img/Content/flores-amarillas-wallpaper.jpeg)"}}>
                                <a className="btn btn-style-1 btn-white btn-sm" href="#" data-toggle="tooltip" title="" data-original-title="You currently have 290 Reward points to spend">
                                    <i className="fa fa-award text-md"></i>&nbsp;290 points
                                </a>
                            </div>
                            <div className="author-card-profile">
                                <div className="author-card-avatar">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Daniel Adams" />
                                </div>
                                <div className="author-card-details">
                                    <h5 className="author-card-name text-lg">Daniel Adams</h5>
                                    <span className="author-card-position">Joined February 06, 2017</span>
                                </div>
                            </div>
                            <div className='did-you-know'>
    <h1>Did you know that ?</h1>
    <p>Some phishing emails include malicious attachments that, when opened, can install malware on the recipient's device. Users should avoid opening attachments from unknown or suspicious sources.</p>

    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={Phish} alt="Logo" style={{ width: '30%', animation: 'swing 2s infinite' }} />
    </div>
</div>



                        </div>
      
                    </div>
                    
                    <div className="col-lg-5 pb-5">
    <form>
        <div className="form-group">
            <label htmlFor="account-fn" className="font-size-lg">First Name</label>
            <input className="form-control form-control-lg" type="text" id="account-fn" value="Daniel" required />
        </div>
        <div className="form-group">
            <label htmlFor="account-ln" className="font-size-lg">Last Name</label>
            <input className="form-control form-control-lg" type="text" id="account-ln" value="Adams" required />
        </div>
        <div className="form-group">
            <label htmlFor="account-email" className="font-size-lg">E-mail Address</label>
            <input className="form-control form-control-lg" type="email" id="account-email" value="daniel.adams@example.com" disabled />
        </div>
        <div className="form-group">
            <label htmlFor="account-phone" className="font-size-lg">Phone Number</label>
            <input className="form-control form-control-lg" type="text" id="account-phone" value="+7 (805) 348 95 72" required />
        </div>
        <div className="form-group">
            <label htmlFor="account-pass" className="font-size-lg">New Password</label>
            <input className="form-control form-control-lg" type="password" id="account-pass" />
        </div>
        <div className="form-group">
            <label htmlFor="account-confirm-pass" className="font-size-lg">Confirm Password</label>
            <input className="form-control form-control-lg" type="password" id="account-confirm-pass" />
        </div>
        <div>
            <button className="btn btn-style-1 btn-primary" type="button" data-toast="" data-toast-position="topRight" data-toast-type="success" data-toast-icon="fe-icon-check-circle" data-toast-title="Success!" data-toast-message="Your profile updated successfully.">Update Profile</button>
        </div>
    </form>
</div></div>
            </div>
        );
    }
}

export default UserSettings;
