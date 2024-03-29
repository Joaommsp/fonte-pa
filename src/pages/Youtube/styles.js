import styled from "styled-components";

export const YoutubeContainer = styled.div`
  width: 100%;

  background-color: #181a20;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 2rem;

  position: relative;
  overflow: hidden;
`;

export const MediaElement = styled.div`
  width: 676px;
  height: 50px;

  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  z-index: 5;
`;

export const MediaDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const MediaTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: #ffffff;
`;

export const MediaImage = styled.img`
  width: 46px;
`;

export const YoutubeContent = styled.div`
  width: 90%;
  padding: 1rem 1rem;
  z-index: 5;

  display: flex;
`;

export const TextContent = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const YoutubeTitle = styled.h1`
  font-size: 2rem;
  color: #52ccd2;
  font-weight: 400;
`;

export const YoutubeDescription = styled.p`
  color: #ffffff;
  margin-bottom: 2rem;
`;

export const PhoneMockUp = styled.img`
  width: 300px;
  margin-left: 8rem;
  filter: drop-shadow(14px -2px 5px #00000060);
`;

export const YoutubeList = styled.ul`
  margin-bottom: 5rem;

  width: 100%;
  height: 300px;
  list-style: none;

  padding: 1rem;
  position: relative;

  background-color: #ffffff;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 16px;
  li {
    color: #0f0f0f;
  }

  .listAside__Content {
    position: absolute;
    right: 1rem;
    background-color: red;
    width: 50%;
    height: 80%;
  }
`;

export const YoutubeLink = styled.a`
  text-decoration: none;
  color: #ffffff;

  display: flex;
  align-items: center;

  background-color: #fb0008;
  padding: 0.5rem 5rem;

  border-radius: 10px;

  img {
    width: 26px;
    margin-right: 0.5rem;
  }
`;

export const TriangleTop = styled.div`
  width: 350px;
  height: 300px;
  clip-path: polygon(0 0, 0% 100%, 100% 0);

  background: rgb(35, 37, 45);
  background: linear-gradient(
    5deg,
    rgba(35, 37, 45, 1) 31%,
    rgba(65, 68, 78, 0.8869922969187675) 100%
  );

  position: absolute;
  top: 0;
  left: 0%;
`;

export const TriangleBottom = styled.div`
  width: 250px;
  height: 200px;
  clip-path: polygon(100% 100%, 0% 100%, 100% 0);
  background: rgb(35, 37, 45);
  background: linear-gradient(
    5deg,
    rgba(35, 37, 45, 1) 31%,
    rgba(65, 68, 78, 0.8869922969187675) 100%
  );

  position: absolute;
  bottom: 0;
  right: 0;
`;

export const WhatsAppLInk = styled.a`
  position: fixed;
  right: 3rem;
  bottom: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: #ffffff;

  background-color: #25db09;
  padding: 0.5rem 1rem;

  border-radius: 50px;

  z-index: 10;

  &:hover {
    opacity: 80%;
  }

  img {
    margin-right: 0.5rem;
  }
`;
