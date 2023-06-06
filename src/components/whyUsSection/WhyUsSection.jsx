import React from "react";
import "./whyUsSection.style.css";
import teddyBear from "./assets/teddy-bear.svg";
import food from "./assets/diet.svg";
import blocks from "./assets/abc-block.svg";
import playTime from "./assets/playtime.svg";
import happy from "./assets/happy.svg";

const WhyUsSection = () => {
  return (
    <div className="container">
      <div className="header">
        <h1 className="header-text">Why you should choose US?</h1>
        <h3>
          <img src={happy} alt="" width="70px" height="70px" />
          From the moment children take their first steps in any of our centers.
        </h3>
      </div>
      <div className="info-container">
        {/* <div className="INFO"> */}
        <div className="item item1">
          <img src={blocks} alt="" width="30px" height="30px" />
          <h3 className="items-text"> State-of-The-Art-Facilities</h3>
          <p className="items-text">
            Helen Lusys classrooms feature the best amenities. From the
            materials we use to construct our centers to childrens furniture
            toys and supplies our centers cut zero corners
          </p>
        </div>
        <div className="item item2">
          <img src={teddyBear} alt="" width="30px" height="30px" />
          <h3 className="items-text"> Community-Based Care </h3>
          <p className="items-text">
            As a family-owned business, Helen Lusy believes that every Helen’s
            Lusy Center is an extension of family.
          </p>
        </div>
        <div className="item item3">
          <img src={playTime} alt="" width="30px" height="30px" />
          <h3 className="items-text">Our Team</h3>
          <p className="items-text">
            From our directors and teachers, to teachers aides, we employ staff
            that are specialized in early childhood education, with a passion
            for education.
          </p>
        </div>
        <div className="item item4">
          <img src={food} alt="" width="30px" height="30px" />
          <h3 className="items-text">Children’s Land Difference</h3>
          <p className="items-text">
            Fresh, organic foods, catered daily State of the art facilities Fine
            arts classes led by specialists Them atic Units with increasing
            exposure to STEAM activities
          </p>
          <script src="/areas/kindercare/assets/dist/js/main.7bf52372.js">
            {" "}
          </script>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default WhyUsSection;
