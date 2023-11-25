import "./section.scss";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";

const Section = () => {
  const { sectionImg, sectionOrder } = useContext(AppContext);
  return (
    <div className="section-container">
      <div
        className="section-one"
        style={{
          backgroundImage: `url(${sectionImg[1]})`,
          order: sectionOrder[1],
        }}
      ></div>
      <div
        className="section-two"
        style={{
          backgroundImage: `url(${sectionImg[2]})`,
          order: sectionOrder[2],
        }}
      ></div>
      <div
        className="section-three"
        style={{
          backgroundImage: `url(${sectionImg[3]})`,
          order: sectionOrder[3],
        }}
      ></div>
    </div>
  );
};

export default Section;
