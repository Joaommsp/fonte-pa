import PropTypes from "prop-types";

import {
  CardElement,
  CardContent,
  CardTitle,
  CardText,
  CardButton,
  CardImageContent,
  CardImage,
} from "./styles";

const Card = (props) => {
  return (
    <CardElement>
      <CardContent>
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.text}</CardText>
        <CardButton href={props.href}>{props.linkText}</CardButton>
      </CardContent>
      <CardImageContent>
        <CardImage src={props.image} />
      </CardImageContent>
    </CardElement>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default Card;
