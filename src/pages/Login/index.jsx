import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ArrowLeftIcon from "../../assets/images/svg/icons/arrow-left-icon.svg";
import LoginIcon from "../../assets/images/svg/icons/login-icon-light.svg";
import Logo from "../../assets/images/newsletter-logo.png";

import { LoginContainer, Header, FormContainer } from "./styles";

import { auth } from "../../services/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aothUser, setAothUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAothUser(user);
        navigate("/");
      } else {
        console.log("MACACO não logou: ");
        setAothUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const login = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        if (userCredentials) {
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <LoginContainer>
      <Header>
        <Link to={"/"} className="homeLink">
          <img src={ArrowLeftIcon} alt="" /> Início{" "}
        </Link>
      </Header>

      <FormContainer>
        <img src={Logo} alt="" className="logo" />
        <span>Por favor , faça login para continuar</span>
        <form onSubmit={login}>
          <div className="inputContainer">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="youremail@mail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              required
              id="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="button" onClick={login}>
            Entrar <img src={LoginIcon} alt="" />
          </button>
        </form>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
