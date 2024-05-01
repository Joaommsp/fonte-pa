import PropTypes from "prop-types";

import {
  OfferWayCardElement,
  WayIIconContainer,
  WayIIcon,
  WayTextContent,
  WayName,
  WayInfo,
} from "./styles";

const OfferWayCard = (props) => {
  return (
    <OfferWayCardElement>
      <WayIIconContainer>
        <WayIIcon src={props.iconSrc} alt={props.iconAltTextImage} />
      </WayIIconContainer>
      <WayTextContent>
        <WayName>{props.wayName}</WayName>
        <WayInfo>{props.wayInfo}</WayInfo>
      </WayTextContent>
    </OfferWayCardElement>
  );
};

OfferWayCard.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  iconAltTextImage: PropTypes.string.isRequired,
  wayName: PropTypes.string.isRequired,
  wayInfo: PropTypes.string.isRequired,
};

export default OfferWayCard;
