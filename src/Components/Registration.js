import "../styles/reset.css";
import styled from "styled-components";
import logo from "../images/trackit-logo.png";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Registration() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [clicked, setClicked] = useState(false);

  function registerUser() {
    setClicked(true);
    const body = {
      email,
      name,
      image,
      password,
    };

    const req = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      body
    );

    req.then((resp) => history.push("/"));
    req.catch((error) => {
      console.log(error);
      setEmail("");
      setPassword("");
      setName("");
      setImage("");
      setClicked(false);
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
          disabled={clicked}
        ></Email>
        <Password
          placeholder="senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={clicked}
        ></Password>
        <Name
          placeholder="nome"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={clicked}
        ></Name>
        <Photo
          placeholder="foto"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          disabled={clicked}
        ></Photo>
        <RegisterButton onClick={registerUser} disabled={clicked}>{clicked === false ? (
            "Cadastrar"
          ) : (
            <Loader type="ThreeDots" color="#FFFFFF" height={45} width={60} />
          )}</RegisterButton>
        <Link to="/">
          <ToLogin>Já tem uma conta? Faça login!</ToLogin>
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
  background: ${props => props.disabled ? "#f2f2f2" : "#ffffff"};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  color: #515151;
  font-size: 18px;
  font-family: "Lexend Deca", sans-serif;
  padding-left: 12px;
  ::placeholder {
    color: #666666;
  }
`;

const Password = styled.input`
  margin-top: 5px;
  width: 100%;
  height: 45px;
  background: ${props => props.disabled ? "#f2f2f2" : "#ffffff"};
  color: #515151;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-size: 18px;
  font-family: "Lexend Deca", sans-serif;
  padding-left: 12px;
  ::placeholder {
    color: #666666;
  }
`;

const Name = styled.input`
  margin-top: 5px;
  width: 100%;
  height: 45px;
  background: ${props => props.disabled ? "#f2f2f2" : "#ffffff"};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-size: 18px;
  color: #515151;
  font-family: "Lexend Deca", sans-serif;
  padding-left: 12px;
  ::placeholder {
    color: #666666;
  }
`;

const Photo = styled.input`
  margin-top: 5px;
  width: 100%;
  height: 45px;
  background: ${props => props.disabled ? "#f2f2f2" : "#ffffff"};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  color: #515151;
  font-size: 18px;
  font-family: "Lexend Deca", sans-serif;
  padding-left: 12px;
  ::placeholder {
    color: #666666;
  }
`;

const RegisterButton = styled.button`
  margin-top: 5px;
  width: 100%;
  height: 45px;
  background: #52b6ff;
  border-radius: 4.63636px;
  opacity: ${props => props.disabled ? 0.7 : 1};
  border: none;
  color: #fff;
  font-family: "Lexend Deca", sans-serif;
  font-size: 21px;
`;

const ToLogin = styled.div`
  margin-top: 25px;
  color: #52b6ff;
  font-family: "Lexend Deca", sans-serif;
  font-size: 14px;
`;
