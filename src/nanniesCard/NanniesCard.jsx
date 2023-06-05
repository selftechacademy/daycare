import React, { useState } from "react";
import nanny1 from "../images/nanny1.jpg";
import nanny2 from "../images/nanny2.jpg";
import "./nanniesCard.style.css";

const NanniesCard = () => {
  return (
    <>
      <h1>Meet Your Dedicated Nannies!</h1>
      <div className="nanny-list">
        <div className="nanny-card">
          <div className="images">
            <img src={nanny1}></img>
            {/* <img src={nanny2}></img> */}
          </div>
          <div className="text">
            <h2>Kate Li</h2>
            <p>
              Hello, everyone! My name is Kate, and I am thrilled to introduce
              myself as a nanny. Working with children has always been a passion
              of mine, and I consider it a privilege to have the opportunity to
              make a positive impact on their lives.
            </p>
          </div>
        </div>
        <div className="nanny-card">
          <div className="images">
            <img src={nanny2}></img>
            {/* <img src={nanny2}></img> */}
          </div>
          <div className="text">
            <h2>Kate Li</h2>
            <p>
              Hello, everyone! My name is Kate, and I am thrilled to introduce
              myself as a nanny. Working with children has always been a passion
              of mine, and I consider it a privilege to have the opportunity to
              make a positive impact on their lives.
            </p>
          </div>
        </div>
        <div className="nanny-card">
          <div className="images">
            <img src={nanny1}></img>
            {/* <img src={nanny2}></img> */}
          </div>
          <div className="text">
            <h2>Kate Li</h2>
            <p>
              Hello, everyone! My name is Kate, and I am thrilled to introduce
              myself as a nanny. Working with children has always been a passion
              of mine, and I consider it a privilege to have the opportunity to
              make a positive impact on their lives.
            </p>
          </div>
        </div>
        <div className="nanny-card">
          <div className="images">
            <img src={nanny2}></img>
            {/* <img src={nanny2}></img> */}
          </div>
          <div className="text">
            <h2>Kate Li</h2>
            <p>
              Hello, everyone! My name is Kate, and I am thrilled to introduce
              myself as a nanny. Working with children has always been a passion
              of mine, and I consider it a privilege to have the opportunity to
              make a positive impact on their lives.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NanniesCard;
