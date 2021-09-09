import "../styles/reset.css";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Habits() {
  const user = useContext(UserContext);
  return (
    <Container>
      <Top>
        <LogoName>TrackIt</LogoName>
        <ProfileImage>
          <img src={user.image} alt="" />
        </ProfileImage>
      </Top>
      <Content>
        <MyHabits>
          <MyHabitsText>Meus hábitos</MyHabitsText>
          <AddButton>+</AddButton>
        </MyHabits>
        <AddHabitsBox>
          <HabitName placeholder="nome do hábito"></HabitName>
          <Days>
            <Day>D</Day>
            <Day>S</Day>
            <Day>T</Day>
            <Day>Q</Day>
            <Day>Q</Day>
            <Day>S</Day>
            <Day>S</Day>
          </Days>
          <CancelSaveDiv>
            <Cancel>Cancelar</Cancel>
            <Save>Salvar</Save>
          </CancelSaveDiv>
        </AddHabitsBox>
        <MyHabit>
          <MyHabitTop>
            <HabitTitle>Ler 1 capitulo de livro</HabitTitle>
            <Trash>
              <FaTrashAlt />
            </Trash>
          </MyHabitTop>
          <MyHabitDays>
            <Day>D</Day>
            <Day>S</Day>
            <Day>T</Day>
            <Day>Q</Day>
            <Day>Q</Day>
            <Day>S</Day>
            <Day>S</Day>
          </MyHabitDays>
        </MyHabit>
        <NoHabitsAdded>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </NoHabitsAdded>
      </Content>
      <Bottom>
        <Link to="/habitos">
          <HabitsLink>Hábitos</HabitsLink>
        </Link>
        <Link to="/hoje">
          <CircularProgressBar>
            <CircularProgressbar value="35" text="Hoje" />
          </CircularProgressBar>
        </Link>
        <Link to="/historico">
          <RecordsLink>Histórico</RecordsLink>
        </Link>
      </Bottom>
    </Container>
  );
}

//--------- Styled-Components----------

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f2f2f2;
  padding-top: 70px;
`;

const Top = styled.div`
  height: 70px;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const LogoName = styled.div`
  font-family: "Playball", cursive;
  font-size: 39px;
  color: #fff;
`;

const ProfileImage = styled.div`
  background-color: red;
  border-radius: 50px;
  width: 51px;
  height: 51px;

  img {
    border-radius: 50px;
    width: 51px;
    height: 51px;
  }
`;

const Content = styled.div`
  height: auto;
  width: 90%;
  margin: 20px auto 0 auto;
`;

const MyHabits = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MyHabitsText = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  font-family: Lexend Deca;
  font-size: 23px;
  line-height: 29px;
  color: #126ba5;
`;

const AddButton = styled.button`
  width: 40px;
  height: 35px;
  background-color: #52b6ff;
  border-radius: 4.63636px;
  font-style: Lexend Deca;
  font-size: 27px;
  color: #fff;
  border: none;
`;

const AddHabitsBox = styled.div`
  width: 100%;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  padding: 15px;
  margin-top: 20px;
`;

const HabitName = styled.input`
  height: 45px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  width: 100%;
  padding-left: 10px;
  font-family: Lexend Deca;
  font-size: 20px;

  ::placeholder {
    color: #dbdbdb;
  }
`;

const Days = styled.div`
  width: 100%;
  height: auto;
  margin-top: 5px;
  display: flex;
`;

const Day = styled.div`
  width: 30px;
  height: 30px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 5px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dbdbdb;
  font-size: 20px;
`;

const CancelSaveDiv = styled.div`
  width: 100%;
  height: auto;
  margin-top: 35px;
  display: flex;
  justify-content: flex-end;
`;

const Cancel = styled.button`
  width: 84px;
  height: 35px;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  color: #52b6ff;
  font-family: Lexend Deca;
  font-size: 16px;
  margin-right: 10px;
`;

const Save = styled.button`
  width: 84px;
  height: 35px;
  background-color: #52b6ff;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-family: Lexend Deca;
  font-size: 16px;
`;

const MyHabit = styled.div`
  height: 91px;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  padding: 12px;
  margin-top: 8px;
`;

const MyHabitTop = styled.div`
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HabitTitle = styled.div`
  color: #666666;
  font-size: 20px;
`;

const Trash = styled.div`
  color: #666666;
  font-size: 20px;
`;

const MyHabitDays = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
`;

const NoHabitsAdded = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;
  color: #666666;
  font-size: 18px;
`;

const Bottom = styled.div`
  width: 100%;
  height: 70px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 45px;
`;

const HabitsLink = styled.div`
  color: #52b6ff;
  font-size: 18px;
`;

const CircularProgressBar = styled.div`
  background-color: #52b6ff;
  width: 91px;
  height: 91px;
  border-radius: 51px;
  font-size: 18px;
  position: fixed;
  left: calc((100vw / 2) - (91px / 2));
  bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const RecordsLink = styled.div`
  color: #52b6ff;
  font-size: 18px;
`;
