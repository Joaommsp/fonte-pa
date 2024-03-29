import PropTypes from "prop-types";

import {
  CardElement,
  CardContent,
  CardTitle,
  CardText,
  CardButton,
  CardImage,
} from "./styles";

const CardReverse = (props) => {
  return (
    <CardElement>
      <CardContent>
        <CardImage src={props.image} />
      </CardContent>
      <CardContent>
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.text}</CardText>
        <CardButton href={props.href}>{props.linkText}</CardButton>
      </CardContent>
    </CardElement>
  );
};

CardReverse.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default CardReverse;
