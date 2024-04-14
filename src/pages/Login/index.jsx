import { useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

import ArrowLeftIcon from "../../assets/images/svg/icons/arrow-left-icon.svg";
import LoginIcon from "../../assets/images/svg/icons/login-icon-light.svg";

import Logo from "../../assets/images/newsletter-logo.png";

import { LoginContainer, Header, FormContainer } from "./styles";
import { auth } from "../../services/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate("/adminpanel");
  }

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
        <form>
          <div className="inputContainer">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="youremail@mail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="button" onClick={handleLogin}>
            Entrar <img src={LoginIcon} alt="" />
          </button>
        </form>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
