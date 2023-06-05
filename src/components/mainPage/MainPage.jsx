import Button from "@mui/material/Button";
import background from "./daycare.jpg"
import React from "react";
import "./mainPage.style.css";

const MainPage = () => {
  return (
    <div className="main-page-container">
        <img className="main-background" src={background}/>
      <div className="main-page">
        <h1 className="title">Helen Lucy Daycare</h1>
        <ul className="main-page-list">
          <li className="main-list-item">Nurturing <span className="spanMain">Hearts</span>,</li>
          <li className="main-list-item">Growing <span className="spanMain">Minds</span>,</li>
          <li className="main-list-item">Where <span className="spanMain">Children</span> Shine!</li>
        </ul>
        <Button variant="contained" className="main-page-btn" style={{ width: "200px", height: "3rem", backgroundColor:"yellow", textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
