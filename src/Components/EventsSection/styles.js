import styled from "styled-components";

export const EventsSectionContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  gap: 24px;

  overflow-y: hidden;
  overflow-x: scroll;

  position: relative;

  padding: 2rem 1rem;
  margin-bottom: 5rem;

  .card {
    width: 436px;
    height: 524px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    position: relative;

    border-radius: 5px;

    box-shadow: 0px 0px 1.5px rgba(0, 0, 0, 0.13),
      0px 0px 12px rgba(0, 0, 0, 0.26);
  }

  .cardHeader {
    width: 100%;
    height: 42px;
    margin-bottom: 1.5rem;
    padding: 0 1rem;
  }

  .cardTitle {
    width: 100%;
    font-size: 0.9rem;
    color: #181a20;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .cardHeaderContainer {
    width: 100%;

    position: relative;
  }

  .managementOptions {
    position: absolute;
    top: 1rem;
    right: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .updateEventBtn {
    background-color: #ffffff;
    border: 0;
    padding: 0.5rem;

    width: 40px;
    height: 40px;

    border-radius: 5px;

    transition: 0.3s ease-in-out;

    transform: scale(1);

    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.37);
    display: flex;
  }

  .deleteEventBtn {
    background-color: #ffffff;
    border: 0;
    padding: 0.5rem;

    width: 40px;
    height: 40px;

    border-radius: 5px;

    transition: 0.3s ease-in-out;

    transform: scale(1);

    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.37);
  }

  .deleteEventBtn img,
  .updateEventBtn img {
    width: 24px;
  }

  .deleteEventBtn:hover,
  .updateEventBtn:hover {
    cursor: pointer;
    background-color: #ffffff90;
    transform: scale(1.1);
  }

  .cardImage {
    width: 304px;
    height: 304px;
    object-fit: cover;
    margin-bottom: 0.5rem;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  .cardBotton {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
  }

  .cardTextContainer {
    width: 100%;
    height: 64px;
    overflow: hidden;
    margin-bottom: 2rem;
  }

  .cardTextContainer h1,
  h2,
  h3,
  h4,
  p {
    color: #181a20;
  }

  .cardTextContainer p {
    font-size: 14px;
    line-height: 1.2;
    text-align: justify;
  }

  .cardTextContainer span {
    font-size: 14px;
    line-height: 1.2;
    text-align: justify;
  }

  .cardTextContainer strong {
    font-weight: 600;
    font-size: 14px;
  }

  .cardTextContainer blockquote {
    line-height: 1.3;
  }

  .cardData {
    display: block;
    color: #191919;
    font-size: 0.9rem;

    display: flex;
    align-items: center;

    margin-bottom: 0.5rem;
  }

  .cardData img {
    margin-right: 0.5rem;
    width: 18px;
  }

  .aboutTheEventBtn {
    background-color: #181a20;
    border: 0;
    border-radius: 5px;
    padding: 0.3rem 1rem;

    display: flex;
    align-items: center;

    position: absolute;
    bottom: 1rem;
    right: 1rem;

    color: #ffffff;
    font-size: 0.8rem;
    font-family: "Poppins", sans-serif;

    transition: 0.3s ease-in-out;
  }

  .aboutTheEventBtn:hover {
    opacity: 50%;
    cursor: pointer;
  }

  @media only screen and (min-width: 560px) and (max-width: 700px) {

    margin-bottom: 3rem;

    .card {
      width: 388px;
      height: 574px;

      flex-direction: column;
      align-items: center;
    }

    .cardTitle {
      font-size: 0.9rem;
    }

    .cardImage {
      width: 354px;
      height: 354px;
      object-fit: cover;
      margin-bottom: 1rem;
    }

    .cardTextContainer p {
      font-size: 14px;
      line-height: 1.2;
      text-align: justify;
    }

    .cardTextContainer span {
      font-size: 14px;
      line-height: 1.2;
      text-align: justify;
    }
  }

  @media only screen and (max-width: 560px) {
    padding: 2rem 0.5rem;
    margin-bottom: 2rem;

    .card {
      width: 310px;
      height: 518px;

      flex-direction: column;
      align-items: center;
    }

    .cardHeader {
      width: 100%;
      height: 64px;
      margin-bottom: 1rem;
    }

    .cardTitle {
      width: 100%;
      font-size: 0.8rem;
      padding-bottom: 0.5rem;
      height: 54px;
    }

    .cardSubtitle {
      font-size: 0.8rem;
    }

    .cardImage {
      width: 280px;
      height: 280px;
      object-fit: cover;
      margin-bottom: 1rem;
    }

    .cardTextContainer p {
      font-size: 13px;
      line-height: 1.2;
      text-align: justify;
    }

    .cardTextContainer span {
      font-size: 13px;
      line-height: 1.2;
      text-align: justify;
    }

    .cardTextContainer strong {
      font-weight: 600;
      font-size: 13px;
    }

    .cardData {
      font-size: 0.8rem;
    }

    .cardLocal {
      font-size: 0.7rem;
    }

    .readAllBtn {
      font-size: 0.8rem;
    }
  }
`;

export const EmptyEvents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .emptyEventsTitle {
    font-weight: 400;
    color: #686d76;
    font-size: 1rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  .emptyImageContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .emptyImage {
    width: 356px;
    margin-bottom: 1rem;
  }

  .linkToCreatePost {
    text-decoration: none;
    color: #1c7ec2;
    transition: 0.3s ease-in-out;
  }

  .linkToCreatePost:hover {
    color: #01204e;
  }

  @media only screen and (max-width: 560px) {
    .emptyEventsTitle {
      font-size: 1rem;
      text-align: center;
    }

    .emptyImage {
      width: 256px;
    }
  }

  @media only screen and (max-width: 1000px) {
    .emptyEventsTitle {
      font-size: 1.2rem;
      text-align: center;
    }

    .emptyImage {
      width: 304px;
    }
  }
`;

export const PopUpCardContainer = styled.div`
  width: 800px;
  height: 80vh;

  max-height: 456px;
  background-color: #ffffff;

  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  border-radius: 10px;

  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.57);

  display: flex;
  align-items: center;
  justify-content: center;

  .eventImageContainer {
    width: 40%;
    height: 100%;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .eventImage {
    width: 204px;
    height: 204px;

    border-radius: 5px;

    object-fit: cover;
  }

  .eventAbout {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    padding: 1rem 2rem;
  }

  .eventAboutTitle {
    display: block;
    margin-bottom: 0.5rem;

    font-size: 0.9rem;
  }

  .eventAboutCards {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }

  .eventAboutCards span {
    font-size: 0.8rem;
    display: flex;
    align-items: center;

    background-color: #f6f6f6;
    padding: 0.5rem 1rem;
    border-radius: 5px;
  }

  .eventAboutCards img {
    width: 14px;
    margin-right: 0.5rem;
  }

  .eventDetailsContainer {
    width: 60%;
    height: 100%;

    padding: 2rem 2rem 1rem 1rem;
  }

  .eventTitle {
    display: block;
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  .eventTextContainer {
    width: 100%;
    height: 80%;
    overflow-y: scroll;
    overflow-x: hidden;

    padding: 1rem 1rem;
    border-radius: 5px;
    margin-bottom: 1rem;

    background-color: #f6f6f6;
  }

  .eventTextContainer p {
    font-size: 13px;
    line-height: 1.2;
    text-align: justify;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .eventTextContainer span {
    font-size: 13px;
    line-height: 1.2;
    text-align: justify;
  }

  .eventTextContainer strong {
    font-weight: 600;
    font-size: 13px;
  }

  .eventTextContainer ul,
  ol {
    font-size: 13px;
    margin-left: 1rem;
  }

  .eventTextContainer h1,
  h2,
  h3,
  h4,
  p {
    color: #181a20;
  }

  .closePopUpBtn {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;

    border: 0;
    background-color: transparent;
  }

  .closePopUpBtn img {
    width: 18px;
  }

  .closePopUpBtn:hover {
    cursor: pointer;
    opacity: 50%;
  }

  @media only screen and (max-width: 420px) {
    width: 90vw;
    height: 80vh;
    min-height: 550px;
    max-height: 550px;
    flex-direction: column;

    .eventTitle {
      font-size: 0.9rem;
    }

    .eventAbout {
      padding: 1rem;
    }

    .eventAboutCards span {
      font-size: 0.8rem;

      padding: 0.4rem 0.4rem;
    }

    .eventImageContainer {
      width: 100%;
      height: 60%;
      display: flex;
      align-items: center;
      justify-content: center;

      overflow: hidden;
    }

    .eventImage {
      width: 100%;
      height: 198px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }

    .eventDetailsContainer {
      height: 40%;
      width: 100%;
      padding: 0 1rem;
    }

    .eventTextContainer {
      height: 158px;
      white-space: pre-wrap;
      word-wrap: break-word;
    }

    .eventTextContainer p {
      font-size: 13px;
      line-height: 1.2;
      text-align: justify;
      white-space: pre-wrap;
      word-wrap: break-word;
    }

    .closePopUpBtn {
      background-color: #ffffff;
      z-index: 500;
      padding: 0.2rem 0.2rem;
      border-radius: 50px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media only screen and (min-width: 420px) and (max-width: 900px) {
    width: 80vw;
    height: 80vh;
    min-height: 550px;
    max-height: 550px;

    flex-direction: column;

    .eventTitle {
      font-size: 0.9rem;
    }

    .eventImageContainer {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .eventImage {
      width: 100%;
      height: 179px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }

    .eventDetailsContainer {
      height: 50%;
      width: 100%;
      padding: 1rem 2rem;
    }

    .eventTextContainer {
      height: 156px;
    }

    .closePopUpBtn {
      background-color: #ffffff;
      z-index: 500;
      padding: 0.2rem 0.2rem;
      border-radius: 50px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media only screen and (min-width: 900px) and (max-width: 1000px) {
    width: 80vw;
    height: 60vh;
    min-height: 500px;
    max-height: 500px;

    .eventImage {
      width: 204px;
      height: 204px;
    }
  }
`;
