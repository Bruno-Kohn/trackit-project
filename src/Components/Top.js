import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

export default function Top() {
  const user = useContext(UserContext);
  return (
    <Topbar>
      <LogoName>TrackIt</LogoName>
      <ProfileImage>
        <img src={user.image} alt="" />
      </ProfileImage>
    </Topbar>
  );
}

//--------- Styled-Components----------

const Topbar = styled.div`
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
