import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Card from "../../Components/Card";

import WhatsAppIcon from "../../assets/images/svg/icons/whatsapp-icon.svg";

import SchoolImageImage from "../../assets/images/schoolImage.jpg";
import SchoolImageImage2 from "../../assets/images/svg/family-school.svg";

import InfantilImage from "../../assets/images/infantil.png";
import EscolaImage from "../../assets/images/escola2.png";
import EscolaImage2 from "../../assets/images/escola1.png";

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

        <FamilyContainer>
          <FamilyImageContainer>
            <FamilyImage src={SchoolImageImage2} />
          </FamilyImageContainer>
          <FamilyContent>
            <FamilyTitle>Com Amor, respeito e perdão</FamilyTitle>
            <FamilyText>
              <strong>Servir a Deus é uma escolha</strong>. Josué, como líder de sua casa, tomou
              essa decisão. A partir que ele tomou essa escolha, ele teve a
              responsabilidade de dar o exemplo e conduzir a sua família aos
              caminhos do Senhor. Seja exemplo para seus filhos, dê bom
              testemunho de Cristo e conduza a sua família no caminho da
              Salvação.
            </FamilyText>
          </FamilyContent>
        </FamilyContainer>

        <ContactsContent>
          <Card
            title="Ensino Infantil"
            image={InfantilImage}
            text='Então disse Jesus: "Deixem vir a mim as crianças e não as impeçam pois o Reino dos céus pertence aos que são semelhantes a elas"'
          />
          <Card
            title="Aprenda da Palavra"
            image={EscolaImage}
            text='"Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção e para a instrução na justiça"'
          />
          <Card
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

export default School;
