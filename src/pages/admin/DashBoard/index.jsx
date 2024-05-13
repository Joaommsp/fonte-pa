import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "intro.js/introjs.css";
import introJs from "intro.js";

import Footer from "../../../Components/Footer";

import {
  NewsLetterPanelContainer,
  LoaderContainer,
  DashBoardHeader,
  UserInfosContainer,
  UserLinks,
  UserInfos,
  UserControlDropDown,
  DashBoardContent,
  DashBoardContentHeader,
  DashBoardTitle,
  DashBoardCardsContainer,
  DashBoardCard,
} from "./styles";

import Icons from "../../../assets/images/svg/icons/iconsExport";
import Logo from "../../../assets/images/imagens-oficiais/banner.svg";
import UserPhoto from "../../../assets/images/userDefaultPhoto.png";

import BarLoader from "react-spinners/BarLoader";

const DashBoard = () => {
  const [loading, setLoading] = useState(true);
  const [aouthCheck, setAothCheck] = useState(0);
  const [popUpOpen, setPopUpOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let loadingTime = setInterval(() => {
      setLoading(false);
      clearInterval(loadingTime);
    }, 3000);

    const timeAothCheck = setTimeout(() => {
      setAothCheck(1);
      clearTimeout(timeAothCheck);
    }, 3000);

    const listen = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth).then(() => {
      console.log("saiu com sucesso");
    });
  };

  return aouthCheck == 0 && loading == true ? (
    <LoaderContainer>
      <BarLoader
        color="#1662a1"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      ></BarLoader>
    </LoaderContainer>
  ) : (
    <NewsLetterPanelContainer>
      <DashBoardHeader className="asideMenu">
        <img src={Logo} alt="" className="logo" />
        <UserInfosContainer>
          <UserInfos>
            <UserLinks data-title="Bem vindo painel de controle!" data-intro="">
              <Link
                to={"/"}
                className="homeLink"
                data-title="Voltar ao início"
                data-intro="Clique aqui para voltar à página inicial"
              >
                {" "}
                <img src={Icons.HomeIcon} alt="" />
              </Link>
              <Link className="homeLink" onClick={() => introJs().start()}>
                {" "}
                <img src={Icons.DoubtIcon} alt="" />
              </Link>
            </UserLinks>
            <img src={UserPhoto} alt="Foto do usuário" className="userPhoto" />
            <span className="userName">Admin</span>
            <img
              src={Icons.ArrowDown}
              alt=""
              className="openPopUpIcon"
              onMouseEnter={() => setPopUpOpen(true)}
              data-title="Opções de usuário"
              data-intro="Cliqui aqui para acessar o menu de opções de usuário"
            />
          </UserInfos>
          {popUpOpen && (
            <UserControlDropDown onMouseLeave={() => setPopUpOpen(false)}>
              <button className="logoutBtn" onClick={userSignOut}>
                Logout <img src={Icons.LogoutIconRed} alt="" />{" "}
              </button>
            </UserControlDropDown>
          )}
        </UserInfosContainer>
      </DashBoardHeader>
      <DashBoardContent>
        <DashBoardContentHeader>
          <DashBoardTitle>Overview</DashBoardTitle>
        </DashBoardContentHeader>
        <DashBoardCardsContainer
          data-title="Aqui estão os recursos disponíveis"
          data-intro=""
        >
          <Link to="/adminpanel" className="cardLinkContainer">
            <DashBoardCard
              data-title="Criador de Postagens"
              data-intro="Acesse para criar novas postagens"
            >
              <span className="featureName">Criador de postagens</span>
              <div className="cardImageContainer" id="createPostImageBg">
                <div className="cardContent">
                  <div className="defaultLinkImageContainer"></div>
                </div>
              </div>
            </DashBoardCard>
          </Link>
          <Link to="/adminpanel" className="cardLinkContainer">
            <DashBoardCard
              data-title="Visualizador de Postagem"
              data-intro="Acesse para visualizar e gerenciar as postagens que estão no ar"
            >
              <span className="featureName">Visualizar postagens</span>
              <div className="cardImageContainer" id="editPostImageBg">
                <div className="cardContent">
                  <div className="defaultLinkImageContainer"></div>
                </div>
              </div>
            </DashBoardCard>
          </Link>
        </DashBoardCardsContainer>
      </DashBoardContent>
      <Footer></Footer>
    </NewsLetterPanelContainer>
  );
};

export default DashBoard;
