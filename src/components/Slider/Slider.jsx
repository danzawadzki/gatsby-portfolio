import * as React from "react";
import "./Slider.scss";
import Typed from "typed.js";

/**
 * Slider component.
 *
 * @returns {*}
 * @constructor
 */
class Slider extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //Setting up typed options
    const options = {
      strings: [
        "a frontend developer",
        "a javascript enthusiast",
        "a design admirer",
        "a football addict",
        "a geek"
      ],
      typeSpeed: 80,
      backSpeed: 40,
      startDelay: 20,
      backDelay: 2000,
      loop: true
    };

    //Creating typed instance
    const typed = new Typed(".slider__text--hightligted", options);
  }

  render() {
    return (
      <h1 className="slider__text">
        Hello, I’m <span className="slider__text--hightligted" /> based in
        Warsaw, Poland
      </h1>
    );
  }
}

/** PropTypes */
Slider.propTypes = {};

export default Slider;
