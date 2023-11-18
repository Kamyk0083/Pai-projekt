import "./Dashboard.scss";
import { useContext } from "react";
import { AppContext } from "./../../context/app.context";
import { Link } from "react-router-dom";
import React from "react";

const Dashboard = () => {
  const {
    slider,
    setSlider,
    sliderImg,
    setSliderImg,
    boxColor,
    setBoxColor,
    footerText,
    setFooterText,
    boxText,
    setBoxText,
    sliderText,
    setSliderText,
    boxOrder,
    setBoxOrder,
    sliderOrder,
    setSliderOrder,
  } = useContext(AppContext);

  const setSliderImgHanlder = (e) => {
    const sliderNumber = Number(e.target.name);
    const sliderImgValue = e.target.value;

    sliderImg[sliderNumber] = sliderImgValue;

    setSliderImg(sliderImg);
  };

  const setBoxColorHandler = (e) => {
    const boxNumber = Number(e.target.name);
    const boxColorValue = e.target.value;

    boxColor[boxNumber] = boxColorValue;

    setBoxColor(boxColor);
  };

  const setFooterTextHandler = (e) => {
    const footerNumber = Number(e.target.name);
    const footerNumberValue = e.target.value;

    footerText[footerNumber] = footerNumberValue;

    setFooterText(footerText);
  };

  const setBoxesTextHandler = (e) => {
    const boxNumberText = Number(e.target.name);
    const boxNumberTextValue = e.target.value;

    boxText[boxNumberText] = boxNumberTextValue;

    setBoxText(boxText);
  };

  const setSliderTextHandler = (e) => {
    const sliderNumberText = Number(e.target.name);
    const sliderNumberTextValue = e.target.value;

    sliderText[sliderNumberText] = sliderNumberTextValue;

    setSliderText(sliderText);
  };

  const setBoxOrderHandler = (e) => {
    const boxOrderNumber = Number(e.target.name);
    const boxOrderValue = e.target.value;

    boxOrder[boxOrderNumber] = boxOrderValue;
    setBoxOrder(boxOrder);
  };

  const setSliderOrderHandler = (e) => {
    const sliderOrderNumber = Number(e.target.name);
    const sliderOrderValue = e.target.value;

    sliderOrder[sliderOrderNumber] = sliderOrderValue;
    setSliderOrder(sliderOrder);
  };
  return (
    <div className="dashboard-container">
      <div className="show-home-btn">
        <Link to="/">Show home page</Link>
      </div>
      <div className="section-settings">
        <div className="title">
          <h2>Slider</h2>
          <button onClick={() => setSlider(!slider)}>
            {slider ? "OFF" : "ON"}
          </button>
        </div>
        <div className="sliders-img">
          <h2>Sliders IMGs</h2>
          <div className="inputs">
            <p>1</p>
            <input
              onChange={(e) => setSliderImgHanlder(e)}
              defaultValue={sliderImg[1]}
              type="text"
              name="1"
              placeholder="paste here URL to img"
            />
            <p>2</p>
            <input
              onChange={(e) => setSliderImgHanlder(e)}
              defaultValue={sliderImg[2]}
              type="text"
              name="2"
              placeholder="paste here URL to img"
            />
            <p>3</p>
            <input
              onChange={(e) => setSliderImgHanlder(e)}
              defaultValue={sliderImg[3]}
              type="text"
              name="3"
              placeholder="paste here URL to img"
            />
          </div>
          <div className="slider-order-name">
            <h2>Slider Order</h2>
          </div>
          <div className="slider-order-input">
            <p>1</p>
            <input
              type="number"
              min={1}
              max={3}
              name="1"
              onChange={(e) => setSliderOrderHandler(e)}
              defaultValue={sliderOrder[1]}
            />
            <p>2</p>
            <input
              type="number"
              min={1}
              max={3}
              name="2"
              onChange={(e) => setSliderOrderHandler(e)}
              defaultValue={sliderOrder[2]}
            />
            <p>1</p>
            <input
              type="number"
              min={1}
              max={3}
              name="3"
              onChange={(e) => setSliderOrderHandler(e)}
              defaultValue={sliderOrder[3]}
            />
          </div>
          <div className="slider-text">
            <h2>Slider Text</h2>
            <div className="slider-text-input">
              <input
                name="1"
                type="text"
                onChange={(e) => setSliderTextHandler(e)}
                defaultValue={sliderText[1]}
              />
              <input
                name="2"
                type="text"
                onChange={(e) => setSliderTextHandler(e)}
                defaultValue={sliderText[2]}
              />
              <input
                name="3"
                type="text"
                onChange={(e) => setSliderTextHandler(e)}
                defaultValue={sliderText[3]}
              />
            </div>
          </div>
          <div className="box-colors">
            <h2>Box colors</h2>
            <div className="color-input">
              <p>1</p>
              <input
                onChange={(e) => setBoxColorHandler(e)}
                defaultValue={boxColor[1]}
                type="color"
                name="1"
              />
              <p>2</p>
              <input
                onChange={(e) => setBoxColorHandler(e)}
                defaultValue={boxColor[2]}
                type="color"
                name="2"
              />
              <p>3</p>
              <input
                onChange={(e) => setBoxColorHandler(e)}
                defaultValue={boxColor[3]}
                type="color"
                name="3"
              />
            </div>
          </div>
          <div className="boxes-text-order">
            <h2>Boxes Order</h2>
          </div>
          <div className="boxes-order-inputs">
            <p>1</p>
            <input
              type="number"
              min={1}
              max={3}
              onChange={(e) => setBoxOrderHandler(e)}
              defaultValue={boxOrder[1]}
              name="1"
            />
            <p>2</p>
            <input
              type="number"
              min={1}
              max={3}
              onChange={(e) => setBoxOrderHandler(e)}
              defaultValue={boxOrder[2]}
              name="2"
            />
            <p>3</p>
            <input
              type="number"
              min={1}
              max={3}
              onChange={(e) => setBoxOrderHandler(e)}
              defaultValue={boxOrder[3]}
              name="3"
            />
          </div>
          <div className="boxes-text">
            <h2>Boxes Texts</h2>
            <div className="boxes-inputs">
              <p>1</p>
              <input
                type="text"
                name="16"
                onChange={(e) => setBoxesTextHandler(e)}
                defaultValue={boxText[16]}
              />
              <input
                type="text"
                name="1"
                onChange={(e) => setBoxesTextHandler(e)}
                defaultValue={boxText[1]}
              />
              <input
                type="text"
                name="2"
                onChange={(e) => setBoxesTextHandler(e)}
                defaultValue={boxText[2]}
              />
              <input
                type="text"
                name="3"
                onChange={(e) => setBoxesTextHandler(e)}
                defaultValue={boxText[3]}
              />
              <input
                type="text"
                name="4"
                onChange={(e) => setBoxesTextHandler(e)}
                defaultValue={boxText[4]}
              />
              <input
                type="text"
                name="5"
                onChange={(e) => setBoxesTextHandler(e)}
                defaultValue={boxText[5]}
              />
              <p>2</p>
              <input
                type="text"
                name="17"
                onChange={(e) => setBoxesTextHandler(e)}
                defaultValue={boxText[17]}
              />
              <input
                type="text"
                name="6"
                onChange={(e) => setBoxesTextHandler(e)}
                defaultValue={boxText[6]}
              />
              <input
                type="text"
                name="7"
                onChange={(e) => setBoxesTextHandler(e)}
                defaultValue={boxText[7]}
              />
              <input
                type="text"
                name="8"
                onChange={(e) => setBoxesTextHandler(e)}
                defaultValue={boxText[8]}
              />
              <input
                type="text"
                name="9"
                onChange={(e) => setBoxesTextHandler(e)}
                defaultValue={boxText[9]}
              />
              <input
                type="text"
                name="10"
                onChange={(e) => setBoxesTextHandler(e)}
                defaultValue={boxText[10]}
              />
              <p>3</p>
              <input
                type="text"
                name="18"
                onChange={(e) => setBoxesTextHandler(e)}
                defaultValue={boxText[18]}
              />
              <input
                type="text"
                onChange={(e) => setBoxesTextHandler(e)}
                defaultValue={boxText[11]}
              />
              <input
                type="text"
                onChange={(e) => setBoxesTextHandler(e)}
                defaultValue={boxText[12]}
              />
              <input
                type="text"
                onChange={(e) => setBoxesTextHandler(e)}
                defaultValue={boxText[13]}
              />
              <input
                type="text"
                onChange={(e) => setBoxesTextHandler(e)}
                defaultValue={boxText[14]}
              />
              <input
                type="text"
                onChange={(e) => setBoxesTextHandler(e)}
                defaultValue={boxText[15]}
              />
            </div>
          </div>
          <div className="footer-text">
            <h2>Footer text</h2>
            <div className="footer-inputs">
              <p>1</p>
              <input
                onChange={(e) => setFooterTextHandler(e)}
                defaultValue={footerText[1]}
                type="text"
                name="1"
              />
              <p>2</p>
              <input
                onChange={(e) => setFooterTextHandler(e)}
                defaultValue={footerText[2]}
                type="text"
                name="2"
              />
            </div>
          </div>
        </div>
        <div className="settings"></div>
      </div>
    </div>
  );
};

export default Dashboard;
