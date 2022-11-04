import { useState } from "react";
import React from 'react';
import "./works.scss"


export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/wikon.png",
      title: "Workcube E-Business",
      desc:  "Software Development Engineer",
      img:
        "assets/workcube.png",
    },
    {
      id: "2",
      icon: "./assets/iicon.png",
      title: "Isdemir Iron and Steel",
      desc:"Investments Project Engineer",
      img: "assets/isdemir.png",
    },
    {
      id: "3",
      icon: "./assets/ticon.png",
      title: "Toroslar Electricity Distribution Company",
      desc:
        "Investment Project Expert",
      img:"assets/enerjisa.png",
        
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
 
    <div className='works' id='works'> 
      <div className='slider' style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>                        
        {data.map((d) => (
        <div className='contaniner'>
          <div className='item'>
            <div className='left'>
              <div className='leftContainer'>
                <div className='imgContainer'>
                  <img src={d.icon} alt=''/>
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
              </div>
            </div>
            <div className='right'>
              <img src={d.img} alt="" />
            </div>
          </div>
        </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()} />
    </div>
  );
}
