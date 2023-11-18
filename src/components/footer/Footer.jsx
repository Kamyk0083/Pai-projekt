import { useContext } from "react";
import "./Footer.scss";
import { AppContext } from "../../context/app.context";

const Footer = () => {
  const { footerText } = useContext(AppContext);
  return (
    <div className="footer-container container">
      <h2>
        {footerText[1]}
        <span>{footerText[2]}</span>
      </h2>
    </div>
  );
};

export default Footer;
