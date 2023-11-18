import "./Slider.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";

const Slider = () => {
  const { sliderImg, sliderText, sliderOrder } = useContext(AppContext);
  return (
    <div className="slider-container container">
      <Carousel>
        <div className="slide slide-1" style={{ order: sliderOrder[1] }}>
          <img src={sliderImg[1]} alt="" />
          <p className="legend">{sliderText[1]}</p>
        </div>
        <div className="slide slide-2" style={{ order: sliderOrder[2] }}>
          <img src={sliderImg[2]} alt="" />
          <p className="legend">{sliderText[2]}</p>
        </div>
        <div className="slide slide-3" style={{ order: sliderOrder[3] }}>
          <img src={sliderImg[3]} alt="" />
          <p className="legend">{sliderText[3]}</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
