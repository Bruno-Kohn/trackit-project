import "../styles/reset.css";
import styled from "styled-components";
import "react-circular-progressbar/dist/styles.css";
import Top from "./Top";
import Bottom from "./Bottom";

export default function Records() {
  return (
    <Container>
      <Top />
      <Content>
        <RouteName>Histórico</RouteName>
        <RecordsMessage>
          Em breve você poderá ver o histórico dos seus hábitos aqui!
        </RecordsMessage>
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
