import UserContext from '../contexts/UserContext';
import { useContext } from 'react';
import {
  Topbar,
  UserInfo,
  LogoName,
  ProfileImage,
} from '../styles/globalStyles';

export default function Top() {
  const user = useContext(UserContext);
  return (
    <Topbar>
      <LogoName>TrackIt</LogoName>
      <UserInfo>
        <h1>{user.name}</h1>
        <ProfileImage>
          <img src={user.image} alt='profile' />
        </ProfileImage>
      </UserInfo>
    </Topbar>
  );
}
