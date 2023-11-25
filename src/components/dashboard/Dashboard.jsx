import "./Dashboard.scss";
import { useContext } from "react";
import { AppContext } from "./../../context/app.context";
import { Link } from "react-router-dom";
import React from "react";

const Dashboard = () => {
  const {
    footerText,
    setFooterText,
    sectionImg,
    setSectionImg,
    sectionOrder,
    setSectionOrder,
    sectionText,
    setSectionText,
    sectionTextColor,
    setSectionTextColor,
    sectionBackgroundColor,
    setSectionBackgroundColor,
  } = useContext(AppContext);

  const setFooterTextHandler = (e) => {
    const footerNumber = Number(e.target.name);
    const footerNumberValue = e.target.value;

    footerText[footerNumber] = footerNumberValue;

    setFooterText(footerText);
  };

  const setSectionImgHandler = (e) => {
    const sectionNumber = Number(e.target.name);
    const sectionNumberValue = e.target.value;

    sectionImg[sectionNumber] = sectionNumberValue;

    setSectionImg(sectionImg);
  };

  const setSectionOrderHandler = (e) => {
    const sectionOrderNumber = Number(e.target.name);
    const sectionOrderNumberValue = e.target.value;

    sectionOrder[sectionOrderNumber] = sectionOrderNumberValue;

    setSectionOrder(sectionOrder);
  };

  const setSectionTextHandler = (e) => {
    const sectionTextNumber = Number(e.target.name);
    const sectionTextNumberValue = e.target.value;

    sectionText[sectionTextNumber] = sectionTextNumberValue;

    setSectionText(sectionText);
  };

  const setSectionTextColorHandler = (e) => {
    const sectionTextColorNumber = Number(e.target.name);
    const sectionTextColorNumberValue = e.target.value;

    sectionTextColor[sectionTextColorNumber] = sectionTextColorNumberValue;

    setSectionTextColor(sectionTextColor);
  };

  const setSectionBackgroundColorHandler = (e) => {
    const sectionBackgroundColorNumber = Number(e.target.name);
    const sectionBackgroundColorNumberValue = e.target.value;

    sectionBackgroundColor[sectionBackgroundColorNumber] =
      sectionBackgroundColorNumberValue;

    setSectionBackgroundColor(sectionBackgroundColor);
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
            <h2>Sections background image</h2>
          </div>
          <div className="sections-backgroundimg-inputs">
            <p>1</p>
            <input
              onChange={(e) => setSectionImgHandler(e)}
              type="text"
              name="1"
              defaultValue={sectionImg[1]}
            />
            <p>2</p>
            <input
              onChange={(e) => setSectionImgHandler(e)}
              type="text"
              name="2"
              defaultValue={sectionImg[2]}
            />
            <p>2</p>
            <input
              onChange={(e) => setSectionImgHandler(e)}
              type="text"
              name="3"
              defaultValue={sectionImg[3]}
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
              max={3}
              name="1"
              defaultValue={sectionOrder[1]}
            />
            <p>2</p>
            <input
              onChange={(e) => setSectionOrderHandler(e)}
              type="number"
              min={1}
              max={3}
              name="2"
              defaultValue={sectionOrder[2]}
            />
            <p>3</p>
            <input
              onChange={(e) => setSectionOrderHandler(e)}
              type="number"
              min={1}
              max={3}
              name="3"
              defaultValue={sectionOrder[3]}
            />
          </div>
          <div className="section-text">
            <h2>Section Text</h2>
          </div>
          <div className="section-text-input">
            <p>1</p>
            <input
              onChange={(e) => setSectionTextHandler(e)}
              type="text"
              name="1"
              defaultValue={sectionText[1]}
            />
            <input
              onChange={(e) => setSectionTextColorHandler(e)}
              type="color"
              name="1"
              defaultValue={sectionTextColor[1]}
            />
            <p>2</p>
            <input
              onChange={(e) => setSectionTextHandler(e)}
              type="text"
              name="2"
              defaultValue={sectionText[2]}
            />
            <input
              onChange={(e) => setSectionTextColorHandler(e)}
              type="color"
              name="2"
              defaultValue={sectionTextColor[2]}
            />
            <p>3</p>
            <input
              onChange={(e) => setSectionTextHandler(e)}
              type="text"
              name="3"
              defaultValue={sectionText[3]}
            />
            <input
              onChange={(e) => setSectionTextColorHandler(e)}
              type="color"
              name="3"
              defaultValue={sectionTextColor[3]}
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
