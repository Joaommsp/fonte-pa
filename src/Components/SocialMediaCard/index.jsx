import PropTypes from "prop-types";

import {
  MediaElement,
  MediaDescription,
  MediaTitle,
  About,
  Descripion,
  MediaImage,
} from "./styles";

const Media = (props) => {
  return (
    <MediaElement $bgColor={props.bgColor}>
      <MediaDescription>
        <MediaTitle>{props.title}</MediaTitle>
        <MediaImage src={props.image} />
      </MediaDescription>
      <About>{props.descripion}</About>
      <Descripion>{props.content}</Descripion>
    </MediaElement>
  );
};

Media.propTypes = {
  title: PropTypes.string.isRequired,
  descripion: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Media;
