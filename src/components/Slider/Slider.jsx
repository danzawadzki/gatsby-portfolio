import * as React from "react";
import "./Slider.scss";

/**
 * Slider component.
 *
 * @returns {*}
 * @constructor
 */
const Slider = ({}) => (
  <h1 className="slider__text">
    Hello, I’m{" "}
    <span className="slider__text--hightligted">a frontend developer</span>{" "}
    based in Warsaw, Poland
  </h1>
);

/** PropTypes */
Slider.propTypes = {};

export default Slider;
