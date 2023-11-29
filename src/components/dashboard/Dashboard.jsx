import "./Dashboard.scss";
import { useContext } from "react";
import { AppContext } from "./../../context/app.context";
import { Link } from "react-router-dom";
import React from "react";

const Dashboard = () => {
  const {
    footerText,
    setFooterText,
    boxImg,
    setBoxImg,
    sectionOrder,
    setSectionOrder,
    sectionBackgroundColor,
    setSectionBackgroundColor,
    boxColor,
    setBoxColor,
    sectionImg,
    setSectionImg,
    boxTitle,
    setBoxTitle,
  } = useContext(AppContext);

  const setFooterTextHandler = (e) => {
    const footerNumber = Number(e.target.name);
    const footerNumberValue = e.target.value;

    footerText[footerNumber] = footerNumberValue;

    setFooterText(footerText);
  };

  const setBoxImgHandler = (e) => {
    const boxNumber = Number(e.target.name);
    const boxNumberValue = e.target.value;

    boxImg[boxNumber] = boxNumberValue;

    setBoxImg(boxImg);
  };

  const setSectionOrderHandler = (e) => {
    const sectionOrderNumber = Number(e.target.name);
    const sectionOrderNumberValue = e.target.value;

    sectionOrder[sectionOrderNumber] = sectionOrderNumberValue;

    setSectionOrder(sectionOrder);
  };

  const setSectionBackgroundColorHandler = (e) => {
    const sectionBackgroundColorNumber = Number(e.target.name);
    const sectionBackgroundColorNumberValue = e.target.value;

    sectionBackgroundColor[sectionBackgroundColorNumber] =
      sectionBackgroundColorNumberValue;

    setSectionBackgroundColor(sectionBackgroundColor);
  };

  const setBoxColorHandler = (e) => {
    const boxColorNumber = Number(e.target.name);
    const boxColorValue = e.target.value;

    boxColor[boxColorNumber] = boxColorValue;

    setBoxColor(boxColor);
  };

  const setSectionImgHandler = (e) => {
    const sectionImgNumber = Number(e.target.name);
    const sectionImgValue = e.target.value;

    sectionImg[sectionImgNumber] = sectionImgValue;

    setSectionImg(sectionImg);
  };

  const setBoxTitleHandler = (e) => {
    const boxTitleNumber = Number(e.target.name);
    const boxTitleValue = e.target.value;

    boxTitle[boxTitleNumber] = boxTitleValue;

    setBoxTitle(boxTitle);
  };
  return (
    <div className="dashboard-container">
      <div className="show-home-btn">
        <Link to="/">Show home page</Link>
      </div>
      <div className="section-settings">
        <div className="settings">
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
          <div className="sections-background-image">
            <h2>Boxes image</h2>
          </div>
          <div className="sections-backgroundimg-inputs">
            <p>1</p>
            <input
              onChange={(e) => setBoxImgHandler(e)}
              type="text"
              name="1"
              defaultValue={boxImg[1]}
            />
            <p>2</p>
            <input
              onChange={(e) => setBoxImgHandler(e)}
              type="text"
              name="2"
              defaultValue={boxImg[2]}
            />
            <p>2</p>
            <input
              onChange={(e) => setBoxImgHandler(e)}
              type="text"
              name="3"
              defaultValue={boxImg[3]}
            />
          </div>
          <div className="box-title">
            <h2>Box title</h2>
          </div>
          <div className="box-title-inputs">
            <p>1</p>
            <input
              onChange={(e) => setBoxTitleHandler(e)}
              type="text"
              name="1"
              defaultValue={boxTitle[1]}
            />
            <p>2</p>
            <input
              onChange={(e) => setBoxTitleHandler(e)}
              type="text"
              name="2"
              defaultValue={boxTitle[2]}
            />
            <p>3</p>
            <input
              onChange={(e) => setBoxTitleHandler(e)}
              type="text"
              name="3"
              defaultValue={boxTitle[3]}
            />
          </div>
          <div className="section-img">
            <h2>Section Img</h2>
          </div>
          <div className="section-img-input">
            <input
              onChange={(e) => setSectionImgHandler(e)}
              type="text"
              name="1"
              defaultValue={sectionImg[1]}
            />
          </div>
          <div className="section-order">
            <h2>Section Order</h2>
          </div>
          <div className="section-order-input">
            <p>1</p>
            <input
              onChange={(e) => setSectionOrderHandler(e)}
              type="number"
              min={1}
              max={2}
              name="1"
              defaultValue={sectionOrder[1]}
            />
            <p>2</p>
            <input
              onChange={(e) => setSectionOrderHandler(e)}
              type="number"
              min={1}
              max={2}
              name="2"
              defaultValue={sectionOrder[2]}
            />
          </div>
          <div className="section-background-color">
            <h2>Section Background Color</h2>
          </div>
          <div className="section-background-color-inputs">
            <p>1</p>
            <input
              onChange={(e) => setSectionBackgroundColorHandler(e)}
              type="color"
              name="1"
              defaultValue={sectionBackgroundColor[1]}
            />
            <p>2</p>
            <input
              onChange={(e) => setSectionBackgroundColorHandler(e)}
              type="color"
              name="2"
              defaultValue={sectionBackgroundColor[2]}
            />
            <p>3</p>
            <input
              onChange={(e) => setSectionBackgroundColorHandler(e)}
              type="color"
              name="3"
              defaultValue={sectionBackgroundColor[3]}
            />
          </div>
          <div className="boxColor">
            <h2>Box Color</h2>
          </div>
          <div className="boxColor-inputs">
            <p>1</p>
            <input
              onChange={(e) => setBoxColorHandler(e)}
              type="color"
              name="1"
              defaultValue={boxColor[1]}
            />
            <p>2</p>
            <input
              onChange={(e) => setBoxColorHandler(e)}
              type="color"
              name="2"
              defaultValue={boxColor[2]}
            />
            <p>3</p>
            <input
              onChange={(e) => setBoxColorHandler(e)}
              type="color"
              name="3"
              defaultValue={boxColor[3]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
