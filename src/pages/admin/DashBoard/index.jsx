import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

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
  FooterContainer,
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
      <DashBoardHeader>
        <img src={Logo} alt="" className="logo" />
        <UserInfosContainer>
          <UserInfos>
            <UserLinks>
              <Link to={"/"} className="homeLink" data-title="Voltar ao início">
                {" "}
                <img src={Icons.HomeIcon} alt="" />
              </Link>
            </UserLinks>
            <img src={UserPhoto} alt="Foto do usuário" className="userPhoto" />
            <span className="userName">Admin</span>
            <img
              src={Icons.ArrowDown}
              alt=""
              className="openPopUpIcon"
              onMouseEnter={() => setPopUpOpen(true)}
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
        <DashBoardCardsContainer>
          <Link to="/postcreator" className="cardLinkContainer">
            <DashBoardCard>
              <span className="featureName">Criador de postagens</span>
              <div className="cardImageContainer" id="createPostImageBg">
                <div className="cardContent">
                  <div className="defaultLinkImageContainer"></div>
                </div>
              </div>
            </DashBoardCard>
          </Link>
          <Link to="/postsmanager" className="cardLinkContainer">
            <DashBoardCard>
              <span className="featureName">Gerenciador de postagens</span>
              <div className="cardImageContainer" id="editPostImageBg">
                <div className="cardContent">
                  <div className="defaultLinkImageContainer"></div>
                </div>
              </div>
            </DashBoardCard>
          </Link>
        </DashBoardCardsContainer>
      </DashBoardContent>
      <FooterContainer>
        <Footer></Footer>
      </FooterContainer>
    </NewsLetterPanelContainer>
  );
};

export default DashBoard;
