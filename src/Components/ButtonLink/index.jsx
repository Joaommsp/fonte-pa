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
      <a href={props.href} target={props.target}>{props.textContent}</a>
    </ButtonLinkElement>
  );
}

ButtonLink.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
  textSize: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired
};

export default ButtonLink;
