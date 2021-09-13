import "../styles/reset.css";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";
import "react-circular-progressbar/dist/styles.css";
import Top from "./Top";
import Bottom from "./Bottom";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export default function Today() {
  const [habits, setHabits] = useState([]);
  const [checkButton, setCheckButton] = useState(1);
  const user = useContext(UserContext);
  const weekdayName = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const req = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );

    req.then((resp) => {
      setHabits(resp.data);
      console.log(resp.data);
    });

    req.catch((error) => console.log(error));
    // eslint-disable-next-line
  }, [checkButton]);

  const doneQtd = habits.filter((i) => i.done === true).length;
  const habitsPercentage = (doneQtd / habits.length) * 100;
  console.log(habits, "lista");

  function toCheckUncheckHabit(index, isDone) {
    //alert(index);
    //alert(isDone);
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    if (!isDone) {
      const req = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${index}/check`,
        {},
        config
      );
      req.then((resp) => {
        console.log(resp);
        const clicked = habits.filter((i) => i.id === index);
        console.log(clicked, "elemento clicado");
        setCheckButton(checkButton + 1);
      });
      req.catch((error) => {
        console.log(error);
      });
    } else {
      const req = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${index}/uncheck`,
        {},
        config
      );
      req.then((resp) => {
        console.log(resp);
        const clicked = habits.filter((i) => i.id === index);
        console.log(clicked, "elemento clicado");
        setCheckButton(checkButton + 1);
      });
      req.catch((error) => {
        console.log(error);
      });
    }
  }
  return (
    <Container>
      <Top />
      <Content>
        <TopContent>
          <Date>
            {weekdayName.filter((i, index) => index === dayjs().day())},{" "}
            {dayjs().format("DD/MM")}
          </Date>
          <HabitsDone doneQtd={doneQtd}>
            {doneQtd === 0
              ? "Nenhum habito concluido ainda"
              : `${habitsPercentage.toFixed(0)}% dos hábitos concluidos`}
          </HabitsDone>
        </TopContent>
        {habits.map((todayHabit) => (
          <HabitsDisplay key={todayHabit.id}>
            <HabitsInfos>
              <HabitsName>{todayHabit.name}</HabitsName>
              <HabitsSequence>
                <h1>
                  Sequencia atual:{" "}
                  <Sequence sequenceNumber={todayHabit.currentSequence}>
                    {todayHabit.currentSequence} dias
                  </Sequence>
                </h1>
              </HabitsSequence>
              <HabitsRecord>
                <h1>
                  Seu recorde:{" "}
                  <Record
                    recordNumber={todayHabit.highestSequence}
                    sequenceNumber={todayHabit.currentSequence}
                  >
                    {todayHabit.highestSequence} dias
                  </Record>
                </h1>
              </HabitsRecord>
            </HabitsInfos>
            <HabitsButton>
              <CheckButton
                done={todayHabit.done}
                onClick={() =>
                  toCheckUncheckHabit(todayHabit.id, todayHabit.done)
                }
              >
                <FaCheck />
              </CheckButton>
            </HabitsButton>
          </HabitsDisplay>
        ))}
      </Content>
      <Bottom percentage={habitsPercentage.toFixed(0)} />
    </Container>
  );
}

//--------- Styled-Components----------

const Container = styled.div`
  height: calc(100vh + 120px);
  width: 100vw;
  background-color: #f2f2f2;
  padding-top: 70px;
`;

const Content = styled.div`
  width: 95%;
  height: auto;
  margin: 20px auto 0 auto;
  padding-bottom: 120px;
`;

const TopContent = styled.div`
  width: 100%;
  height: 55px;
`;

const Date = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  font-size: 23px;
  color: #126ba5;
`;

const HabitsDone = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  font-size: 18px;
  color: ${(props) => (props.doneQtd === 0 ? "#bababa" : "#8fc549")};
`;

const HabitsDisplay = styled.div`
  width: 100%;
  height: 94px;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 10px;
  display: flex;
  padding: 8px;
`;

const HabitsInfos = styled.div`
  width: 75%;
  height: 100%;
`;

const HabitsName = styled.div`
  width: 100%;
  height: 40%;
  font-size: 20px;
  display: flex;
  align-items: center;
  color: #666666;
`;

const HabitsSequence = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  color: #666666;
  font-size: 13px;
`;

const Sequence = styled.span`
  color: ${(props) => (props.sequenceNumber >= 1 ? "#8fc549" : "#bababa")};
`;

const Record = styled.span`
  color: ${(props) =>
    props.recordNumber > 0 && props.recordNumber >= props.sequenceNumber
      ? "#8fc549"
      : "#bababa"};
`;

const HabitsRecord = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.recordNumber === props.sequenceNumber ? "#666666" : "#8fc549"};
  font-size: 13px;
`;

const HabitsButton = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckButton = styled.button`
  width: 69px;
  height: 69px;
  background-color: ${(props) => (props.done ? "#8fc549" : "#e7e7e7")};
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
