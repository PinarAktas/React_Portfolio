import React from 'react';
import "./intro.scss"


export default function Intro() {


  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/pinara.jpg' alt=''/>
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There, I'm</h2>
          <h1>Pinar Aktas</h1>
          <h3>Freelance <span >Full Stack Engineer</span></h3>
          
        </div>
        <a href='#portfolio'>
          <img src='assets/down.png' alt=''/>
        </a>
      </div>
    </div>
  );
}
