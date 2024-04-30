import { useEffect } from "react";

import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import InfoCard from "../../../Components/InfoCard";

import WhatsAppIcon from "../../../assets/images/svg/icons/whatsapp-icon.svg";

import KidsImageSource from "../../../assets/images/svg/kidsImage.svg";
import SchoolImageImage2 from "../../../assets/images/svg/family-school.svg";

import InfantilImage from "../../../assets/images/infantil.png";
import EscolaImage from "../../../assets/images/escola2.png";
import EscolaImage2 from "../../../assets/images/escola1.png";

import {
  SchoolContainer,
  SchoolTextContent,
  SchoolImageContainer,
  SchoolTitle,
  SchoolSubTitle,
  SchoolImage,
  WhatsAppLInk,
  FormLink,
  ContactsContainer,
  Verse,
  ContactsContent,
  FamilyContainer,
  FamilyContent,
  FamilyImage,
  FamilyImageContainer,
  FamilyText,
  FamilyTitle,
} from "./styles";

function Kids() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header pageIndex={3} />
      <SchoolContainer>
        <SchoolTextContent>
          <SchoolTitle>Ministério Infantil</SchoolTitle>
          <SchoolSubTitle>
            Dedicados ao cuidado, ensino e desenvolvimento espiritual de
            crianças dentro da comunidade da igreja, nutrir a fé das crianças,
            <strong> ensinando-lhes </strong>sobre o amor de Deus, a importância
            da Bíblia e incentivando um relacionamento pessoal com Jesus Cristo.
          </SchoolSubTitle>
          <FormLink></FormLink>
        </SchoolTextContent>

        <SchoolImageContainer>
          <SchoolImage src={KidsImageSource} />
        </SchoolImageContainer>
        <WhatsAppLInk
          href="https://api.whatsapp.com/send/?phone=5575999706296&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          <img src={WhatsAppIcon} alt="" />
          Fale Conosco
        </WhatsAppLInk>
      </SchoolContainer>
      <ContactsContainer>
        <Verse>
          &quot;A tua palavra é lâmpada que ilumina os meus passos e luz que
          clareia o meu caminho. &quot; <strong>Gálatas 6:2</strong>
        </Verse>

        <FamilyContainer>
          <FamilyImageContainer>
            <FamilyImage src={SchoolImageImage2} />
          </FamilyImageContainer>
          <FamilyContent>
            <FamilyTitle>Com Amor, respeito e perdão</FamilyTitle>
            <FamilyText>
              <strong>Servir a Deus é uma escolha</strong>. Josué, como líder de
              sua casa, tomou essa decisão. A partir que ele tomou essa escolha,
              ele teve a responsabilidade de dar o exemplo e conduzir a sua
              família aos caminhos do Senhor. Seja exemplo para seus filhos, dê
              bom testemunho de Cristo e conduza a sua família no caminho da
              Salvação.
            </FamilyText>
          </FamilyContent>
        </FamilyContainer>

        <ContactsContent>
          <InfoCard
            title="Ensino Infantil"
            image={InfantilImage}
            text='Então disse Jesus: "Deixem vir a mim as crianças e não as impeçam pois o Reino dos céus pertence aos que são semelhantes a elas"'
          />
          <InfoCard
            title="Aprenda da Palavra"
            image={EscolaImage}
            text='"Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção e para a instrução na justiça"'
          />
          <InfoCard
            title="Esteja em comunhão"
            text='"Um novo mandamento dou a vocês: Amem-se uns aos outros. Como eu os amei, vocês devem amar-se uns aos outros."
            João 13:34'
            image={EscolaImage2}
          />
        </ContactsContent>
      </ContactsContainer>
      <Footer></Footer>
    </>
  );
}

export default Kids;
