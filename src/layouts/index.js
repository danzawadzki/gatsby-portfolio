import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import "./index.scss";
import "../assets/styles/styles.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

/**
 * Index layout.
 *
 * @param {Function} children - Index child nodes.
 * @param {Object} data - Site data object.
 * @returns {*}
 * @constructor
 */
const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: "description",
          content: "Daniel Zawadzki - frontend developer"
        },
        {
          name: "keywords",
          content: "Daniel Zawadzki, frontend, front-end, developer, ecmascript"
        }
      ]}
    />
    <div className="wrapper">
      <Header />
      {children()}
      <Footer />
    </div>
  </div>
);

/** PropTypes */
Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
