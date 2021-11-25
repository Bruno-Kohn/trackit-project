import '../styles/reset.css';
import { FaTrashAlt } from 'react-icons/fa';
import 'react-circular-progressbar/dist/styles.css';
import Top from './Top';
import Bottom from './Bottom';
import { useState, useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import Days from './Days';
import PercentageContext from '../contexts/PercentageContext';
import {
  createHabitReq,
  habitsListReq,
  deleteHabitReq,
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
  const user = useContext(UserContext);
  const day = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  const percentage = useContext(PercentageContext);

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  useEffect(() => {
    habitsListReq(config)
      .then((resp) => {
        setHabitsList(resp.data);
      })
      .catch((error) => {
        alert('Favor, tente novamente!');
      });
    // eslint-disable-next-line
  }, []);

  function toShowAddHabitsBox() {
    setClicked(true);
  }

  function toCreateHabit() {
    const body = {
      name: typedHabit,
      days: selectedDays,
    };
    createHabitReq(body, config)
      .then((resp) => {
        setTypedHabit('');
        setClicked(false);
        setHabitsList([...habitsList, resp.data]);
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
      deleteHabitReq(index, config)
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
          habitsList.map((habit) => (
            <MyHabit>
              <MyHabitTop>
                <HabitTitle>{habit.name}</HabitTitle>
                <Trash>
                  <FaTrashAlt onClick={() => toDeleteHabit(habit.id)} />
                </Trash>
              </MyHabitTop>
              <MyHabitDays>
                {day.map((i, index) => (
                  <Day mainClass={habit.days.includes(index)}>{i}</Day>
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
