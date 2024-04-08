import PropTypes from "prop-types";

import { ButtonLinkElement } from "./styles";

function ButtonLink(props) {
  return (
    <ButtonLinkElement
      onClick={props.click}
      $bgColor={props.bgColor}
      $textColor={props.textColor}
      $textSize={props.textSize}
    >
      <a>{props.textContent}</a>
    </ButtonLinkElement>
  );
}

ButtonLink.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
  textSize: PropTypes.string.isRequired,
  click: PropTypes.func,
};

export default ButtonLink;
