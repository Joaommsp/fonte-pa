import styled from "styled-components";

export const HomeContainer = styled.header`
  width: 100%;
  height: 100%;

  background-color: #f4f4f4;
`;

export const ContentContainer = styled.div`
  width: 100%;

  padding-top: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  .mapTest {
    width: 100%;
  }

  @media only screen and (max-width: 480px) {
    background-position: center;
    background-size: 440px;
  }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  padding: 1rem 2rem;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    width: 80%;
  }
`;

export const DivisorLine = styled.div`
  width: 124px;
  height: 3px;
  background-color: #1c7ec2;
  margin-bottom: 2rem;
`;

export const TextContent = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    width: 80%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 400;
  color: #181a20;

  strong {
    color: #1c7ec2;
    font-weight: 500;
  }

  @media only screen and (max-width: 480px) {
    width: 90%;
    font-size: 1.2rem;
    text-align: center;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    width: 80%;
    font-size: 2rem;
    text-align: center;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    font-size: 2.2rem;
  }
`;

export const AboutOffers = styled.p`
  text-align: center;
  strong {
    color: #1c7ec2;
    font-weight: 500;
  }

  @media only screen and (max-width: 560px) {
    text-align: justify;
    font-size: 0.9rem;
  }
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 2rem;

  display: flex;
  justify-content: center;

  .offerVideoIframe {
    border-radius: 5px;
    width: 874px;
    height: 491px;
    border: 1px solid #00000030;
  }

  @media only screen and (max-width: 560px) {
    height: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;

    .offerVideoIframe {
      width: 298px;
      height: 168px;
    }
  }

  @media only screen and (min-width: 560px) and (max-width: 900px) {
    .offerVideoIframe {
      width: 661px;
      height: 372px;
    }
  }
`;

export const OfferWayAboutContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem 1rem 0 1rem;

  background-color: #ffffff;
`;

export const OfferWayTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 400;
  color: #181a20;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 24px;
    margin-left: 0.5rem;
  }

  @media only screen and (max-width: 560px) {
    font-size: 1.2rem;

    img {
      width: 18px;
    }
  }
`;

export const OfferWayText = styled.p`
  text-align: center;
  width: 50%;
  text-align: center;

  strong {
    font-weight: 500;
  }

  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 900px) {
    width: 80%;
  }

  @media only screen and (max-width: 400px) {
    width: 100%;
    text-align: justify;
    font-size: 0.9rem;
  }
`;

export const OffersCardsContainer = styled.div`
  width: 100%;
  padding: 2rem;
  margin-bottom: 0em;

  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;

  @media only screen and (max-width: 500px) {
    padding: 1rem 2rem;
  }
`;

export const OffersImportants = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;

  padding: 1rem;
`;

export const OfferDocDonwloadContainer = styled.div`
  padding: 2rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .offerDocLink {
    text-decoration: none;
    color: #ffffff;
    margin-top: 2rem;
    text-align: center;
    background-color: #1c7ec2;
    padding: 1rem;
    border-radius: 5px;
  }

  .offerDocLink div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .offerDocLink div img {
    width: 26px;
  }

  @media only screen and (max-width: 560px) {
    padding: 1rem;

    .offerDocLink {
      font-size: 0.8rem;
    }
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

  @media only screen and (max-width: 480px) {
    right: 1rem;
    bottom: 1rem;
  }

  @media only screen and (min-width: 480px) and (max-width: 900px) {
    right: 2rem;
    bottom: 2rem;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    right: 2rem;
    bottom: 2rem;
  }
`;
