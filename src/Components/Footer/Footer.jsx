import Capture from '../pictures/Capture.png'
import './Footer.css'

export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer1">
                    <div className="logo1">
                        <img src={Capture} alt="" width="100%" height="100%"/>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, nobis.</p>
                </div>
                <div className="footer2">
                    <div>
                        <h5>Account</h5>
                        <p>Login</p>
                        <p>Signup</p>
                    </div>
                    <div>
                        <h5>Company</h5>
                        <p>Privacy Policy</p>
                        <p>Terms of use</p>
                        <p>Compliance</p>
                    </div>
                    <div>
                        <h5>Support</h5>
                        <p>Contact Us</p>
                        <p>FAQ</p>
                    </div>
                </div>
            </div>
            <p style={{width: '210px' , marginBottom:'40px', margin:'auto'}}>Copyright © 2022 by Techrefic</p>
        </>
    )
}