import * as React from "react";
import PropTypes from "prop-types";

/**
 * Footer column component.
 *
 * @param {String} title - Column title.
 * @param {Array<Object>} links - Array of objects representing links.
 * @returns {*}
 * @constructor
 */
const FooterColumn = ({ title, links }) => (
  <div className="footer-column">
    <h4 className="footer-column__title">{title}</h4>
    <ul>
      {links.length &&
        links.map(link => (
          <li>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
    </ul>
  </div>
);

/** PropTypes */
FooterColumn.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.object)
};

export default FooterColumn;
