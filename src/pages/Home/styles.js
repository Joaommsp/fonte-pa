import styled from "styled-components";

import SecondBannerImage from "../../assets/images/svg/secondBannerImage.svg";
import LogoBackground from "../../assets/images/logoBackground.png";

export const HomeContainer = styled.header`
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.div`
  width: 100%;

  padding-top: 2rem;
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

export const EventsContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem 5rem;

  @media only screen and (max-width: 560px) {
    padding: 1rem 1rem;
  }

  @media only screen and (min-width: 560px) and (max-width: 900px) {
    padding: 1rem 2rem;
  }
`;

export const EventsSectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: #181a20;
  padding: 1rem 5rem;

  @media only screen and (max-width: 560px) {
    font-size: 1.5rem;
    text-align: center;
  }

  @media only screen and (min-width: 560px) and (max-width: 900px) {
    font-size: 2rem;
    text-align: center;
  }
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

  @media only screen and (max-width: 560px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: none;
    background-position: center;
    background-color: rgba(255, 255, 255, 0.5);
    background-blend-mode: overlay;
  }

  @media only screen and (min-width: 560px) and (max-width: 900px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-color: rgba(255, 255, 255, 0.5);
    background-blend-mode: overlay;
    background-image: none;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    width: 80%;
    height: 600px;
  }
`;

export const TextContent = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .aboutUsPageLink {
    text-decoration: none;
    text-decoration: dotted;
  }

  @media only screen and (max-width: 560px) {
    width: 80%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 560px) and (max-width: 900px) {
    width: 80%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }
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
  height: 550px;
  padding: 2rem 0;
  background-image: url(${LogoBackground});
  background-size: cover;
  background-position: center;
  background-repeat: n;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;

  position: relative;

  @media only screen and (max-width: 560px) {
    height: 92vh;
    background-position: right;
  }

  @media only screen and (min-width: 560px) and (max-width: 900px) {
    height: 92vh;
    background-position: right;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    height: 650px;
  }
`;

export const Logo = styled.img`
  z-index: 10;
  width: 664px;
  filter: drop-shadow(13px 5px 3px #00000060);

  @media only screen and (max-width: 560px) {
    width: 300px;
  }

  @media only screen and (min-width: 560px) and (max-width: 900px) {
    width: 500px;
  }
`;

export const HashTags = styled.div`
  width: 100%;
  display: flex;
  gap: 86px;
  justify-content: center;

  margin-bottom: 2rem;

  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: transparent;
  }

  @media only screen and (max-width: 560px) {
    flex-direction: column;
    gap: 26px;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 560px) and (max-width: 900px) {
    padding: 0 2rem;
    flex-wrap: wrap;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    gap: 56px;
  }
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
    width: 66px;
    opacity: 90%;
  }

  span {
    height: 50px;
    padding-top: 0rem;
    color: #181a20;
    position: absolute;
    bottom: 0;
    background-color: #ffffff;
  }
