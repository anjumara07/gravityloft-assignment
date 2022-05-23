import './Homepage.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Card2} from '../Cards/Card2';
import {Card3} from '../Cards/Card3';
import {Card4} from '../Cards/Card4';
import {Card5} from '../Cards/Card5';
import Capture4 from '../pictures/Capture4.png';
import head1 from '../pictures/head1.png'

export const HomePage = ()=>{
    return (
        <>
           <div className="box">
                <div className="boxes" sx={{ minWidth: 200 }} style={{width:'100%', display: 'flex' }}>
                    <CardContent style={{marginLeft:'5%' , marginTop:'6%'}}>
                        <Typography variant="h5" component="div">
                        <img src={head1} alt="" width='24%'/>
                        <h2>the best way to connect with Industry Experts</h2>
                        </Typography>
                        <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, aliquam. Laudantium corrupti facere vero quam illo.
                        </Typography>
                    </CardContent>                    
                    <Card sx={{ minWidth: 275 }} style={{margin:'5% 8% 5% 5%',width:'45%'}}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                            <h3>Get Trial Version to find experts</h3>
                            </Typography>
                            <Typography variant="body2" style={{marginLeft:'4%'}}>
                            <label>Full Name</label><br />
                            <input type="text" placeholder="anjum123#" /> <br /> <br />
                            <label>Email Address</label><br />
                            <input type="text" placeholder="anjum@gmail.com" /> <br />
                            <button className="btn" style={{color:'white',backgroundColor:'#5746EC' , width:'95%',marginTop:'10px' , padding:'10px', border:'none',borderRadius:'5px',cursor:'pointer'}}>Get Started</button>
                            </Typography>
                        </CardContent>     
                    </Card>
                </div>
           </div>

           <h1>Expert Cloud</h1>
           <p className="lorem">lorem ipsum dolor sit amet, consectetur adip</p>

           <Card2 />
           <Card3 />
           <Card4 />

           <h1>FAQ</h1>
           <p className="lorem">lorem ipsum dolor sit amet, consectetur adip</p>

           <Card5 />

           <Card id='card6' style={{ height:'280px' , width:'80%', marginBottom:'80px',marginLeft:'10%'}}>
               <img src={Capture4} alt="" width="100%" height="100%"/>
           </Card>
        </>
    )     
}