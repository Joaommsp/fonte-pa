import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { ContactCard } from "../../Components/ContactCard";

import WhatsAppIcon from "../../assets/images/svg/icons/whatsapp-icon.svg";
import WhatsAppIconBlue from "../../assets/images/svg/icons/whatsapp-icon-blue.svg";
import BibleIcon from "../../assets/images/svg/icons/bible-icon.svg";
import ChurchIcon from "../../assets/images/svg/icons/church-icon.svg";


import HelpImageImage from "../../assets/images/helpImage.jpg";

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
} from "./styles";

function Help() {
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
        <WhatsAppLInk href="" target="_blank">
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
            <ContactCard
              title="WhatsApp"
              content="Vamos conversar! Mande uma mensagem para gente."
              icon={WhatsAppIconBlue}
              link="#"
              linkText="Converse conosco"
            />
            <ContactCard
              title="Aconselhamento Bíblico"
              content="Nossa equipe de conselheiros bíblicos entrará em contato com você."
              icon={BibleIcon}
              link="#"
              linkText="Entre em contato"
            />
            <ContactCard
              title="Visite-nos"
              content="Venha nos visitar ! adoraríamos tê-lo(a) conosco."
              icon={ChurchIcon}
              link="#"
              linkText="Onde nos encontrar"
            />
          </Contacts>
          <ContactsTitle>Converse conosco</ContactsTitle>
        </ContactsContent>
      </ContactsContainer>
      <Footer></Footer>
    </>
  );
}

export default Help;
