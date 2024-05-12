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
  UserInfos,
  UserControlDropDown,
} from "./styles";

import Icons from "../../../assets/images/svg/icons/iconsExport";
import Logo from "../../../assets/images/imagens-oficiais/banner.svg";
import UserPhoto from "../../../assets/images/userDefaultPhoto.png";

import BarLoader from "react-spinners/BarLoader";

const DashBoard = () => {
  const [loading, setLoading] = useState(true);
  const [aouthCheck, setAothCheck] = useState(0);

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

  useEffect(() => {}, []);

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
            <img src={UserPhoto} alt="Foto do usuário" className="userPhoto" />
            <span className="userName">Admin</span>
          </UserInfos>
          <UserControlDropDown>
            <button className="logoutBtn" onClick={userSignOut}>
              Logout <img src={Icons.LogoutIconRed} alt="" />{" "}
            </button>
          </UserControlDropDown>
        </UserInfosContainer>
      </DashBoardHeader>
      <Link to={"/"} className="homeLink">
        {" "}
        <img src={Icons.ArrowLeftIconDark} alt="" /> Início
      </Link>
      <Footer></Footer>
    </NewsLetterPanelContainer>
  );
};

export default DashBoard;
