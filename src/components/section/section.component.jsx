// section.jsx

import "./section.scss";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";

const Section = () => {
  const {
    sectionImg,
    sectionOrder,
    sectionText,
    sectionTextColor,
    sectionBackgroundColor,
  } = useContext(AppContext);

  return (
    <div className="section-container">
      <div
        className="section-one"
        style={{
          backgroundImage: `url(${sectionImg[1]})`,
          order: sectionOrder[1],
          color: sectionTextColor[1],
          backgroundColor: sectionBackgroundColor[1],
        }}
      >
        {sectionText[1]}
      </div>
      <div
        className="section-two"
        style={{
          backgroundImage: `url(${sectionImg[2]})`,
          order: sectionOrder[2],
          color: sectionTextColor[2],
          backgroundColor: sectionBackgroundColor[2],
        }}
      >
        {sectionText[2]}
      </div>
      <div
        className="section-three"
        style={{
          backgroundImage: `url(${sectionImg[3]})`,
          order: sectionOrder[3],
          color: sectionTextColor[3],
          backgroundColor: sectionBackgroundColor[3],
        }}
      >
        {sectionText[3]}
      </div>
    </div>
  );
};

export default Section;
