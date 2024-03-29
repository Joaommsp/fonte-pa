import styled from "styled-components";

export const HomeContainer = styled.header`
  width: 100%;
  height: 100%;
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #181a20;
  padding: 0rem 1rem 1rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  overflow: hidden;

  .banner::-webkit-scrollbar {
    width: 12px;
  }

  .banner::-webkit-scrollbar-track {
    background-color: #181a20;
    border-radius: 100px;
  }

  .banner::-webkit-scrollbar-thumb {
    background-color: #181a20;
    border-radius: 100px;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 85vh;

  display: flex;
  flex-direction: column;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 5px;

  position: relative;
  overflow-y: scroll;
`;

export const BannerTextContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;
`;

export const BannerVisualsContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Logo = styled.img`
  z-index: 10;
  width: 664px;
  filter: drop-shadow(13px 5px 3px #00000060);
`;

export const HashTags = styled.div`
  display: flex;
  gap: 16px;

  span {
    color: #ffffff;
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 500;
  color: #ffffff;
`;

export const SubTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  color: #ffffff;
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

export const SocialMedia = styled.div`
  position: fixed;
  bottom: 3rem;
  left: 3rem;
`;

export const SocialMediaLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const SocilaMediaLink = styled.li`
  img {
    width: 26px;
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

export const BigShape = styled.img`
  width: 100px;
  position: absolute;
  right: 1rem;
  top: 0;
`;

export const CardsContainer = styled.div`
  width: 100%;

  padding: 2rem 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
`;

export const MediaContainer = styled.div`
  width: 100%;

  z-index: 5;

  padding: 2rem 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  a {
    text-decoration: none;
  }
`;
