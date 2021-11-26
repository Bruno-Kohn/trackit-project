import '../styles/reset.css';
import { FaTrashAlt } from 'react-icons/fa';
import Top from './Top';
import Bottom from './Bottom';
import { useState, useContext, useEffect } from 'react';
import Days from './Days';
import PercentageContext from '../contexts/PercentageContext';
import { useHistory } from 'react-router-dom';
import UserContext from '../contexts/UserContext.js';
import {
  createHabitReq,
  habitsListReq,
  deleteHabitReq,
  todaysListReq,
} from '../services/api.service';
import {
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
  AddButton,
  MyHabitsText,
  MyHabits,
  Content,
  Container,
} from '../styles/globalStyles.js';

export default function Habits() {
  const [clicked, setClicked] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [typedHabit, setTypedHabit] = useState('');
  const [habitsList, setHabitsList] = useState([]);
  const day = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  const { percentage, setHabits, habits, setPercentage } =
    useContext(PercentageContext);
  const history = useHistory();
  const { userData } = useContext(UserContext);

  const doneQtd = habits.filter((i) => i.done === true).length;
  const habitsPercentage = (doneQtd / habits.length) * 100;
  setPercentage(habitsPercentage);

  if (!localStorage.getItem('loginUser')) {
    history.push('/');
  }

  useEffect(() => {
    habitsListReq(userData.token)
      .then((resp) => {
        setHabitsList(resp.data);
        setHabits([
          ...habits,
          resp.data.filter((i) =>
            i.days.some((day) => day === new Date(Date.now()).getDay())
          ),
        ]);
      })
      .catch((error) => {
        console.log(error);
        alert('Favor, tente novamente!');
      });
    // eslint-disable-next-line
  }, [habitsList.length]);

  useEffect(() => {
    todaysListReq(userData.token)
      .then((resp) => {
        setHabits(resp.data);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, [habits.length]);

  function toShowAddHabitsBox() {
    setClicked(true);
  }

  function toCreateHabit() {
    const body = {
      name: typedHabit,
      days: selectedDays,
    };
    createHabitReq(body, userData.token)
      .then((resp) => {
        setTypedHabit('');
        setClicked(false);
        setHabitsList([...habitsList, resp.data]);
        setSelectedDays([]);
      })
      .catch((error) => {
        alert('Favor, tente novamente!');
      });
  }

  function toCancelHabit() {
    setSelectedDays([]);
    setClicked(false);
  }

  function toDeleteHabit(index) {
    let confirmation = window.confirm('Deseja deletar esse hábito?');
    if (confirmation) {
      deleteHabitReq(index, userData.token)
        .then((resp) => {
          const newListOfHabits = habitsList.filter((i) => index !== i.id);
          setHabitsList(newListOfHabits);
        })
        .catch((error) => {
          alert('Erro ao deletar');
        });
    }
  }

  return (
    <Container>
      <Top />
      <Content>
        <MyHabits>
          <MyHabitsText>Meus hábitos</MyHabitsText>
          <AddButton onClick={toShowAddHabitsBox}>+</AddButton>
        </MyHabits>
        <AddHabitsBox display={clicked}>
          <HabitName
            placeholder='nome do hábito'
            value={typedHabit}
            onChange={(e) => setTypedHabit(e.target.value)}
          ></HabitName>
          <Days selectedDays={selectedDays} setSelectedDays={setSelectedDays} />
          <CancelSaveDiv>
            <Cancel onClick={toCancelHabit}>Cancelar</Cancel>
            <Save onClick={toCreateHabit}>Salvar</Save>
          </CancelSaveDiv>
        </AddHabitsBox>
        {habitsList.length === 0 ? (
          <NoHabitsAdded>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </NoHabitsAdded>
        ) : (
          habitsList.map((habit, index) => (
            <MyHabit key={index}>
              <MyHabitTop>
                <HabitTitle>{habit.name}</HabitTitle>
                <Trash>
                  <FaTrashAlt onClick={() => toDeleteHabit(habit.id)} />
                </Trash>
              </MyHabitTop>
              <MyHabitDays>
                {day.map((i, index) => (
                  <Day mainClass={habit.days.includes(index)} key={index}>
                    {i}
                  </Day>
                ))}
              </MyHabitDays>
            </MyHabit>
          ))
        )}
      </Content>
      <Bottom percentage={percentage.toFixed(0)} />
    </Container>
  );
}
