import "../styles/reset.css";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import "react-circular-progressbar/dist/styles.css";
import Top from "./Top";
import Bottom from "./Bottom";
import { useState } from "react";
import Days from "./Days";

export default function Habits() {
  const [clicked, setClicked] = useState(false);

  function toShowAddHabitsBox() {
    setClicked(true);
  }

  function toCreateHabit() {}

  function toCancelHabit() {
    setClicked(false);
  }

  return (
    <Container>
      <Top />
      <Content>
        <MyHabits>
          <MyHabitsText>Meus hábitos</MyHabitsText>
          <AddButton onClick={toShowAddHabitsBox}>+</AddButton>
        </MyHabits>
        <AddHabitsBox display={clicked}>
          <HabitName placeholder="nome do hábito"></HabitName>
          <Days />
          <CancelSaveDiv>
            <Cancel onClick={toCancelHabit}>Cancelar</Cancel>
            <Save onClick={toCreateHabit}>Salvar</Save>
          </CancelSaveDiv>
        </AddHabitsBox>
        <MyHabit display={clicked}>
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
      <Bottom />
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
  display: ${(props) => (props.display ? "inherit" : "none")};
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

const Day = styled.div`
  width: 30px;
  height: 30px;
  background: ${(props) => (props.mainClass ? "#cfcfcf" : "#ffffff")};
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 5px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.mainClass ? "#fff" : "#dbdbdb")};
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
  display: ${(props) => (props.display ? "inherit" : "none")};
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
