import styled from 'styled-components';

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

const DayWeek = styled.div`
  width: 30px;
  height: 30px;
  background: ${(props) => (props.mainClass ? '#cfcfcf' : '#ffffff')};
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 5px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.mainClass ? '#fff' : '#dbdbdb')};
  font-size: 20px;
`;

const DaysWeek = styled.div`
  width: 100%;
  height: auto;
  margin-top: 5px;
  display: flex;
`;

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
  display: ${(props) => (props.display ? 'inherit' : 'none')};
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
  background: ${(props) => (props.mainClass ? '#cfcfcf' : '#ffffff')};
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 5px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.mainClass ? '#fff' : '#dbdbdb')};
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
  //display: ${(props) => (props.display ? 'inherit' : 'none')};
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

const ContainerLogin = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Logo = styled.div`
  padding-top: 15vh;
  display: flex;
  justify-content: center;
`;

const Inputs = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10vw 0 10vw;
`;

const InputForm = styled.input`
  margin-top: 5px;
  width: 100%;
  height: 45px;
  background: ${(props) => (props.disabled ? '#f2f2f2' : '#ffffff')};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  color: #515151;
  font-size: 18px;
  font-family: 'Lexend Deca', sans-serif;
  padding-left: 12px;
  ::placeholder {
    color: #666666;
  }
`;

const LoginButton = styled.button`
  margin-top: 5px;
  width: 100%;
  height: 45px;
  background: #52b6ff;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  border-radius: 4.63636px;
  border: none;
  color: #fff;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 21px;
  cursor: pointer;
`;

const ToCreateAccount = styled.div`
  margin-top: 25px;
  color: #52b6ff;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 14px;
`;

const ContentRecords = styled.div`
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

const ContainerToday = styled.div`
  height: calc(100vh + 120px);
  width: 100vw;
  background-color: #f2f2f2;
  padding-top: 70px;
`;

const ContentToday = styled.div`
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
  color: ${(props) => (props.doneQtd === 0 ? '#bababa' : '#8fc549')};
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
  color: ${(props) => (props.sequenceNumber >= 1 ? '#8fc549' : '#bababa')};
`;

const Record = styled.span`
  color: ${(props) =>
    props.recordNumber > 0 && props.recordNumber >= props.sequenceNumber
      ? '#8fc549'
      : '#bababa'};
`;

const HabitsRecord = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.recordNumber === props.sequenceNumber ? '#666666' : '#8fc549'};
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
  background-color: ${(props) => (props.done ? '#8fc549' : '#e7e7e7')};
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  width: 120px;
  justify-content: space-between;

  h1 {
    color: #fff;
    font-size: 20px;
    font-family: 'Lexend Deca', sans-serif;
  }
`;

const LogoName = styled.div`
  font-family: 'Playball', cursive;
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

export {
  BottomBar,
  HabitsLink,
  CircularProgressBar,
  RecordsLink,
  DayWeek,
  DaysWeek,
  NoHabitsAdded,
  MyHabitDays,
  Trash,
  HabitTitle,
  MyHabitTop,
  MyHabit,
  Save,
  Cancel,
  CancelSaveDiv,
  Day,
  HabitName,
  AddHabitsBox,
  MyHabitsText,
  MyHabits,
  Content,
  Container,
  AddButton,
  ContainerLogin,
  Logo,
  Inputs,
  InputForm,
  LoginButton,
  ToCreateAccount,
  ContentRecords,
  RouteName,
  RecordsMessage,
  ContainerToday,
  HabitsButton,
  HabitsRecord,
  Record,
  Sequence,
  HabitsSequence,
  HabitsName,
  HabitsInfos,
  HabitsDisplay,
  HabitsDone,
  Date,
  TopContent,
  ContentToday,
  CheckButton,
  Topbar,
  UserInfo,
  ProfileImage,
  LogoName,
};
