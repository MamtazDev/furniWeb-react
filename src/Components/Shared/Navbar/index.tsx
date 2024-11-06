import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../../../utils/data";

const Navbar = () => {
  const location = useLocation();

  // Check if the current path is the home page
  const isHomePage = location.pathname === "/";

  return (
    <div
      className="header__section"
      style={
        isHomePage
          ? {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              zIndex: 10, // Only apply these styles on the home page
            }
          : {}
      }
    >
      <div className="container">
        <div className="header__area">
          <div className="nav__bar">
            {/* Logo Section */}
            <div className="logo__section">
              <Link to="/">
                <img
                  className="img-fluid"
                  src="https://i.postimg.cc/Qd4N6J3m/furni-logo.png"
                  alt="Logo"
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="nav__middle">
              <ul>
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cart Button */}
            <div className="nav__right">
              <Link to="/cart">
                <button type="button" className="btn_cart">
                  Cart <i className="fa-solid fa-cart-shopping" />
                </button>
              </Link>
            </div>

            {/* Menu Icon for Mobile */}
            <div className="menuIcon">
              <i className="fa-solid fa-bars" />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="mobile__menu">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <img
              src="https://i.postimg.cc/Qd4N6J3m/furni-logo.png"
              alt="logo"
            />
            <span className="crossBtn fs-3 text-white">
              <i className="fa-solid fa-xmark" />
            </span>
          </div>

          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/cart">
                <button type="button" className="btn_cart">
                  Cart <i className="fa-solid fa-cart-shopping" />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
