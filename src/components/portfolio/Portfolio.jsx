import React from 'react';
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import { useEffect, useState } from "react";
import {
  frontEndPortfolio,
  backEndPortfolio,
  fullStackPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "frontEnd",
      title: "FrontEnd",
    },
    {
      id: "backEnd",
      title: "BackEnd",
    },
    {
      id: "fullStack",
      title: "FullStack",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "frontEnd":
        setData(frontEndPortfolio);
        break;
      case "backEnd":
        setData(backEndPortfolio);
        break;
      case "fullStack":
        setData(fullStackPortfolio);
        break;
      default:
        setData(frontEndPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            link={item.link}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h6><a href={d.link}>{d.title}</a></h6>
          </div>
        ))}
      </div>
    </div>
  );
}