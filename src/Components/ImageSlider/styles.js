import styled from "styled-components";

export const ImageSliderElement = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  .coverImage {
    width: 100%;
    height: 100%;
    background-color: #00000095;
    position: absolute;
    z-index: 100;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
  }

  .fade-in {
    opacity: 1;
    transition: opacity 0.5s ease-in;
  }

  .fade-out {
    opacity: 0;
    transition: opacity 0.5s ease-out;
  }
`;
