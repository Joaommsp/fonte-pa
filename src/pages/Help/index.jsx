import { useEffect } from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { HelpChannelsCard } from "../../Components/HelpChannelsCard";

import WhatsAppIcon from "../../assets/images/svg/icons/whatsapp-icon.svg";
import WhatsAppIconBlue from "../../assets/images/svg/icons/whatsapp-icon-blue.svg";
import BibleIcon from "../../assets/images/svg/icons/bible-icon.svg";
import ChurchIcon from "../../assets/images/svg/icons/church-icon.svg";

import HelpImageImage from "../../assets/images/helpImage.jpg";
import GrowImageImage from "../../assets/images/svg/grow-together.svg";

import {
  HelpContainer,
  HelpTextContent,
  HelpImageContainer,
  HelpTitle,
  HelpSubTitle,
  HelpImage,
  WhatsAppLInk,
  FormLink,
  ContactsContainer,
  Verse,
  ContactsContent,
  ContactsTitle,
  Contacts,
  GrowTogetherContainer,
  GrowImageContainer,
  GrowImage,
  GrowTextContent,
  GrowTitle,
  GrowText,
} from "./styles.js";

function Help() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header pageIndex={1} />
      <HelpContainer>
        <HelpTextContent>
          <HelpTitle>Precisa de Ajuda ?</HelpTitle>
          <HelpSubTitle>
            Se precisar de apoio para lidar com questões como ansiedade, medo,
            depressão, problemas familiares , você pode entrar em contato
            conosco para receber aconselhamento baseado na Bíblia da equipe de
            conselheiros da Igreja Batista Fonte.{" "}
            <strong>Teremos o prazer em te ajudar!</strong>
          </HelpSubTitle>
          <FormLink></FormLink>
        </HelpTextContent>

        <HelpImageContainer>
          <HelpImage src={HelpImageImage} />
          <span className="attribution">vecteezy.com</span>
        </HelpImageContainer>
        <WhatsAppLInk
          href="https://api.whatsapp.com/send/?phone=5575999706296&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          <img src={WhatsAppIcon} alt="" />
          Fale Conosco
        </WhatsAppLInk>
      </HelpContainer>
      <ContactsContainer>
        <Verse>
          &quot;Levem os fardos pesados uns dos outros e, assim, cumpram a lei
          de Cristo.&quot; <strong>Gálatas 6:2</strong>
        </Verse>
        <ContactsContent>
          <Contacts>
            <HelpChannelsCard
              title="WhatsApp"
              content="Vamos conversar! Mande uma mensagem para gente."
              icon={WhatsAppIconBlue}
              link="#"
              linkText="Converse conosco"
            />
            <HelpChannelsCard
              title="Aconselhamento Bíblico"
              content="Nossa equipe de conselheiros bíblicos entrará em contato com você."
              icon={BibleIcon}
              link="#"
              linkText="Entre em contato"
            />
            <HelpChannelsCard
              title="Visite-nos"
              content="Venha nos visitar ! adoraríamos tê-lo(a) conosco."
              icon={ChurchIcon}
              link="#"
              linkText="Onde nos encontrar"
            />
          </Contacts>
          <ContactsTitle>Converse conosco</ContactsTitle>
        </ContactsContent>
        <GrowTogetherContainer>
          <GrowImageContainer>
            <GrowImage src={GrowImageImage} />
          </GrowImageContainer>
          <GrowTextContent>
            <GrowTitle>Vamos crescer juntos</GrowTitle>
            <GrowText>
              Em um corpo, todos os membros crescem juntos. Se um dedo ficar
              separado do resto do corpo, não pode continuar a crescer, nem
              mesmo consegue viver. Da mesma forma, todos precisamos estar
              unidos a Jesus, que é a cabeça, para ter vida. E, nessa vida com
              Jesus, também precisamos dos outros membros do corpo.
              <strong>Juntos, crescemos e ficamos mais fortes.</strong>
            </GrowText>
            <GrowText></GrowText>
          </GrowTextContent>
        </GrowTogetherContainer>
      </ContactsContainer>
      <Footer></Footer>
    </>
  );
}

export default Help;
