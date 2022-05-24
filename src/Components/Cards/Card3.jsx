import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Capture1 from '../pictures/Capture1.png';
import head3 from '../pictures/head3.png';


export function Card3() {
  const theme = useTheme();

  return (
    <div className="cardBox1">
        <div className="cardPic" style={{marginRight:'8%'}}>
            <img src={Capture1} alt="" width="100%" height="100%"/>
        </div>
        <Box style={{width:'40%',marginTop:"20px"}}>
            <CardContent>
                <Typography variant="h5" component="div">
                <img src={head3} alt="" width="45%"/>
                <h2>With Top Industry Experts</h2>
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
    </div>
  );
}
