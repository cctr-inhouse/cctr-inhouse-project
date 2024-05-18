import React, { useState, useEffect } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import cctrlogo from "../../media/logo.png";

const menuData = [
  { id: 1, title: "cctr", link: "/" },
  { id: 3, title: "trials", link: "/trials" },
  { id: 4, title: "contact", link: "/contact" },
];

const Nav = () => {
  const [navToggle, setNavToggle] = useState(false);

  const handleNavToggle = () => {
    setNavToggle(!navToggle);
  };

  useEffect(() => {
    if (navToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [navToggle]);

  return (
    <header className="navContainer">
      <div className="navWrap">
        <Link to="/" className="navLogo">
          <img src={cctrlogo} alt="cctrlogo" className="logoImg" />
        </Link>
        <div className={`navToggle ${navToggle ? "open" : ""}`}>
          <button onClick={handleNavToggle}>
            {navToggle ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>
        </div>
        <nav className={`navMenu ${navToggle ? "open" : ""}`}>
          <div className="menuItems">
            {menuData.map((menu) => (
              <Link to={menu.link} key={menu.id} className="menuItem">
                {menu.title}
              </Link>
            ))}
          </div>
          <div className="ctaDesktop">
            <Link to="/participate">
              <button className="ctaButton">Participate</button>
            </Link>
          </div>
          <div className="ctaMobile">
            <Link to="/participate">
              <button className="ctaButton">Participate</button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
