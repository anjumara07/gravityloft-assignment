import './Navbar.css';
import logo from '../pictures/Capture.png';
import Button from '@mui/material/Button';

export function Navbar() {
  return (
      <>
        <div className="navbar">
            <div className="logo">
               <img src={logo} alt="" width="100%" height="100%"/>
            </div>
            <div className='buttons'>
                <Button className="btn" style={{color:'#727479'}} variant="text">Contact Us</Button>
                <Button className="btn" style={{color:'#5746EC',backgroundColor:'white', border:'1px solid #5746EC'}} variant="textoutlined">Login</Button>
                <Button className="btn" style={{color:'white',backgroundColor:'#5746EC'}} variant="contained">Register</Button>
            </div>
        </div>
      </>
  )
}
