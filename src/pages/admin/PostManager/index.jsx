import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, db } from "../../../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "intro.js/introjs.css";
import introJs from "intro.js";

import Footer from "../../../Components/Footer";

import {
  NewsLetterPanelContainer,
  LoaderContainer,
  DashBoardHeader,
  UserControlDropDown,
  UserInfos,
  UserInfosContainer,
  UserLinks,
  PostManagerContentContainer,
  FeatureHeaderContainer,
} from "./styles";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

import Icons from "../../../assets/images/svg/icons/iconsExport";
import Logo from "../../../assets/images/imagens-oficiais/banner.svg";
import UserPhoto from "../../../assets/images/userDefaultPhoto.png";

import BarLoader from "react-spinners/BarLoader";

const PostManager = () => {
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [aouthCheck, setAothCheck] = useState(0);

  const postsColletcionRef = collection(db, "news");

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

  const deletePost = async (id) => {
    const postDoc = doc(db, "news", id);

    await deleteDoc(postDoc);

    window.location.reload();
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsColletcionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

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
      <PostManagerContentContainer>
        <FeatureHeaderContainer>
          <div className="featureHeaderGradient">
            <div className="featureInfos">
              <Link to="/dashboard" className="backToDashBoardLink">
                <img
                  src={Icons.ArrowLeftIcon}
                  alt="Icone voltar para a página anterior"
                />
                Voltar
              </Link>
              <h2 className="featureTitle">Gerenciador de postagens</h2>
            </div>
          </div>
        </FeatureHeaderContainer>
        <div className="cardsContainer">
          {posts.map((post, index) => {
            return (
              <div className="card" key={index}>
                <button
                  className="deleteBtn"
                  onClick={() => deletePost(post.id)}
                >
                  <img src={Icons.DeleteIconRed} alt="" />
                </button>
                <h2 className="cardTitle">{post.title}</h2>
                <span className="cardSubtitle">{post.subtitle}</span>
                <span className="cardHashtags">{post.hastags}</span>
                <img className="cardImage" src={post.image} alt="" />
                <div className="cardBotton">
                  <p className="cardText">{post.text}</p>
                  <span className="cardData">{post.data}</span>
                  <span className="cardAuthor">{post.author}</span>
                </div>
              </div>
            );
          })}
        </div>
        ;
      </PostManagerContentContainer>
      <Footer></Footer>
    </NewsLetterPanelContainer>
  );
};

export default PostManager;
