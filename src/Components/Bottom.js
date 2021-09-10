import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import styled from "styled-components";

export default function Bottom() {
  return (
    <BottomBar>
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
    </BottomBar>
  );
}

//--------- Styled-Components----------

const BottomBar = styled.div`
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
