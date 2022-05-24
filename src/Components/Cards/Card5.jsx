import * as React from 'react';
import './Card5.css'
import AddIcon from '@mui/icons-material/Add';
import MinimizeIcon from '@mui/icons-material/Minimize';

export function Card5() {

  return (
    <div className="cardBox">
        <div className='card51 font'>
            <div className='font'>What is Techrefic ?</div>
            <div><MinimizeIcon/> </div>
        </div>
        <p className='lorem1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsa deleniti et recusandae sapiente corrupti, ipsam dolorum rem optio eaque. Totam rem voluptate, quis suscipit sint quo. Libero eos consectetur non ipsa, maxime aliquam.</p>
        <div className='card5 font'>
            <div>What is Techrefic ?</div>
            <div><AddIcon/> </div>
        </div>
        <div className='card5 font'>
            What is Techrefic ?<AddIcon/>
        </div>
        <div className='card5 font'>
            What is Techrefic ? <AddIcon/>
        </div>
        <div className='card5 font'>
            What is Techrefic ? <AddIcon/>
        </div>
        <div className='card5 font'>
            What is Techrefic ? <AddIcon/>
        </div>
        <div className='card5 font'>
            What is Techrefic ? <AddIcon/>
        </div>
    </div>
  );
}
