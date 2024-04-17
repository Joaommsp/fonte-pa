import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { auth, db, storage } from "../../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { NewsLetterPanelContainer, LoaderContainer } from "./style";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import ArrowLeftIcon from "../../assets/images/svg/icons/arrow-left-icon.svg";
import LogoutIcon from "../../assets/images/svg/icons/logout-icon.svg";
import DeleteIcon from "../../assets/images/svg/icons/delete-icon.svg";
import DefaultImage from "../../assets/images/default-image.png";

import BarLoader from "react-spinners/BarLoader";

const NewsLetterPanel = () => {
  const [loading, setLoading] = useState(true);

  const [posts, setPosts] = useState([]);

  const [newTitle, setNewTitle] = useState("");
  const [newSubTitle, setNewSubTitle] = useState("");
  const [newText, setNewText] = useState("");
  const [newData, setNewData] = useState("");
  const [envStatus, setEnvStatus] = useState(0);

  const [newImageUrl, setNewImageUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [previewImageUrl, setPreviewImageUrl] = useState(DefaultImage);

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
        navigate("/newsletterlogin");
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

  const createPost = async () => {
    console.log(newData);

    if (
      newTitle == "" ||
      newSubTitle == "" ||
      newText == "" ||
      newData == "" ||
      newImageUrl == ""
    ) {
      setEnvStatus(1);
    } else {
      await addDoc(postsColletcionRef, {
        title: newTitle,
        subtitle: newSubTitle,
        text: newText,
        data: newData,
        image: newImageUrl,
      });

      window.location.reload();
      missingItems(0);
    }
  };

  const missingItems = (status) => {
    if (status == 0) {
      return <span></span>;
    } else {
      setInterval(() => {
        setEnvStatus(0);
        clearInterval();
      }, 5000);
      return <span>Por favor, preencha todos os campos</span>;
    }
  };

  const uploadImage = (event) => {
    event.preventDefault();

    const file = event.target[0]?.files[0];

    if (!file) return;

    const storageRef = ref(storage, `postsImages/${file.name}`);
    const uploadTaks = uploadBytesResumable(storageRef, file);

    uploadTaks.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (erro) => {
        alert(erro);
      },
      () => {
        getDownloadURL(uploadTaks.snapshot.ref).then((url) => {
          setNewImageUrl(url);
          setPreviewImageUrl(url);
        });
      }
    );
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsColletcionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  const formatadorDeData = (dataToFormat) => {
    let formatter = new Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return formatter.format(dataToFormat).toString();
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
      <div className="header">
        <Link to={"/"} className="homeLink">
          {" "}
          <img src={ArrowLeftIcon} alt="" /> Página Inicial
        </Link>
        <button className="logoutBtn" onClick={userSignOut}>
          Logout <img src={LogoutIcon} alt="" />{" "}
        </button>
      </div>
      <div className="mainContainer">
        <div className="createContainer">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            placeholder="Title"
            maxLength="25"
            id="title"
            name="title"
            onChange={(event) => setNewTitle(event.target.value)}
          />
          <label htmlFor="subtitle">SubTítulo</label>
          <input
            type="text"
            placeholder="Subtitle"
            maxLength="55"
            id="subtitle"
            name="subtitle"
            onChange={(event) => setNewSubTitle(event.target.value)}
          />
          <label htmlFor="content">Descrição</label>
          <input
            type="text"
            placeholder="Description"
            maxLength="120"
            id="content"
            name="content"
            onChange={(event) => setNewText(event.target.value)}
          />
          <label htmlFor="data">Data</label>
          <input
            type="date"
            name="data"
            id="data"
            value={newData}
            onChange={(event) => setNewData(event.target.value)}
          />
          <form onSubmit={uploadImage}>
            <input
              type="file"
              accept="image/jpeg, image/png"
              className="inputImage"
            />
            <button type="submit" className="uploadImageBtn">
              Carregar Imagem
            </button>
            <div>
              <img className="prevUploadImage" src={previewImageUrl} alt="" />
            </div>
          </form>
          <button className="createBtn" onClick={createPost}>
            CRIAR POSTAGEM
          </button>
          <div className="envStatusContainer">
            <span>{missingItems(envStatus)}</span>
          </div>
        </div>
        <div className="cardsContainer">
          <span>Prévias</span>
          {posts.map((post, index) => {
            return (
              <div className="card" key={index}>
                <button className="deleteBtn">
                  <img src={DeleteIcon} alt="" />
                </button>
                <h2 className="cardTitle">{post.title}</h2>
                <span className="cardSubtitle">{post.subtitle}</span>
                <img className="cardImage" src={post.image} alt="" />
                <div className="cardBotton">
                  <p className="cardText">{post.text}</p>
                  <span className="cardData">{post.data}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </NewsLetterPanelContainer>
  );
};

export default NewsLetterPanel;
