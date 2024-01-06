import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import Logo from "../images/logo.jpg"

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    if (isOpen) {
      toggle();
    }
  };
  return (
    <>
      <nav className="header">
        <a href="/solar"><img src={Logo} alt="logo" width={100} height={100} /></a>
        <span className="logoName">solarshop.in</span>
        
        {/* <div className={`menu-btn ${isOpen ? "open" : ""}`} onClick={toggle}>
          <div className="menu-btn__lines"></div>
        </div> */}
        <ul className={`menu-items ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className="menu-item z-20" onClick={handleItemClick}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/estimater"
              className="menu-item z-20"
              onClick={handleItemClick}
            >
              Estimater
            </Link>
          </li>
          <li>
            <Link
              to="/epc"
              className="menu-item z-20"
              onClick={handleItemClick}
            >
              EPC
            </Link>
          </li>
          <li>
            <Link
              to="/solar-pannel"
              className="menu-item z-20"
              onClick={handleItemClick}
            >
              Solar Products
            </Link>
          </li>
        </ul>

        {/* <ul className={`menu-items ${isOpen ? "open" : ""}`}> */}
        <ul className="menu-items">
          <li>
            <Link to="/" className="menu-item z-20" onClick>
              Facebook
            </Link>
            <Link to="/" className="menu-item z-20" onClick>
              Twitter
            </Link>
            {/* <Link to="/" className="menu-item z-20" onClick>
              Facebok
            </Link> */}
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
