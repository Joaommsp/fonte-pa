import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, db, storage } from "../../../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import Footer from "../../../Components/Footer";

import {
  NewsLetterPanelContainer,
  LoaderContainer,
  DashBoardHeader,
  UserControlDropDown,
  UserInfos,
  UserInfosContainer,
  UserLinks,
  PostCreatorContainer,
  FeatureHeaderContainer,
  PreviewCardContainer,
  TextWriterContainer,
} from "./styles";

import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import Icons from "../../../assets/images/svg/icons/iconsExport";
import DefaultImage from "../../../assets/images/default-image.png";
import Logo from "../../../assets/images/imagens-oficiais/banner.svg";
import UserPhoto from "../../../assets/images/userDefaultPhoto.png";

import BarLoader from "react-spinners/BarLoader";

const NewsLetterPanel = () => {
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [newTitle, setNewTitle] = useState("");
  const [newSubTitle, setNewSubTitle] = useState("");
  const [newHashtags, setNewSHashTags] = useState("");
  const [newText, setNewText] = useState("");
  const [newData, setNewData] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [previewImageUrl, setPreviewImageUrl] = useState(DefaultImage);
  const [aouthCheck, setAothCheck] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);

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
    if (
      newTitle == "" ||
      newSubTitle == "" ||
      newText == "" ||
      newData == "" ||
      newImageUrl == "" ||
      newAuthor == ""
    ) {
      setErrorMessage("Preencha todos os campos");
      resetErrorMessage();
    } else {
      await addDoc(postsColletcionRef, {
        title: newTitle,
        subtitle: newSubTitle,
        hastags: newHashtags,
        text: newText,
        data: Timestamp.fromDate(new Date(newData)),
        image: newImageUrl,
        author: newAuthor,
      });

      window.location.reload();
    }
  };

  const resetErrorMessage = () => {
    const timeToReset = setInterval(() => {
      setErrorMessage(null);
      clearInterval(timeToReset);
    }, 5000);
  };

  const uploadImage = (event) => {
    event.preventDefault();

    const file = event.target[0]?.files[0];

    if (!file) {
      setErrorMessage("Nenhuma Imagem Selecionada");
      resetErrorMessage();
      return;
    }

    const isValidSize = isSizeMbMatch(file.size);

    if (!isValidSize) {
      setErrorMessage("Tamanho da imagem excede o limite de 3Mb");
      resetErrorMessage();
      return;
    }

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

  const isSizeMbMatch = (bytes) => {
    console.log(bytes);
    const mb = bytes / (1024 * 1024);
    const mbFormated = mb.toFixed(2);
    console.log(mbFormated);

    if (mbFormated < 3) {
      return true;
    } else {
      return false;
    }
  };

  const RichTextElement = () => {
    const textEditorModules = {
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { ident: "-1" },
          { ident: "+1" },
        ],
      ],
    };

    return (
      <ReactQuill
        theme="snow"
        value={newText}
        onChange={setNewText}
        modules={textEditorModules}
        className="textEditor"
      />
    );
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
      <PostCreatorContainer>
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
              <h2 className="featureTitle">Criador de postagens</h2>
            </div>
          </div>
        </FeatureHeaderContainer>
        <div className="mainContainer">
          <div className="createContainer">
            <label htmlFor="title">Título</label>
            <input
              className="grayInput"
              type="text"
              placeholder="Title"
              maxLength="50"
              id="title"
              name="title"
              onChange={(event) => setNewTitle(event.target.value)}
            />
            <label htmlFor="subtitle">SubTítulo</label>
            <input
              className="grayInput"
              type="text"
              placeholder="Subtitle"
              id="subtitle"
              name="subtitle"
              maxLength="100"
              onChange={(event) => setNewSubTitle(event.target.value)}
            />
            <label htmlFor="subtitle">Hashtags (Inclua 3 no máx.) </label>
            <input
              className="grayInput"
              type="text"
              placeholder="HashTags"
              id="hashTags"
              name="hashTags"
              maxLength="50"
              onChange={(event) => setNewSHashTags(event.target.value)}
            />
            {
              <TextWriterContainer>
                <label>Conteúdo</label>
                {RichTextElement()}
              </TextWriterContainer>
            }
            <div id="text"></div>
            <label htmlFor="data">Data</label>
            <input
              className="dateInput"
              type="date"
              name="data"
              id="data"
              value={newData}
              onChange={(event) => setNewData(event.target.value)}
            />
            <label htmlFor="author">Autor</label>
            <input
              className="grayInput"
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
                <img
                  src={Icons.UploadIconLightBlue}
                  alt="icone para carregar imagem"
                />
              </button>
              <div className="uploadImageContainer">
                <img className="prevUploadImage" src={previewImageUrl} alt="" />
                <progress
                  className="imageUploadProgress"
                  value={progress}
                  max="100"
                ></progress>
              </div>
            </form>
            <button className="createBtn" onClick={createPost}>
              CRIAR POSTAGEM
            </button>
            <div className="envStatusContainer">
              {errorMessage != null && (
                <span>
                  {errorMessage}{" "}
                  <img src={Icons.AlertIconRed} alt="Ícone de alerta" />{" "}
                </span>
              )}
            </div>
          </div>
          <PreviewCardContainer>
            <h2 className="previewContainerTitle">Prévia</h2>
            <div className="previewCard">
              <div className="previewCardHeader">
                <span className="previewCardTitle">{newTitle}</span>
                <span className="previewCardSubtitle">{newSubTitle}</span>
                <span className="previewCardHashtags">{newHashtags}</span>
              </div>
              <div className="previewCardContent">
                <img
                  className="previewCardUploadImage"
                  src={previewImageUrl}
                  alt=""
                />
                <div
                  className="previewCardTextBox"
                  dangerouslySetInnerHTML={{ __html: newText }}
                ></div>
                <span className="previewCardAuthor">{newAuthor}</span>
                <span className="previewCardData">{newData}</span>
              </div>
            </div>
          </PreviewCardContainer>
        </div>
      </PostCreatorContainer>
      <Footer></Footer>
    </NewsLetterPanelContainer>
  );
};

export default NewsLetterPanel;
