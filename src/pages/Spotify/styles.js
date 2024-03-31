import styled from "styled-components";

export const SpotifyContainer = styled.div`
  width: 100%;

  background-color: #181a20;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0 0 0;

  position: relative;
  overflow: hidden;
`;

export const SpotifyContent = styled.div`
  width: 90%;
  padding: 1rem 1rem;
  z-index: 5;

  display: flex;

  .videoContainer {
    margin-bottom: 2rem;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  .videoContainer iframe {
    border-radius: 5px;
    box-shadow: 0px 0px 5.3px rgba(0, 0, 0, 0.097),
      0px 0px 17.9px rgba(0, 0, 0, 0.143), 0px 0px 80px rgba(0, 0, 0, 0.24);
  }
`;

export const TextContent = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SpotifyTitle = styled.h1`
  font-size: 2rem;
  color: #46D76E;
  font-weight: 400;
`;

export const SpotifyDescription = styled.p`
  color: #ffffff;
  margin-bottom: 2rem;
`;

export const PhoneMockUp = styled.img`
  width: 350px;
  height: 650px;
  margin-left: 5rem;
  filter: drop-shadow(18px 13px 5px #00000070);
  margin-right: 2rem;
  margin-bottom: 2rem;
`;

export const SpotifyLink = styled.a`
  text-decoration: none;
  color: #000000;
  font-weight: 500;

  display: flex;
  align-items: center;

  background-color: #46D76E;
  padding: 0.5rem 5rem;

  border-radius: 5px;
  margin-bottom: 5rem;

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
