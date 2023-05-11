import { Link } from "react-router-dom";
import logo from "../images/marvel-logo-3-bis.jpg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo marvel" />
        </Link>
        <div className="header-buttons">
          <Link to="/">
            <button>Personnages</button>
          </Link>
          <Link to="/comics">
            <button>Comics</button>
          </Link>
          <Link to="/favorite">
            <button>Favoris</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
