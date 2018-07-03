import * as React from "react";
import PropTypes from "prop-types";

/**
 * Footer column single item.
 *
 * @param {String} url - Link url.
 * @param {String} text - Item text.
 * @param {String} type - Item type.
 * @returns {*}
 * @constructor
 */
const FooterColumnItem = ({ url, text, type = "link" }) => {
  if (type === "link") {
    return (
      <a href={url} className="footer-column__link">
        {text}
      </a>
    );
  } else if (type === "phone") {
    return (
      <a href={`tel:${url}`} className="footer-column__link">
        {text}
      </a>
    );
  } else if (type === "mail") {
    return (
      <a href={`mailto:${url}`} className="footer-column__link">
        {text}
      </a>
    );
  } else {
    return <p>{text}</p>;
  }
};

/** PropTypes */
FooterColumnItem.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  url: PropTypes.string
};

export default FooterColumnItem;
