import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Card from "../../Components/Card";

import WhatsAppIcon from "../../assets/images/svg/icons/whatsapp-icon.svg";

import SchoolImageImage from "../../assets/images/schoolImage.jpg";
import InfantilImage from "../../assets/images/infantil.jpg";
import EscolaImage from "../../assets/images/escola2.jpg";
import EscolaImage2 from "../../assets/images/escola1.jpg";

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
} from "./styles";

function School() {
  return (
    <>
      <Header pageIndex={2} />
      <SchoolContainer>
        <SchoolTextContent>
          <SchoolTitle>Escola Bíblica Dominical</SchoolTitle>
          <SchoolSubTitle>
            <strong>Aos domingos, às 09h30 </strong>O Ensino da Bíblia, a
            Palavra de Deus para crianças, jovens e adultos através do
            crescimento espiritual e o conhecimento das Escrituras Sagradas.
            Aqui aprendemos sobre o verdadeiro Evangelho, buscando aplica-lo em
            nossas vidas diárias e crescermos em nossa fé cristã.
          </SchoolSubTitle>
          <FormLink></FormLink>
        </SchoolTextContent>

        <SchoolImageContainer>
          <SchoolImage src={SchoolImageImage} />
          <span className="attribution">vectorjuice on Freepik</span>
        </SchoolImageContainer>
        <WhatsAppLInk href="" target="_blank">
          <img src={WhatsAppIcon} alt="" />
          Fale Conosco
        </WhatsAppLInk>
      </SchoolContainer>
      <ContactsContainer>
        <Verse>
          &quot;A tua palavra é lâmpada que ilumina os meus passos e luz que
          clareia o meu caminho. &quot; <strong>Gálatas 6:2</strong>
        </Verse>
        <ContactsContent>
          <Card
            title="Ensino Infantil"
            image={InfantilImage}
            text="Então disse Jesus: Deixem vir a mim as crianças e não as impeçam pois o Reino dos céus pertence aos que são semelhantes a elas"
          />
          <Card
            title="Aprenda da Palavra"
            image={EscolaImage}
            text="Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção e para a instrução na justiça, "
          />
          <Card
            title="Fale da Palavra"
            text="Fala com sabedoria e ensina com amor. Se o seu dom é servir, sirva; se é ensinar, ensine;"
            image={EscolaImage2}
          />
        </ContactsContent>
      </ContactsContainer>
      <Footer></Footer>
    </>
  );
}

export default School;
