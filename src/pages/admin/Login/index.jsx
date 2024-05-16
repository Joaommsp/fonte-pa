import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Icons from "../../../assets/images/svg/icons/iconsExport";
import ArrowLeftIcon from "../../../assets/images/svg/icons/arrow-left-icon-dark.svg";
import LoginIcon from "../../../assets/images/svg/icons/login-icon-light.svg";
import Logo from "../../../assets/images/newsletter-logo.png";
import AlertIcon from "../../../assets/images/svg/icons/alert-icon-red.svg";

import {
  LoginContainer,
  BgCover,
  Header,
  LogoContainer,
  FormContainer,
} from "./styles";

import { auth } from "../../../services/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aothUser, setAothUser] = useState("");
  const [filled, setFilled] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const [showHidePasswordIcon, setShowHidePasswordIcon] = useState(
    Icons.OpenEye
  );

  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAothUser(user);
        navigate("/dashboard");
      } else {
        setAothUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const login = (event) => {
    if (email == "" || password == "") {
      setFilled(false);

      const restartFormTime = setInterval(() => {
        setFilled(true);
        clearInterval(restartFormTime);
      }, 3000);
    }

    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        if (userCredentials) {
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.log(error);
        if (email !== "" && password !== "") {
          setErrorMessage(true);

          const resetErrorMessage = setInterval(() => {
            setErrorMessage(false);
            clearInterval(resetErrorMessage);
          }, 3000);
        }
      });
  };

  const showHidePassword = () => {
    const passwordInput = document.getElementById("passwordInput"); // Select the password input element

    if (passwordInput) {
      // Check if the element exists
      if (passwordInput.type === "password") {
        setShowHidePasswordIcon(Icons.ClosedEye);
        passwordInput.type = "text";
      } else {
        setShowHidePasswordIcon(Icons.OpenEye);
        passwordInput.type = "password";
      }
    } else {
      console.error("Password input element not found!"); // Handle potential error
    }
  };

  return (
    <LoginContainer>
      <BgCover>
        <Header>
          <Link to={"/"} className="homeLink">
            <img src={Icons.ArrowLeftIcon} alt="" /> Voltar ao início{" "}
          </Link>
        </Header>

        <LogoContainer></LogoContainer>
        <FormContainer>
          {/* <img src={Logo} alt="" className="logo" /> */}
          <h2 className="loginPageTitle">Fazer login</h2>
          <form onSubmit={login}>
            <div className="inputContainer">
              <label htmlFor="email">Endereço de email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="inputContainer">
              <label htmlFor="password">Senha</label>
              <div className="inputPasswordContainer">
                <input
                  id="passwordInput"
                  type="password"
                  name="password"
                  required
                  placeholder="********"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="togglePasswordButton"
                  type="button"
                  onClick={(e) => showHidePassword(e.target)}
                >
                  <img src={showHidePasswordIcon} alt="" />
                </button>
              </div>
            </div>

            <div className="loginButtonContainer">
              <button className="loginButton" onClick={login}>
                Continuar
              </button>
            </div>
            <p className="formStatus">
              {!filled && (
                <span>
                  {" "}
                  Preencha todos os campos
                  <img src={AlertIcon} alt="" />
                </span>
              )}
            </p>
            <p className="formStatus">
              {errorMessage && (
                <span>
                  {" "}
                  E-mail e/ou senha incorretos
                  <img src={AlertIcon} alt="" />
                </span>
              )}
            </p>
          </form>
        </FormContainer>
      </BgCover>
    </LoginContainer>
  );
};

export default Login;
