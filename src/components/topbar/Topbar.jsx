import React from 'react';
import "./topbar.scss"

import Person2Icon from '@mui/icons-material/Person2';
import MailIcon from '@mui/icons-material/Mail';

export default function Topbar({ menuOpen,setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className='wrapper'>
        <div className='left'>
            <a href='#intro' className='logo'>Pinar Aktas</a>
            <div className='itemContainer'>
              <Person2Icon className='icon'/>
              <span>+1 484 432 7373</span>
            </div>
            <div className='itemContainer'>
              <MailIcon className='icon'/>
              <span>pinaraktas81@gmail.com</span>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
          </div>


        </div>

      </div>

    </div>
  );
}
