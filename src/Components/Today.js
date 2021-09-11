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

  console.log(dayjs());
  console.log(dayjs().month());
  console.log(dayjs().format("DD/MM"));
  console.log(dayjs().day());

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
    });

    req.catch((error) => console.log(error));
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Top />
      <Content>
        <TopContent>
          <Date>
            {weekdayName.filter((i, index) => index === dayjs().day())},{" "}
            {dayjs().format("DD/MM")}
          </Date>
          <HabitsDone>33% dos hábitos concluidos</HabitsDone>
        </TopContent>
        {habits.map((i) => (
          <HabitsDisplay>
            <HabitsInfos>
              <HabitsName>Ler 1 capitulo de livro</HabitsName>
              <HabitsSequence>Sequencia atual: 4 dias</HabitsSequence>
              <HabitsRecord>Seu recorde: 5 dias</HabitsRecord>
            </HabitsInfos>
            <HabitsButton>
              <CheckButton>
                <FaCheck />
              </CheckButton>
            </HabitsButton>
          </HabitsDisplay>
        ))}
      </Content>
      <Bottom />
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
  color: #8fc549;
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

const HabitsRecord = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  color: #666666;
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
  background-color: #8fc549;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
