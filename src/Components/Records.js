import "../styles/reset.css";
import styled from "styled-components";

export default function Records() {
  return (
    <Container>
      <Top>
        <LogoName>TrackIt</LogoName>
        <ProfileImage></ProfileImage>
      </Top>
      <Content>
        <RouteName>Histórico</RouteName>
        <RecordsMessage>Em breve você poderá ver o histórico dos seus hábitos aqui!</RecordsMessage>
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
  height: 400px;
  margin: 20px auto 0 auto;
`;

const RouteName = styled.div`
width: 100%;
height: 40px;
font-size: 23px;
color: #126ba5;
`;

const RecordsMessage = styled.div`
width: 100%;
height: 100px;
font-size: 18px;
color: #666666;
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
