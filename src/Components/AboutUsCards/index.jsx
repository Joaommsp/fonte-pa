import PropTypes from "prop-types";

import { AboutUsCardElement } from "./styles";

function AboutUsCard(props) {
  return (
    <AboutUsCardElement>
      <div className="cardHeaher">
        <span className="cardTitle">{props.title}</span>
      </div>
      <div className="cardContent">
        <p className="cardText">{props.text}</p>
      </div>
    </AboutUsCardElement>
  );
}

AboutUsCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AboutUsCard;
