import PropTypes from "prop-types";

import { MinistryCardElement } from "./styles";

function MinistryCard(props) {
  return (
    <MinistryCardElement>
      <img src={props.img} alt="Imagem referente ao ministério" />
      <div className="ministryCardHeader">
        <span className="ministryName">{props.name}</span>
      </div>
    </MinistryCardElement>
  );
}

MinistryCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default MinistryCard;
