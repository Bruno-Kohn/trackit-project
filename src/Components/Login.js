import "../styles/reset.css";
import styled from "styled-components";
import logo from "../images/trackit-logo.png";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login({setUser}) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    const body = {
      email,
      password,
    };

    const req = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      body
    );

    req.then((resp) => {
      console.log(resp.data);
      setUser(resp.data);
      history.push("/hoje");
    });
    req.catch((error) => {
      console.log(error);
      alert("Dado(s) preenchido(s) de forma incorreta. Tente novamente.");
    });
  }

  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <Inputs>
        <Email
          placeholder="e-mail"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Email>
        <Password
          placeholder="senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Password>
        <LoginButton onClick={login}>Entrar</LoginButton>
        <Link to="/cadastro">
          <ToCreateAccount>Não tem uma conta? Cadastre-se!</ToCreateAccount>
        </Link>
      </Inputs>
    </Container>
  );
}

//--------- Styled-Components----------

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Logo = styled.div`
  padding-top: 15vh;
  display: flex;
  justify-content: center;
`;

const Inputs = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10vw 0 10vw;
`;

const Email = styled.input`
  margin-top: 2vh;
  width: 100%;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  color: #dbdbdb;
  font-size: 18px;
  font-family: "Lexend Deca", sans-serif;
  padding-left: 12px;
`;

const Password = styled.input`
  margin-top: 5px;
  width: 100%;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  color: #dbdbdb;
  font-size: 18px;
  font-family: "Lexend Deca", sans-serif;
  padding-left: 12px;
`;

const LoginButton = styled.button`
  margin-top: 5px;
  width: 100%;
  height: 45px;
  background: #52b6ff;
  border-radius: 4.63636px;
  border: none;
  color: #fff;
  font-family: "Lexend Deca", sans-serif;
  font-size: 21px;
`;

const ToCreateAccount = styled.div`
  margin-top: 25px;
  color: #52b6ff;
  font-family: "Lexend Deca", sans-serif;
  font-size: 14px;
`;
