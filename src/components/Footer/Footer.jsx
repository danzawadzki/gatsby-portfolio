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
  /**
   *  Social links.
   *
   * @type {*[]}
   */
  const socialLinks = [
    { url: "google.com", text: "Github" },
    { url: "google.com", text: "LinkedIn" },
    { url: "google.com", text: "Twitter" },
    { url: "google.com", text: "Medium" }
  ];

  /**
   * Contact links.
   *
   * @type {*[]}
   */
  const contactLinks = [
    {
      url: "hello@danielzawadzki.com",
      text: "hello@danielzawadzki.com",
      type: "mail"
    },
    { url: "+0048 501 668 445", text: "+48 501 668 445", type: "phone" },
    { text: "Warsaw, Poland", type: "text" }
  ];

  return (
    <footer className="footer">
      <FooterColumn title="Contact" links={contactLinks} />
      <FooterColumn title="Social" links={socialLinks} />
      <FooterColumn title="Tech" links={socialLinks} />
    </footer>
  );
};

/** PropTypes */
Footer.propTypes = {};

export default Footer;
