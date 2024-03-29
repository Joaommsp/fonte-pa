import PropTypes from "prop-types";

import {
  MediaElement,
  MediaDescription,
  MediaTitle,
  Descripion,
  MediaImage,
} from "./styles";

const Media = (props) => {
  return (
    <MediaElement $bgColor={props.bgColor}>
      <MediaDescription>
        <MediaTitle>{props.title}</MediaTitle>
        <Descripion>{props.descripion}</Descripion>
      </MediaDescription>
      <MediaImage src={props.image} />
    </MediaElement>
  );
};

Media.propTypes = {
  title: PropTypes.string.isRequired,
  descripion: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Media;
