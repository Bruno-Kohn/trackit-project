import {
  Topbar,
  UserInfo,
  LogoName,
  ProfileImage,
} from '../styles/globalStyles';

export default function Top() {
  let info;
  if (localStorage.getItem('loginUser')) {
    info = JSON.parse(localStorage.getItem('loginUser'));
  }

  return (
    <Topbar>
      <LogoName>TrackIt</LogoName>
      <UserInfo>
        <h1>{info?.name}</h1>
        <ProfileImage>
          <img src={info?.image} alt='profile' />
        </ProfileImage>
      </UserInfo>
    </Topbar>
  );
}
