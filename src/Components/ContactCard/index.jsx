import PropTypes from "prop-types";
import {
  ContactCardElement,
  CardHeader,
  CardIcon,
  CardTitle,
  CardContent,
  CardLink,
} from "./styles";

export const ContactCard = (props) => {
  return (
    <ContactCardElement>
      <CardHeader>
        <CardIcon src={props.icon} />
      </CardHeader>
      <CardTitle>{props.title}</CardTitle>
      <CardContent>{props.content}</CardContent>
      <CardLink href={props.link}>{props.linkText}</CardLink>
    </ContactCardElement>
  );
};

ContactCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};
