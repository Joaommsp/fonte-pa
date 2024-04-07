import styled from "styled-components";

import SecondBannerImage from "../../assets/images/svg/secondBannerImage.svg";

export const HomeContainer = styled.header`
  width: 100%;
  height: 100%;
`;

export const BannerContainer = styled.div`
  width: 100%;
  /* background-color: #FFFFFF; */
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Banner = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 5px;

  position: relative;
`;

export const BannerTextContent = styled.div`
  width: 70%;
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: relative;

  background-image: url(${SecondBannerImage});
  background-repeat: no-repeat;
  background-position: left;
  background-size: 400px;

  padding: 2rem;
`;

export const TextContent = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const BannerVisualsContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 450px;
  padding: 2rem 0;
  background-color: #181a20;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;

  position: relative;
`;

export const Logo = styled.img`
  z-index: 10;
  width: 664px;
  filter: drop-shadow(13px 5px 3px #00000060);
`;

export const HashTags = styled.div`
  width: 100%;
  display: flex;
  gap: 86px;
  justify-content: center;

  margin-bottom: 2rem;
`;

export const Hashtag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  width: 100px;
  height: 156px;

  position: relative;

  img {
    width: 86px;
    opacity: 90%;
  }

  span {
    height: 40px;
    padding-top: 1rem;
    color: #181a20;
    position: absolute;
    bottom: 0;
    background-color: #ffffff;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 500;
  color: #181a20;
`;

export const SubTitle = styled.h2`
  width: 50%;
  text-align: right;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 500;
  color: #181a20;

  strong {
    color: #1c7ec2;
    font-weight: 500;
  }
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
  position: absolute;
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

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: relative;

  padding: 2rem 0;

  background-color: #1c7ec020;

  .arrowRight {
    position: absolute;
    right: 5rem;
    top: 8rem;

    width: 26px;
  }
`;

export const CardsSubTitle = styled.h2`
  width: 50%;
  text-align: left;
  font-size: 2.5rem;
  font-weight: 500;
  color: #181a20;

  padding-left: 5rem;

  strong {
    color: #1c7ec2;
    font-weight: 500;
  }
`;

export const Cards = styled.div`
  width: 100%;
  padding: 2rem 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 26px;

  overflow-x: scroll;
`;

export const MediaContainer = styled.div`
  width: 100%;

  background-color: #ffffff;

  padding: 4rem 5rem;

  margin-bottom: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  a {
    text-decoration: none;
  }
`;

export const MockUpContainer = styled.div``;

export const MockUpImage = styled.img`
  width: 500px;
`;

export const MediaTextContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 2rem;
`;

export const MediaTitle = styled.h2`
  width: 100%;

  color: #181a20;

  margin-bottom: 4rem;

  font-size: 2.5rem;
  text-align: right;
  font-weight: 500;

  strong {
    font-weight: 500;
    color: #1c7ec2;
  }
`;

export const MediaCardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 26px;
  flex-wrap: wrap;
`;

export const ComunityContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5rem;

  margin-bottom: 4rem;
`;

export const ComunityTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  color: #181a20;

  margin-bottom: 1rem;
`;

export const ComunityDescription = styled.p`
  width: 80%;
  text-align: center;
  margin-bottom: 2rem;

  strong {
    color: #1c7ec2;
    font-weight: 500;
  }
`;
