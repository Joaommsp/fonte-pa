import { useEffect } from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import OfferWayCard from "../../Components/OfferWayCard";

import Icons from "../../assets/images/svg/icons/iconsExport";

import OfferDoc from "../../assets/Docs/Diretrizes sobre ofertas e contribuições.pdf";

import {
  HomeContainer,
  ContentContainer,
  Banner,
  BannerTextContent,
  TextContent,
  Title,
  AboutOffers,
  VideoContainer,
  WhatsAppLInk,
  OfferWayAboutContainer,
  OfferWayTitle,
  OfferWayText,
  OffersCardsContainer,
  OffersImportants,
  OfferDocDonwloadContainer,
} from "./styles";

const Offers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HomeContainer>
      <Header pageIndex={2} />
      <ContentContainer>
        <Banner className="banner">
          <BannerTextContent>
            <TextContent>
              <Title>Contribuições e Ofertas</Title>
              <AboutOffers>
                Contribua financeiramente com a Fonte. Assista o video abaixo
                para saber como realizar sua oferta a Igreja Batista Fonte -
                Paulo Afonso.
              </AboutOffers>
            </TextContent>
          </BannerTextContent>

          <VideoContainer>
            <iframe
              className="offerVideoIframe"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/admnwfMrgWs?si=re_85OZu14HGTmsU"
              title="YouTube video player"
              frameBorder="0" // Use frameBorder instead of frameborder for React
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen // Use allowFullScreen instead of allowfullscreen for React
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </VideoContainer>

          <OfferWayAboutContainer>
            <OfferWayTitle>Realize sua contribuição</OfferWayTitle>
            <OfferWayText>
              Seguem as formas disponíveis para sua oferta. Você também pode
              ofertar diretamente na Igreja.
            </OfferWayText>
          </OfferWayAboutContainer>

          <OffersCardsContainer>
            <OfferWayCard
              iconSrc={Icons.PixIcon}
              wayName="PIX"
              wayInfo="Chave : 14.309.042/0002-02 (CNPJ)"
            />
            <OfferWayCard
              iconSrc={Icons.BankIcon}
              wayName="Depósito Bancário"
              wayInfo=" Bradesco Ag. 3052 | Cc. 27261-2"
            />
          </OffersCardsContainer>

          <OffersImportants>
            <OfferWayTitle>
              IMPORTANTE <img src={Icons.AlertIconRed} alt="" />{" "}
            </OfferWayTitle>
            <OfferWayText>
              Ao realizar a sua contribuição, envie o comprovante para
              <strong> ofertasfontepa@gmail.com</strong>, dessa forma podemos
              organizar melhor nossas finanças e garantir que as ofertas sejam
              em prol da Igreja Batista Fonte de Paulo Afonso, em apoio da nossa
              missão.
            </OfferWayText>

            <OfferDocDonwloadContainer>
              <OfferWayText>
                Para conhecer as nossas diretrizes sobre ofertas e
                contribuições, acesse este documento:
              </OfferWayText>
              <a
                className="offerDocLink"
                href={OfferDoc}
                download="Diretrizes sobre as ofertas e contribuições.pdf"
              >
                <div>
                  <img src={Icons.DownloadIcon} alt="Ícone de download" />
                  <span>Diretrizes sobre as ofertas e contribuições</span>
                </div>
              </a>
            </OfferDocDonwloadContainer>
          </OffersImportants>

          <WhatsAppLInk
            href="https://api.whatsapp.com/send/?phone=5575999706296&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <img src={Icons.WhatsAppIcon} alt="" />
            Fale Conosco
          </WhatsAppLInk>
        </Banner>
      </ContentContainer>
      <Footer></Footer>
    </HomeContainer>
  );
};

export default Offers;
