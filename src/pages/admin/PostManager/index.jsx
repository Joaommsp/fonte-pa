import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, db } from "../../../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { query, orderBy } from "firebase/firestore";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";

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
  CardsContainer,
} from "./styles";

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
      navigate("/login");
    });
  };

  const deletePost = async (id, imageUrl) => {
    const storage = getStorage();

    const postDoc = doc(db, "news", id);
    const desertRef = ref(storage, `${imageUrl}`);

    await deleteDoc(postDoc)
      .then(() => {
        deleteObject(desertRef);
      })
      .catch((error) => {
        console.log(error);
      });

    window.location.reload();
  };

  useEffect(() => {
    const getPosts = async () => {
      const queryOrderByDate = query(
        postsColletcionRef,
        orderBy("data", "desc")
      );
      const data = await getDocs(queryOrderByDate);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(posts);
    };

    getPosts();
  }, []);

  const formateDate = (data) => {
    const dateInMilliseconds = data.seconds * 1000 + data.nanoseconds / 1000000;

    const dataFormatada = new Date(dateInMilliseconds);

    const formatDDMMYYYY = dataFormatada.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    return formatDDMMYYYY;
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
            <UserLinks>
              <Link to={"/"} className="homeLink">
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
        <CardsContainer>
          {posts.map((post, index) => {
            return (
              <div className="card" key={index}>
                <div className="cardHeader">
                  <h2 className="cardTitle">{post.title}</h2>
                  <span className="cardHashtags">{post.hastags}</span>
                </div>
                <div className="cardHeaderContainer">
                  <img className="cardImage" src={post.image} alt="" />
                  <button
                    className="deletePostBtn"
                    onClick={() => deletePost(post.id, post.image)}
                  >
                    <img
                      src={Icons.DeleteIconRed}
                      alt="Icone de deletar postagem"
                    />
                  </button>
                </div>
                <div className="cardBotton">
                  <div
                    className="cardTextContainer"
                    dangerouslySetInnerHTML={{ __html: post.text }}
                  ></div>
                  <span className="cardData">{formateDate(post.data)}</span>
                </div>
              </div>
            );
          })}
        </CardsContainer>
      </PostManagerContentContainer>
      <Footer></Footer>
    </NewsLetterPanelContainer>
  );
};

export default PostManager;
