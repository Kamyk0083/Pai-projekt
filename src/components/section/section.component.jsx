// section.jsx

import "./section.scss";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";

const Section = () => {
  const {
    boxImg,
    sectionOrder,
    sectionBackgroundColor,
    boxColor,
    sectionImg,
    boxTitle,
  } = useContext(AppContext);

  return (
    <div className="section-container">
      <div
        className="section-one"
        style={{
          order: sectionOrder[1],
          backgroundColor: sectionBackgroundColor[1],
        }}
      >
        <img src={sectionImg[1]} alt="F-16" />
      </div>
      <div
        className="section-two"
        style={{
          order: sectionOrder[2],
          backgroundColor: sectionBackgroundColor[2],
        }}
      >
        <div className="box-container">
          <div className="boxOne" style={{ background: boxColor[1] }}>
            <img src={boxImg[1]} alt="F-18" />
            <h2 className="title">{boxTitle[1]}</h2>
            <p>Top speed: 1 915 km/h</p>
            <p>Price: $71.3M</p>
            <p>Year of first production: 1974</p>
            <p>Product made in: US</p>
          </div>
          <div className="boxTwo" style={{ background: boxColor[2] }}>
            <img src={boxImg[2]} alt="F-35B" />
            <h2 className="title">{boxTitle[2]}</h2>
            <p>Top speed: 1 976 km/h</p>
            <p>Price: $177M</p>
            <p>Year of first production: 2015</p>
            <p>Product made in: US</p>
          </div>
          <div className="boxThree" style={{ background: boxColor[3] }}>
            <img src={boxImg[3]} alt="AH-64 Apache" />
            <h2 className="title">{boxTitle[3]}</h2>
            <p>Top speed: 293 km/h</p>
            <p>Price: $52M</p>
            <p>Year of first production: 1984</p>
            <p>Product made in: US</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
