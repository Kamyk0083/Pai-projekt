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
            <p>2</p>
            <input
              onChange={(e) => setSectionOrderHandler(e)}
              type="number"
              min={1}
              max={3}
              name="3"
              defaultValue={sectionOrder[3]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
