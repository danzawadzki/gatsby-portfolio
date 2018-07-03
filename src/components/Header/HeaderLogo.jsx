import * as React from "react";
import Link from "gatsby-link";
import logo from "../../assets/img/logo.png";

/**
 * Header logo component.
 *
 * @returns {*}
 * @constructor
 */
const HeaderLogo = ({}) => (
  <Link to="/">
    <img src={logo} alt="Portfolio Logo" className="header__logo" />
  </Link>
);

/** PropTypes */
HeaderLogo.propTypes = {};

export default HeaderLogo;
