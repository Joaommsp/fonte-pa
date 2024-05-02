import PropTypes from "prop-types";

import { ButtonLinkElement } from "./styles";

function ButtonLink(props) {
  return (
    <ButtonLinkElement
      $bgColor={props.bgColor}
      $textColor={props.textColor}
      $textSize={props.textSize}
      onClick={props.click}
    >
      {props.textContent}
    </ButtonLinkElement>
  );
}

ButtonLink.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
  textSize: PropTypes.string.isRequired,
  target: PropTypes.string,
  click: PropTypes.func.isRequired,
};

export default ButtonLink;
