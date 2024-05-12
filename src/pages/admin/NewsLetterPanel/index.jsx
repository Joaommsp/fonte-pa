import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, db, storage } from "../../../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import moment from "moment";

import Footer from "../../../Components/Footer";

import { NewsLetterPanelContainer, LoaderContainer } from "./styles";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import Icons from "../../../assets/images/svg/icons/iconsExport";
import DefaultImage from "../../../assets/images/default-image.png";
import Logo from "../../../assets/images/imagens-oficiais/banner.svg";

import BarLoader from "react-spinners/BarLoader";

const NewsLetterPanel = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newSubTitle, setNewSubTitle] = useState("");
  const [newHashtags, setNewSHashTags] = useState("");
  const [newText, setNewText] = useState("");
  const [newData, setNewData] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
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

  const createPost = async () => {
    console.log(newData);
    const formatedDate = moment(newData, "YYYY-MM-DD").format("DD/MM/YYYY");
    if (
      newTitle == "" ||
      newSubTitle == "" ||
      newText == "" ||
      newData == "" ||
      newImageUrl == "" ||
      newAuthor == ""
    ) {
      setEnvStatus(1);
    } else {
      await addDoc(postsColletcionRef, {
        title: newTitle,
        subtitle: newSubTitle,
        hastags: newHashtags,
        text: newText,
        data: formatedDate,
        image: newImageUrl,
        author: newAuthor,
      });

      window.location.reload();
      missingItems(0);
    }
  };

  const deletePost = async (id) => {
    const postDoc = doc(db, "news", id);

    await deleteDoc(postDoc);

    window.location.reload();
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

    if (!file) alert("Nenhuma Imagem Selecionada");

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
          <img src={Icons.ArrowLeftIconDark} alt="" /> Início
        </Link>
        <img src={Logo} alt="" className="logo" />
        <button className="logoutBtn" onClick={userSignOut}>
          Logout <img src={Icons.LogoutIconRed} alt="" />{" "}
        </button>
      </div>
      <div className="mainContainer">
        <div className="createContainer">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            placeholder="Title"
            maxLength="50"
            id="title"
            name="title"
            onChange={(event) => setNewTitle(event.target.value)}
          />
          <label htmlFor="subtitle">SubTítulo</label>
          <input
            type="text"
            placeholder="Subtitle"
            id="subtitle"
            name="subtitle"
            maxLength="100"
            onChange={(event) => setNewSubTitle(event.target.value)}
          />
          <label htmlFor="subtitle">Hashtags (Inclua 3 no máx.) </label>
          <input
            type="text"
            placeholder="HashTags"
            id="hashTags"
            name="hashTags"
            maxLength="50"
            onChange={(event) => setNewSHashTags(event.target.value)}
          />
          <label htmlFor="content">Descrição</label>
          <textarea
            type="text"
            placeholder="Description"
            id="content"
            name="content"
            rows="5"
            cols="30"
            className="descriptionTexteArea"
            onChange={(event) => setNewText(event.target.value)}
          ></textarea>
          <label htmlFor="data">Data</label>
          <input
            type="date"
            name="data"
            id="data"
            value={newData}
            onChange={(event) => setNewData(event.target.value)}
          />
          <label htmlFor="author">Autor</label>
          <input
            type="text"
            placeholder="Author"
            maxLength="50"
            id="author"
            name="author"
            onChange={(event) => setNewAuthor(event.target.value)}
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
          <span className="cardsPreviewsTitle">Prévias</span>
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
      </div>
      <Footer></Footer>
    </NewsLetterPanelContainer>
  );
};

export default NewsLetterPanel;
