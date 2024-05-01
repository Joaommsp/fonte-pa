import PropTypes from "prop-types";

import { ContacCardElementLink, LinkIcon, LinkName } from "./styles";

const ContactCard = (props) => {
  return (
    <ContacCardElementLink href={props.url} target="_blank">
      <LinkIcon src={props.iconSrc} alt={props.altTextImage} />
      <LinkName>{props.name}</LinkName>
    </ContacCardElementLink>
  );
};

ContactCard.propTypes = {
  url: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
  altTextImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default ContactCard;
