import * as React from "react";
import "./Footer.scss";
import FooterColumn from "./FooterColumn";

/**
 * Footer component.
 *
 * @returns {*}
 * @constructor
 */
const Footer = ({}) => {
  const socialLinks = [
    { url: "google.com", text: "Github" },
    { url: "google.com", text: "LinkedIn" },
    { url: "google.com", text: "Twitter" },
    { url: "google.com", text: "Medium" }
  ];

  return (
    <footer className="footer">
      <FooterColumn title="Contact" links={socialLinks} />
      <FooterColumn title="Social" links={socialLinks} />
      <FooterColumn title="Tech" links={socialLinks} />
    </footer>
  );
};

/** PropTypes */
Footer.propTypes = {};

export default Footer;
