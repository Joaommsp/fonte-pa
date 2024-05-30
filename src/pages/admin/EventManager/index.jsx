import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, db } from "../../../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { query, orderBy, Timestamp } from "firebase/firestore";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
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
  PostManagerContentContainer,
  FeatureHeaderContainer,
  CardsContainer,
  ActionStatusContainer,
  NoticeOldPostData,
  PopUpUpdateContainer,
  TextWriterContainer,
  ConfirmDeleteModal,
  EmptyEvents,
} from "./styles";

import Icons from "../../../assets/images/svg/icons/iconsExport";
import Logo from "../../../assets/images/imagens-oficiais/banner.svg";
import UserPhoto from "../../../assets/images/userDefaultPhoto.png";
import SucessDeleteImage from "../../../assets/images/succesDeleteImage.png";
import ErrorDeleteImage from "../../../assets/images/error-image.png";
import NothingPosted from "../../../assets/images/nothingPostedYet.png";

import BarLoader from "react-spinners/BarLoader";

const EventManager = () => {
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [aouthCheck, setAothCheck] = useState(0);
  const [actionStatus, setActionStatus] = useState("");
  const [actionStatusImage, setActionStatusImage] = useState(null);
  const [openPopupIndex, setOpenPopupIndex] = useState(null);
  const [newText, setNewText] = useState("");
  const [newData, setNewData] = useState("");
  const [initialTitle, setInitialTitle] = useState(null);
  const [initialHour, setInitialHour] = useState(null);
  const [initialLocal, setInitialLocal] = useState(null);
  const [statusMessage, setStatusMessage] = useState(null);
  const [upenConfirmDeletModal, setOpenConfirmDeleteModal] = useState(false);
  const [eventId, setEventId] = useState("");
  const [eventImage, setEventImage] = useState("");

  const eventsColletcionRef = collection(db, "events");

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

  useEffect(() => {
    if (openPopupIndex != null) {
      const titleInput = document.getElementById("newTitle");
      const timeInput = document.getElementById("newHour");
      const localInput = document.getElementById("newLocal");

      setInitialTitle(titleInput.value || "");
      setInitialHour(timeInput.value || "");
      setInitialLocal(localInput.value || "");
    }
  }, [openPopupIndex]);

  const userSignOut = () => {
    signOut(auth).then(() => {
      navigate("/login");
    });
  };

  const getEvents = async () => {
    const queryOrderByDate = query(
      eventsColletcionRef,
      orderBy("data", "desc")
    );
    const data = await getDocs(queryOrderByDate);
    setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    const verifyOldData = () => {
      if (events.length > 0) {
        const twoMonthsAgo = new Date();
        twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 5);

        events.forEach((p) => {
          const postDate = createDateObject(formateDate(p.data));
          if (postDate < twoMonthsAgo) {
            deleteEvent(p.id, p.image);
          }
        });
      }
    };

    verifyOldData();
  }, [events]);

  const formateDate = (data) => {
    const dateInMilliseconds = data.seconds * 1000 + data.nanoseconds / 1000000;

    const dataFormatada = new Date(dateInMilliseconds);

    dataFormatada.setDate(dataFormatada.getDate() + 1);

    const formatDDMMYYYY = dataFormatada.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    return formatDDMMYYYY;
  };

  const createDateObject = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return new Date(year, month - 1, day); //
  };

  const deleteEvent = async (id, imageUrl) => {
    setOpenConfirmDeleteModal(null);
    const storage = getStorage();

    const postDoc = doc(db, "events", id);
    const desertRef = ref(storage, `${imageUrl}`);

    await deleteDoc(postDoc)
      .then(() => {
        deleteObject(desertRef);
        setActionStatus("Conteúdo excluído com sucesso!");
        setActionStatusImage(SucessDeleteImage);
        closeActionStatusModal();
        getEvents();
      })
      .catch((error) => {
        setActionStatus(error.message);
        setActionStatusImage(ErrorDeleteImage);
        closeActionStatusModal();
      });
  };

  const updateEvent = async (eventId, event) => {
    const eventRef = doc(db, "events", eventId);

    event.preventDefault();

    const titleInput = document.getElementById("newTitle");
    const timeInput = document.getElementById("newHour");
    const localInput = document.getElementById("newLocal");

    if (
      titleInput.value == "" ||
      timeInput.value == "" ||
      localInput.value == ""
    ) {
      return;
    } else if (
      titleInput.value == initialTitle &&
      timeInput.value == initialHour &&
      localInput.value == initialLocal &&
      newData == "" &&
      newText == ""
    ) {
      setStatusMessage("Nenhuma alteração");
      hanleCloseStatusMessage();
      return;
    }

    if (newData == "" && newText == "") {
      await updateDoc(eventRef, {
        title: titleInput.value,
        hour: timeInput.value,
        local: localInput.value,
      });
      getEvents();
    } else if (newText != "" && newData != "") {
      await updateDoc(eventRef, {
        title: titleInput.value,
        hour: timeInput.value,
        data: Timestamp.fromDate(new Date(newData)),
        local: localInput.value,
        text: newText,
      });
      getEvents();
    } else if (newText != "") {
      await updateDoc(eventRef, {
        title: titleInput.value,
        hour: timeInput.value,
        local: localInput.value,
        text: newText,
      });
      getEvents();
    } else if (newData != "") {
      await updateDoc(eventRef, {
        title: titleInput.value,
        hour: timeInput.value,
        local: localInput.value,
        data: Timestamp.fromDate(new Date(newData)),
      });
      getEvents();
    } else {
      await updateDoc(eventRef, {
        title: titleInput.value,
        hour: timeInput.value,
        local: localInput.value,
        data: Timestamp.fromDate(new Date(newData)),
      });
      getEvents();
    }
  };

  const RichTextElement = (text) => {
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
        defaultValue={text}
        onChange={setNewText}
        modules={textEditorModules}
        className="textEditor"
        id="newText"
      />
    );
  };

  const closeActionStatusModal = () => {
    const timeToResetErro = setInterval(() => {
      setActionStatus(null);
      clearInterval(timeToResetErro);
    }, 3000);
  };

  const openConfirmDelete = (eventId, eventImageUrl) => {
    setOpenConfirmDeleteModal(true);
    setEventId(eventId);
    setEventImage(eventImageUrl);
  };

  const instantCloseActionStatusModal = () => {
    setActionStatus(null);
  };

  const handleOpenPopup = (index) => {
    setOpenPopupIndex(index);
  };

  const handleClosePopup = () => {
    setOpenPopupIndex(null);
  };

  const hanleCloseStatusMessage = () => {
    const timeToClose = setInterval(() => {
      setStatusMessage(null);
      clearInterval(timeToClose);
    }, 3000);
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
      {actionStatus != null && actionStatusImage != null && (
        <ActionStatusContainer>
          <button
            className="closeCreatedPostModal"
            onClick={() => instantCloseActionStatusModal()}
          >
            {" "}
            <img
              src={Icons.CloseIcon}
              alt="Ícone para fechar o aviso de postagem criada"
            />{" "}
          </button>
          <img src={actionStatusImage} alt="" className="actionStatusImage" />
          <span>{actionStatus}</span>
        </ActionStatusContainer>
      )}
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
              <h2 className="featureTitle">Gerenciar de Eventos</h2>
            </div>
          </div>
        </FeatureHeaderContainer>
        <NoticeOldPostData>
          <span>
            {" "}
            <img src={Icons.InfoCicleIcon} alt="" /> Eventos com mais de 5 meses
            serão excluídos{" "}
          </span>
        </NoticeOldPostData>
        <CardsContainer>
          {events.length == 0 && (
            <EmptyEvents>
              <h2 className="emptyEventsTitle">
                Você ainda não publicou nenhum evento ...
              </h2>
              <div className="emptyImageContainer">
                <img
                  className="emptyImage"
                  src={NothingPosted}
                  alt="Caixa vazia referente a nada postado"
                />
                <Link to="/eventcreator" className="linkToCreatePost">
                  Criar evento
                </Link>
              </div>
            </EmptyEvents>
          )}
          {events.map((event, index) => {
            return (
              <div key={index}>
                {upenConfirmDeletModal && (
                  <ConfirmDeleteModal>
                    <button
                      className="closeModalBtn"
                      onClick={() => setOpenConfirmDeleteModal(false)}
                    >
                      <img src={Icons.CloseIcon} alt="" />
                    </button>
                    <span>Deseja excluir este evento?</span>
                    <div className="buttons">
                      <button
                        className="confirmBtn"
                        onClick={() => deleteEvent(eventId, eventImage)}
                      >
                        confirmar
                      </button>
                      <button
                        className="cancelBtn"
                        onClick={() => setOpenConfirmDeleteModal(false)}
                      >
                        cancelar
                      </button>
                    </div>
                  </ConfirmDeleteModal>
                )}
                <div className="card">
                  {openPopupIndex === index && (
                    <PopUpUpdateContainer className="fullPopUp">
                      <h2 className="popUpUpdateTitle">Editando Postagem</h2>
                      <button
                        onClick={handleClosePopup}
                        className="closePopUpBtn"
                      >
                        <img
                          src={Icons.ArrowLeftIcon}
                          alt="Icone para fechar conteúdo"
                          title="Fechar"
                        />
                        Voltar
                      </button>
                      <form
                        className="editInputs"
                        onSubmit={(e) => updateEvent(event.id, e)}
                      >
                        <label htmlFor="newTitle">Título</label>
                        <input
                          type="text"
                          id="newTitle"
                          required
                          defaultValue={event.title}
                        />
                        <label htmlFor="newText">Sobre o evento</label>
                        <TextWriterContainer>
                          {RichTextElement(event.text)}
                        </TextWriterContainer>
                        <label htmlFor="data">Data</label>
                        <div className="dateUpdateWarnContainer">
                          <span className="dateUpdateWarn">
                            {" "}
                            <img
                              src={Icons.AlertIconRed}
                              alt="Exclamação de alerta"
                            />
                            Preencha apenas em caso de alteração
                          </span>
                        </div>
                        <input
                          className="dateInput"
                          type="date"
                          name="data"
                          id="data"
                          value={newData}
                          onChange={(event) => setNewData(event.target.value)}
                        />
                        <label htmlFor="timeInput">Horário</label>
                        <input
                          type="time"
                          id="newHour"
                          className="grayInput"
                          name="hora"
                          required
                          defaultValue={event.hour}
                        />
                        <label htmlFor="newLocal">Local</label>
                        <input
                          type="text"
                          id="newLocal"
                          className="grayInput"
                          name="local"
                          defaultValue={event.local}
                        />
                        <button type="submit" className="confirmEditBtn">
                          Atualizar
                        </button>
                      </form>
                      <div className="statusMessageContainer">
                        {statusMessage != null && (
                          <span className="statusMessage">
                            {" "}
                            <img src={Icons.AlertIconRed} alt="" />{" "}
                            {statusMessage}
                          </span>
                        )}
                      </div>
                    </PopUpUpdateContainer>
                  )}
                  <div className="cardHeader">
                    <h2 className="cardTitle">{event.title}</h2>
                  </div>
                  <div className="cardHeaderContainer">
                    <img className="cardImage" src={event.image} alt="" />
                    <div className="managementOptions">
                      <button
                        className="deleteEventBtn"
                        onClick={() => openConfirmDelete(event.id, event.image)}
                      >
                        <img
                          src={Icons.DeleteIconRed}
                          alt="Icone de deletar postagem"
                        />
                      </button>
                      <button
                        className="updateEventBtn"
                        onClick={() => handleOpenPopup(index)}
                      >
                        <img
                          src={Icons.UpdateIcon}
                          alt="Icone de deletar postagem"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="cardBotton">
                    <span className="cardData">
                      {" "}
                      <img
                        src={Icons.CalendarIcon}
                        alt="Ícone Calendário"
                      />{" "}
                      {formateDate(event.data)}
                    </span>
                    <span className="cardData">
                      {" "}
                      <img src={Icons.ClockIcon} alt="Ícone relógio" />{" "}
                      {event.hour}
                    </span>
                    <span className="cardData cardLocal">
                      {" "}
                      <img
                        src={Icons.MapIconDark}
                        alt="Ícone Mapa Local"
                      />{" "}
                      {event.local}
                    </span>
                  </div>
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

export default EventManager;
