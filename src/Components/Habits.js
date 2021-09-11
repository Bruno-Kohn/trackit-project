import "../styles/reset.css";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import "react-circular-progressbar/dist/styles.css";
import Top from "./Top";
import Bottom from "./Bottom";
import { useState, useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import Days from "./Days";
import axios from "axios";

export default function Habits() {
  const [clicked, setClicked] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [typedHabit, setTypedHabit] = useState("");
  const [habitsList, setHabitsList] = useState([]);
  const user = useContext(UserContext);
  const day = ["D", "S", "T", "Q", "Q", "S", "S"];

  function toShowAddHabitsBox() {
    setClicked(true);
  }

  function toCreateHabit() {
    console.log("enviando");

    const body = {
      name: typedHabit,
      days: selectedDays,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const req = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      body,
      config
    );

    req.then((resp) => {
      console.log("sucesso!");
      setTypedHabit("");
      setClicked(false);
    });

    req.catch((error) => {
      console.log(error);
      alert("Favor, tente novamente!");
    });
  }

  //listar habitos useEffect https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const req = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      config
    );

    req.then((resp) => {
      console.log(resp.data);
      setHabitsList(resp.data);
    });

    req.catch((error) => {
      console.log(error);
      alert("Favor, tente novamente!");
    });
    // eslint-disable-next-line
  }, []);

  function toCancelHabit() {
    setSelectedDays([]);
    setClicked(false);
  }

  function toDeleteHabit(index) {
    alert(index);
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const req = axios.delete(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${index}`,
      config
    );

    req.then((resp) => {
      console.log("Deletado com sucesso");
    });

    req.catch((error) => {
      console.log(error);
      alert("Erro ao deletar");
    });
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
          <HabitName
            placeholder="nome do hábito"
            value={typedHabit}
            onChange={(e) => setTypedHabit(e.target.value)}
          ></HabitName>
          <Days selectedDays={selectedDays} setSelectedDays={setSelectedDays} />
          <CancelSaveDiv>
            <Cancel onClick={toCancelHabit}>Cancelar</Cancel>
            <Save onClick={toCreateHabit}>Salvar</Save>
          </CancelSaveDiv>
        </AddHabitsBox>
        {habitsList.length === 0 ? (
          <NoHabitsAdded>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </NoHabitsAdded>
        ) : (
          habitsList.map((habit) => (
            <MyHabit>
              <MyHabitTop>
                <HabitTitle>{habit.name}</HabitTitle>
                <Trash>
                  <FaTrashAlt onClick={() => toDeleteHabit(habit.id)}/>
                </Trash>
              </MyHabitTop>
              <MyHabitDays>
                {day.map((i, index) => <Day mainClass={habit.days.includes(index)}>{i}</Day>)}
              </MyHabitDays>
            </MyHabit>
          ))
        )}
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
  //display: ${(props) => (props.display ? "inherit" : "none")};
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
