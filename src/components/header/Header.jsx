import "./Header.scss";
import { useContext } from "react";
import { AppContext } from "./../../context/app.context";
import { Link } from "react-router-dom";

const Header = () => {
  const { logged, setLogged } = useContext(AppContext);
  const logout = () => {
    setLogged(false);
  };

  return (
    <div className="header-container container">
      <h1 className="logo">
        #<span>RWD</span>_online
      </h1>
      <ul className="menu">
        <li>
          <a href="#boxes">Informacje o RWD</a>
        </li>
        <li>
          {logged && (
            <a href="./" className="admin logout" onClick={logout}>
              Wyloguj
            </a>
          )}
        </li>
        {!logged && (
          <li className="admin">
            <Link to="admin">Zaloguj</Link>
          </li>
        )}
        {logged && (
          <li className="admin">
            <Link to="admin">Admin</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
