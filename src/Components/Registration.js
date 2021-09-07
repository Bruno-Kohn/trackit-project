import "../styles/reset.css";
import styled from "styled-components";
import logo from "../images/trackit-logo.png";

export default function Registration () {
    return(<Container>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <Inputs>
          <Email placeholder="e-mail" type="text"></Email>
          <Password placeholder="senha" type="password"></Password>
          <Name placeholder="nome" type="text"></Name>
          <Photo placeholder="foto" type="text"></Photo>
          <RegisterButton>Cadastrar</RegisterButton>
          <ToLogin>Já tem uma conta? Faça login!</ToLogin>
        </Inputs>
      </Container>);
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

const Name = styled.input`
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

const Photo = styled.input`
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

const RegisterButton = styled.button`
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

const ToLogin = styled.div`
  margin-top: 25px;
  color: #52b6ff;
  font-family: "Lexend Deca", sans-serif;
  font-size: 14px;
`;
