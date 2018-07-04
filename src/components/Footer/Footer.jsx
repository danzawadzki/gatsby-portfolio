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
    { url: "https://github.com/danzawadzki", text: "Github" },
    { url: "https://www.linkedin.com/in/danzawadzki/", text: "LinkedIn" },
    { url: "https://twitter.com/danzawadzki7", text: "Twitter" }
    //{ url: "google.com", text: "Medium" }
  ];

  /**
   * Technologies.
   *
   * @type {*[]}
   */
  const technologyLinks = [
    { text: "ES2015+, React, Redux", type: "text" },
    { text: "Express, GraphQL, MongoDB, ", type: "text" },
    { text: "Unit Testing, HTML5, CSS3", type: "text" }
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
      <FooterColumn title="Technologies" links={technologyLinks} />
      <FooterColumn title="Social" links={socialLinks} />
    </footer>
  );
};

/** PropTypes */
Footer.propTypes = {};

export default Footer;
