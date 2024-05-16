import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

import Icons from "../../../assets/images/svg/icons/iconsExport";
import Logo from "../../../assets/images/newsletter-logo.png";

import {
  LoginContainer,
  BgCover,
  Header,
  LogoContainer,
  LoginFormContainer,
  FormContainer,
} from "./styles";

import { auth } from "../../../services/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const [showHidePasswordIcon, setShowHidePasswordIcon] = useState(
    Icons.OpenEye
  );

  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      } else {
        resetLoginError();
      }
    });

    return () => {
      listen();
    };
  }, []);

  const login = (event) => {
    if (email == "" || password == "") {
      setLoginError("Preencha todos os campos");
      resetLoginError();
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
        if (email != "" && password != "") {
          setLoginError("email e/ou senha incorreto(s)");
          resetLoginError();
        }
      });
  };

  const resetLoginError = () => {
    const restartFormTime = setInterval(() => {
      setLoginError(null);
      clearInterval(restartFormTime);
    }, 4000);
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

  useEffect(() => {
    gsap.fromTo(
      "form",
      {
        opacity: 0, // Start with opacity 0 (hidden)
        y: 100, // Start with element 100px off-screen (top)
      },
      {
        opacity: 1, // Animate to opacity 1 (visible)
        y: 0, // Animate to y position 0 (on-screen)
        duration: 1, // Duration of the animation in seconds
        ease: "Power4.easeInOut", // Easing function for a smooth transition
      }
    );
  }, []);

  return (
    <LoginContainer>
      <BgCover>
        <Header>
          <Link to={"/"} className="homeLink">
            <img src={Icons.ArrowLeftIcon} alt="" /> Voltar ao início{" "}
          </Link>
        </Header>

        <LogoContainer>
          <div className="logoContainerText">
            <img src={Logo} alt="" className="logo" />
          </div>
          <div className="aboutThisProjectContainer">
            <span>2024 João Marcos Melo ©</span>
          </div>
        </LogoContainer>
        <LoginFormContainer id="form">
          <FormContainer>
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
              <div className="formStatus">
                {loginError != null && (
                  <>
                    <img src={Icons.AlertIconRed} alt="" />
                    <span>{loginError}</span>
                  </>
                )}
              </div>
            </form>
          </FormContainer>
        </LoginFormContainer>
      </BgCover>
    </LoginContainer>
  );
};

export default Login;
