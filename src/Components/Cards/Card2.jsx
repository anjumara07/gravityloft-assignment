import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Capture3 from '../pictures/Capture3.png'
import head2 from '../pictures/head2.png'

export function Card2() {

  return (
    <div className="cardBox1">
        <Box style={{width:'40%', marginLeft:'6%',marginTop:"20px"}}>
            <CardContent>
                <Typography variant="h5" component="div">
                <img src={head2} alt="" width="45%"/>
                <h2>Top Experts with advance search</h2>
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
        <div className="cardPic" style={{marginLeft:'11%'}}>
            <img src={Capture3} alt="" width="100%" height="100%"/>
        </div>
    </div>
  );
}
