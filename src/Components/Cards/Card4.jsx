import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Capture2 from '../pictures/Capture2.png';
import head4 from '../pictures/head4.png'


export function Card4() {
  const theme = useTheme();

  return (
    <div className="cardBox1">
        <Box style={{width:'40%', marginLeft:'6%', marginTop:"20px"}}>
            <CardContent>
                <Typography variant="h5" component="div">
                <img src={head4} alt="" width="65%"/>
                <h2>With Experts is easy now.</h2>
                </Typography>
                <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolore nulla, minus doloribus esse assumenda voluptas, possimus numquam aut, error eligendi quidem nisi. Magnam veniam, odit neque explicabo quidem laboriosam.
                </Typography>
                <br />
                <Typography variant="body2" style={{color:'#5746EC'}}>
                    Get started
                </Typography>
            </CardContent> 
        </Box>
        <div className="cardPic" style={{marginLeft:'103px'}}>
            <img src={Capture2} alt="" width="100%" height="100%"/>
        </div>
    </div>
  );
}
