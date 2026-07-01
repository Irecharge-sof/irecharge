import { Butons } from "./Butons";
import logo from "../assets/rechargelogo.jpeg";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [menuOvert, setMenuOvert] = useState(false);
  return (
    <section>
      <nav className="navbar">
        <div>
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div>
          <div className="menu-icon" onClick={() => setMenuOvert(!menuOvert)}>
            {menuOvert ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={menuOvert ? "page active" : "page"}>
            <li>
              <Link to="/"> ACCEUIL </Link>
            </li>
            <li>
              <Link to="/Activation"> ACTIVATION </Link>
            </li>
            <li>
              <Link to="/Remboursement"> REMBOURSEMENT </Link>
            </li>
          </ul>
        </div>
        <div>
          <Butons text="COMMENCER" to="/" />
        </div>
      </nav>
    </section>
  );
}
export default Navbar;
