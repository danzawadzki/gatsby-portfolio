import * as React from "react";
import logo from "../../assets/img/logo.png";

/**
 * Header logo component.
 *
 * @returns {*}
 * @constructor
 */
const HeaderLogo = ({}) => (
  <img src={logo} alt="Portfolio Logo" className="header__logo" />
);

/** PropTypes */
HeaderLogo.propTypes = {};

export default HeaderLogo;