`;

export const SubTitle = styled.h2`
  width: 50%;
  text-align: right;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 500;
  color: #181a20;

  strong {
    color: #1c7ec2;
    font-weight: 500;
  }

  @media only screen and (max-width: 560px) {
    width: 90%;
    font-size: 1.5rem;
    text-align: center;
  }

  @media only screen and (min-width: 560px) and (max-width: 900px) {
    width: 80%;
    font-size: 2rem;
    text-align: center;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    font-size: 2.2rem;
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

  z-index: 500;

  &:hover {
    opacity: 80%;
  }

  img {
    margin-right: 0.5rem;
  }

  @media only screen and (max-width: 560px) {
    right: 1rem;
    bottom: 1rem;
  }

  @media only screen and (min-width: 560px) and (max-width: 900px) {
    right: 2rem;
    bottom: 2rem;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    right: 2rem;
    bottom: 2rem;
  }
`;

export const SocialMedia = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 3rem;

  @media only screen and (max-width: 560px) {
    bottom: 1rem;
    left: 1rem;
  }

  @media only screen and (min-width: 560px) and (max-width: 900px) {
    bottom: 2rem;
    left: 2rem;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    bottom: 2rem;
    left: 2rem;
  }
`;

export const SocialMediaLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media only screen and (max-width: 560px) {
    gap: 16px;
  }

  @media only screen and (min-width: 560px) and (max-width: 900px) {
    gap: 20px;
  }
`;

export const SocialMediaLink = styled.li`
  img {
    width: 26px;
  }

  @media only screen and (max-width: 560px) {
    img {
      width: 22px;
    }
  }
`;

export const CardsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: relative;

  padding: 2rem 5rem;

  background-color: #1c7ec020;

  .arrowRight {
    position: absolute;
    right: 5rem;
    top: 8rem;

    width: 26px;
  }

  @media only screen and (max-width: 560px) {
    padding: 2rem 1rem;

    .arrowRight {
      top: 2.5rem;
      right: 2rem;
    }
  }

  @media only screen and (min-width: 560px) and (max-width: 900px) {
    padding: 2rem 2rem;

    .arrowRight {
      top: 2.5rem;
      right: 2rem;
    }
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    .arrowRight {
      top: 2.5rem;
      right: 2rem;
    }
  }
`;

export const CardsSubTitle = styled.h2`
  width: 50%;
  text-align: left;
  font-size: 2rem;
  font-weight: 500;
  color: #181a20;

  line-height: 100%;

  strong {
    color: #1c7ec2;
    font-weight: 500;
  }

  @media only screen and (max-width: 560px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 560px) and (max-width: 900px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    font-size: 2.2rem;
  }
`;

export const Cards = styled.div`
  width: 100%;
  padding: 2rem 0rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;

  overflow-x: scroll;

  @media only screen and (max-width: 560px) {
    padding: 2rem 0rem;
    gap: 0px;
  }

  @media only screen and (min-width: 560px) and (max-width: 900px) {
    padding: 2rem 0rem;
    gap: 0px;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    padding: 2rem 2rem;
    gap: 0px;
  }
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

  @media only screen and (max-width: 560px) {
    flex-direction: column;
    padding: 4rem 1rem;
  }

  @media only screen and (min-width: 560px) and (max-width: 900px) {
    flex-direction: column;
    padding: 4rem 1rem;
  }
`;

export const MockUpContainer = styled.div``;

export const MockUpImage = styled.img`
  width: 500px;

  @media only screen and (max-width: 560px) {
    width: 320px;
  }

  @media only screen and (min-width: 560px) and (max-width: 900px) {
    width: 420px;
  }
`;

export const MediaTextContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 2rem;

  @media only screen and (max-width: 560px) {
    width: 100%;
    align-items: center;
    padding-right: 0rem;
  }

  @media only screen and (min-width: 560px) and (max-width: 900px) {
    width: 100%;
    align-items: center;
    padding-right: 0rem;
  }
`;

export const MediaTitle = styled.h2`
  width: 80%;
  line-height: 100%;

  color: #181a20;

  margin-bottom: 4rem;

  font-size: 2rem;
  text-align: right;
  font-weight: 500;

  strong {
    font-weight: 500;
    color: #1c7ec2;
  }

  @media only screen and (max-width: 560px) {
    font-size: 1.5rem;
    text-align: center;
  }

  @media only screen and (min-width: 560px) and (max-width: 900px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const MediaCardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 26px;
  flex-wrap: wrap;

  @media only screen and (max-width: 560px) {
    justify-content: center;
  }

  @media only screen and (min-width: 560px) and (max-width: 900px) {
    justify-content: center;
  }
`;

export const Assignment = styled.span`
  color: #dddddd60;
  font-size: 0.8rem;

  position: absolute;
  bottom: 2rem;
  right: 2rem;

  @media only screen and (max-width: 560px) {
    font-size: 0.7rem;
    bottom: 1.5rem;
    right: 1rem;
  }

  @media only screen and (min-width: 560px) and (max-width: 900px) {
    font-size: 0.7rem;
    bottom: 1.5rem;
    right: 1rem;
  }
`;

export const PostsSectionContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ffffff;

  padding: 2rem 5rem 2rem 5rem;

  position: relative;

  .arrowRight {
    position: absolute;
    right: 5.5rem;
    top: 5rem;

    width: 26px;
  }

  @media only screen and (min-width: 560px) and (max-width: 900px) {
    padding: 2rem;

    .arrowRight {
      top: 2.5rem;
      right: 2rem;
    }
  }

  @media only screen and (max-width: 560px) {
    padding: 2rem 0.4rem 0rem 0.4rem;

    .arrowRight {
      top: 2.5rem;
      right: 2rem;
    }
  }
`;

export const DivisorLine = styled.div`
  width: 124px;
  height: 3px;
  background-color: #1c7ec2;
  margin-bottom: 2rem;
`;

export const PostsSectionTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 500;
  color: #181a20;

  @media only screen and (max-width: 560px) {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: 560px) and (max-width: 900px) {
    font-size: 2rem;
  }
`;
