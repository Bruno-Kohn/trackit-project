import "../styles/reset.css";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

export default function Today() {
  return (
    <Container>
      <Top>
        <LogoName>TrackIt</LogoName>
        <ProfileImage></ProfileImage>
      </Top>
      <Content>
        <TopContent>
          <Date>Segunda, 17/05</Date>
          <HabitsDone>33% dos hábitos concluidos</HabitsDone>
        </TopContent>
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
      </Content>
      <Bottom>
        <HabitsLink>Hábitos</HabitsLink>
        <CircularProgressBar>Hoje</CircularProgressBar>
        <RecordsLink>Histórico</RecordsLink>
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
`;

const Content = styled.div`
  width: 95%;
  height: auto;
  margin: 20px auto 0 auto;
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
