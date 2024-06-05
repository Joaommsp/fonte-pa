import styled from "styled-components";

import LogoBackground from "../../assets/images/abousUsBackground.png";

export const HomeContainer = styled.header`
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.div`
  width: 100%;

  padding-top: 1.5rem;
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
  /* background-image: url(${LogoBackground});
  background-size: cover;
  background-position: center;
  background-repeat: none; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;

  position: relative;

  @media only screen and (max-width: 660px) {
    height: 324px;
    background-position: right;
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
    height: 424px;
    background-position: right;
  }

  @media only screen and (min-width: 900px) and (max-width: 1000px) {
    height: 424px;
  }
`;

export const Logo = styled.img`
  z-index: 10;
  width: 364px;
  position: absolute;
  filter: drop-shadow(13px 5px 3px #00000060);
  z-index: 200;

  @media only screen and (max-width: 660px) {
    width: 248px;
  }

  @media only screen and (min-width: 660px) and (max-width: 1000px) {
    width: 500px;
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
    width: 400px;
  }
`;

export const AboutUsTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: #ffffff;

  @media only screen and (max-width: 660px) {
    font-size: 0.9rem;
  }

  @media only screen and (min-width: 900px) and (max-width: 1000px) {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
    font-size: 1rem;
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
  z-index: 200;

  @media only screen and (max-width: 660px) {
    bottom: 0.5rem;
    left: 1rem;
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
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

  @media only screen and (max-width: 660px) {
    gap: 16px;
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
    gap: 20px;
  }
`;

export const SocialMediaLink = styled.li`
  img {
    width: 26px;
  }

  @media only screen and (max-width: 660px) {
    img {
      width: 18px;
    }
  }
`;

export const ComunityContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5rem;

  margin-bottom: 4rem;

  @media only screen and (max-width: 660px) {
    padding: 0 1.5rem;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
    padding: 0;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    padding: 0 2rem;
    margin-bottom: 2rem;
  }
`;

export const ComunityTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  color: #181a20;

  margin-bottom: 1rem;

  @media only screen and (max-width: 660px) {
    font-size: 1.5rem;
    text-align: center;
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
    font-size: 1.5rem;
    text-align: center;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    font-size: 1.5rem;
  }
`;

export const ComunityDescription = styled.p`
  width: 80%;
  text-align: center;
  margin-bottom: 2rem;

  strong {
    color: #1c7ec2;
    font-weight: 500;
  }

  @media only screen and (max-width: 660px) {
    font-size: 0.9rem;
    width: 100%;
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
    font-size: 0.9rem;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    argin-bottom: 0rem;
    font-size: 0.9rem;
  }
`;

export const DivisorLine = styled.div`
  width: 124px;
  height: 3px;
  background-color: #1c7ec2;
  margin-bottom: 2rem;

  @media only screen and (max-width: 660px) {
    width: 56px;
    margin-bottom: 1rem;
  }
`;

export const DivisorLineLight = styled.div`
  width: 124px;
  height: 3px;
  background-color: #ffffff;
  margin-bottom: 2rem;

  @media only screen and (max-width: 660px) {
    width: 56px;
    margin-bottom: 1rem;
  }
`;

export const WhoAreWeContainer = styled.div`
  width: 100%;
  padding: 0 8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;

  @media only screen and (max-width: 660px) {
    flex-direction: column;
    padding: 0 1rem;
    margin-bottom: 0rem;
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
    padding: 0 2rem;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    padding: 0 5rem;
  }
`;

export const WhoAreWeImageContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 660px) {
    width: 100%;
  }
`;

export const PeopleImg = styled.img`
  width: 456px;

  @media only screen and (max-width: 420px) {
    width: 290px;
  }

  @media only screen and (min-width: 420px) and (max-width: 660px) {
    width: 356px;
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
    width: 356px;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    width: 426px;
  }
`;

export const WhoAreWeTextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 660px) {
    width: 100%;
    justify-content: center;
  }
`;

export const WhoAreWeTitle = styled.h1`
  font-size: 2rem;
  color: #181a20;
  font-weight: 500;
  width: 80%;
  text-align: right;
  margin-bottom: 1rem;

  @media only screen and (max-width: 660px) {
    text-align: center;
    font-size: 1.2rem;
    width: 100%;
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    font-size: 1.5rem;
  }
`;

export const WhoAreWeText = styled.div`
  font-size: 0.9rem;
  width: 80%;
  text-align: right;

  strong {
    font-weight: 500;
    color: #1c7ec2;
  }

  @media only screen and (max-width: 660px) {
    text-align: center;
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
    font-size: 0.8rem;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 2rem 0rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;

  margin-bottom: 2rem;

  .cardSection {
    width: 100%;
    padding: 2rem 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  .cardSectionBgBlue {
    background-color: #e3eff7;
  }

  .cardSectionBgWhite {
    background-color: #ffffff;
  }

  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  .cardTextContent {
    width: 50%;
    padding: 2rem 0;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .cardTextContentLeft {
    width: 50%;
    padding: 2rem 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .textEmphasis {
    text-align: right;
    width: 80%;
    margin-bottom: 2rem;
  }

  .textEmphasis strong {
    font-weight: 500;
    color: #1c7ec2;
  }

  .textEmphasisLeft {
    text-align: left;
    width: 80%;
    margin-bottom: 2rem;
  }

  .textEmphasisLeft strong {
    font-weight: 500;
    color: #1c7ec2;
  }

  .cardImageContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cardImageContainer img {
    width: 356px;
    margin-bottom: 2rem;
  }

  .attribution {
    font-size: 0.7rem;
    color: #31363f;
  }

  .cardTextAbout {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  #cardVerse {
    width: 80%;
    text-align: right;
    margin-bottom: 1rem;
  }

  #verseDivisorContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    width: 124px;
  }

  #verseDivisor {
    width: 124px;
    height: 3px;
    background-color: #1c7ec2;
  }

  #cardVerseAdress {
    width: 100%;
    width: fit-content;
    text-align: center;
    margin-top: 1rem;
  }

  @media only screen and (max-width: 660px) {
    margin-bottom: 0;

    .cardSection {
      flex-direction: column;
      padding: 1rem 1.5rem;
    }

    .cardTextContent {
      width: 100%;
      padding: 0rem;
    }

    .textEmphasis {
      width: 100%;
      margin-bottom: 1rem;
      font-size: 0.8rem;

      text-align: center;
    }

    #cardVerse {
      width: 100%;
      font-size: 0.8rem;
      text-align: center;
    }

    #cardVerseAdress {
      font-size: 0.9rem;
      margin-top: 0.5rem;
      text-align: center;
    }

    .cardTextAbout {
      align-items: center;
    }

    .cardTextContentLeft {
      width: 100%;
      padding: 0;
      align-items: center;
      padding: 0;
    }

    .textEmphasisLeft {
      text-align: center;
      width: 100%;
      font-size: 0.8rem;
    }

    .cardImageContainer img {
      width: 256px;
      margin-bottom: 2rem;
    }
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
    .cardSection {
      padding: 2rem 2rem;
      gap: 18px;
    }

    .textEmphasis {
      width: 100%;
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }

    #cardVerse {
      width: 100%;
      font-size: 0.8rem;
    }

    #cardVerseAdress {
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }

    .cardTextAbout {
      align-items: center;
    }

    .cardTextContentLeft {
      width: 100%;
      padding: 0;
      align-items: center;
      padding: 0;
    }

    .textEmphasisLeft {
      text-align: center;
      width: 100%;
      font-size: 0.9rem;
    }

    .cardImageContainer img {
      width: 256px;
      margin-bottom: 2rem;
    }
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    .cardSection {
      padding: 2rem 2rem;
      gap: 18px;
    }

    .textEmphasis {
      width: 80%;
      margin-bottom: 1.5rem;
    }
  }
`;

export const InstagramContentContainer = styled.div`
  width: 100%;
  padding: 2rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;

  @media only screen and (max-width: 660px) {
    padding: 0rem 1rem;
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
    padding: 0rem 2rem;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    padding: 0rem 3rem;
  }
`;

export const InstagramContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  @media only screen and (max-width: 660px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
    gap: 10px;
  }
`;

export const InstagramProfileImage = styled.img`
  width: 80%;
  z-index: 1000;
  transition: 0.3s transform ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 660px) {
    margin-bottom: 1rem;
    max-width: 400px;
  }
`;

export const InstagramContentTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: #181a20;

  margin-bottom: 2rem;

  strong {
    font-weight: 500;
    background: #833ab4;
    background: linear-gradient(
      to right,
      #833ab4 0%,
      #fd1d1d 50%,
      #fcb045 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media only screen and (max-width: 660px) {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    font-size: 1.5rem;
  }
`;

export const InstagramImages = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media only screen and (max-width: 420px) {
    grid-template-columns: 1fr 1fr;

    .hiddenOnSmallScreen {
      display: none;
    }
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
    gap: 14px;
  }
`;

export const InstagramImageContainer = styled.div`
  width: 164px;
  height: 164px;

  position: relative;

  transition: 0.3s transform ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  .collectionIcon {
    position: absolute;
    width: 24px;
    right: 0.5rem;
    top: 0.5rem;
    filter: drop-shadow(-2px 4px 3px #00000050);
    z-index: 100;
  }

  @media only screen and (max-width: 368px) {
    width: 125px;
    height: 125px;
  }

  @media only screen and (min-width: 368px) and (max-width: 660px) {
    width: 150px;
    height: 150px;
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
    width: 100px;
    height: 100px;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    width: 114px;
    height: 114px;
  }
`;

export const InstagramImage = styled.img`
  width: 100%;
  border-radius: 5px;

  transition: 0.3s opacity ease-in-out;

  &:hover {
    opacity: 60%;
  }
`;

export const AdressMapContainer = styled.div`
  width: 100%;
  padding: 2rem 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e3eff7;

  @media only screen and (max-width: 660px) {
    padding: 1rem 1.5rem;
    flex-direction: column;
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
    padding: 1rem 2rem;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    padding: 2rem 3rem;
  }
`;

export const AdressMapAbout = styled.div`
  width: 50%;
  padding: 0 2rem;

  @media only screen and (max-width: 660px) {
    width: 100%;
    padding: 0;
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
    padding: 0 1rem;
  }
`;

export const AdressMapTitle = styled.h2`
  font-weight: 500;
  font-size: 2rem;
  color: #181a20;
  margin-bottom: 0.5rem;

  @media only screen and (max-width: 660px) {
    font-size: 1.2rem;
    text-align: center;
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    font-size: 1.5rem;
  }
`;

export const AdressMapText = styled.p`
  font-size: 0.9rem;
  color: #181a20;
  margin-bottom: 1rem;

  @media only screen and (max-width: 660px) {
    font-size: 0.8rem;
    text-align: center;
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
    font-size: 0.8rem;
  }
`;

export const Address = styled.div`
  display: flex;
  justify-content: flex-start;

  padding: 1rem;

  border-radius: 10px;
  border: 1px solid #b4b4b8;

  background-color: #ffffff;

  img {
    width: 24px;
    margin-right: 1rem;
  }

  .addressInfos {
    display: flex;
    flex-direction: column;
  }

  .addressInfos span {
    text-decoration: none;
    color: #181a20;
    font-family: "Noto Sans JP", sans-serif;
  }

  @media only screen and (max-width: 660px) {
    padding: 0.5rem;

    .addressInfos span {
      font-size: 0.9rem;
    }

    img {
      width: 18px;
    }
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
    padding: 0.5rem;

    .addressInfos span {
      font-size: 0.9rem;
    }

    img {
      width: 18px;
    }
  }
`;

export const AdressMapMaps = styled.div`
  width: 50%;

  @media only screen and (max-width: 660px) {
    width: 100%;
  }
`;

export const MapContainer = styled.div`
  width: 100%;

  padding: 2rem;

  .mapIframe {
    border-radius: 10px;
  }

  @media only screen and (max-width: 480px) {
    padding: 0.8rem;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 660px) and (max-width: 900px) {
    padding: 0.8rem;
  }
`;
