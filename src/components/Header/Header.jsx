import * as React from "react";
import "./Header.scss";
import HeaderLogo from "./HeaderLogo";

/**
 * Header component.
 *
 * @returns {*}
 * @constructor
 */
const Header = ({}) => (
  <header className="header">
    <HeaderLogo/>
  </header>
);

/** PropTypes */
Header.propTypes = {};

export default Header;
