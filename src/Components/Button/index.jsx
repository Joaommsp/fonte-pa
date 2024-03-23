import React from "react";
import PropTypes from "prop-types";

import { ButtonElement } from "./styles";

function Button(props) {
  return <ButtonElement $bgColor={props.bgColor}></ButtonElement>;
}

Button.propTypes = {
  bgColor: PropTypes.string.isRequired,
};

export default Button;
