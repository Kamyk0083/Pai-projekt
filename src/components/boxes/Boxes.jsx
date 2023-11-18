import "./Boxes.scss";
import { AppContext } from "../../context/app.context";
import { useContext } from "react";

const Boxes = () => {
  const { boxColor, boxText, boxOrder } = useContext(AppContext);

  return (
    <div id="boxes" className="container">
      <div className="boxes">
        <div
          className="box"
          style={{ backgroundColor: boxColor[1], order: boxOrder[1] }}
        >
          <h2>{boxText[16]}</h2>
          <ul>
            <li>{boxText[1]}</li>
            <li>{boxText[2]}</li>
            <li>{boxText[3]}</li>
            <li>{boxText[4]}</li>
            <li>{boxText[5]}</li>
          </ul>
        </div>
        <div
          className="box"
          style={{ backgroundColor: boxColor[2], order: boxOrder[2] }}
        >
          <h2>{boxText[17]}</h2>
          <ul>
            <li>{boxText[6]}</li>
            <li>{boxText[7]}</li>
            <li>{boxText[8]}</li>
            <li>{boxText[9]}</li>
            <li>{boxText[10]}</li>
          </ul>
        </div>
        <div
          className="box"
          style={{ backgroundColor: boxColor[3], order: boxOrder[3] }}
        >
          <h2>{boxText[18]}</h2>
          <ul>
            <li>{boxText[11]}</li>
            <li>{boxText[12]}</li>
            <li>{boxText[13]}</li>
            <li>{boxText[14]}</li>
            <li>{boxText[15]}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
