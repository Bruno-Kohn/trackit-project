import '../styles/reset.css';
import { FaCheck } from 'react-icons/fa';
import { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import 'react-circular-progressbar/dist/styles.css';
import Top from './Top';
import Bottom from './Bottom';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { todaysListReq, checkReq, uncheckReq } from '../services/api.service';
import {
  ContainerToday,
  CheckButton,
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
} from '../styles/globalStyles.js';

export default function Today({ setPercentage }) {
  const [habits, setHabits] = useState([]);
  const [checkButton, setCheckButton] = useState(1);
  const user = useContext(UserContext);
  const weekdayName = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  useEffect(() => {
    todaysListReq(config)
      .then((resp) => {
        setHabits(resp.data);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, [checkButton]);

  const doneQtd = habits.filter((i) => i.done === true).length;
  const habitsPercentage = (doneQtd / habits.length) * 100;
  setPercentage(habitsPercentage);

  function toCheckUncheckHabit(index, isDone) {
    if (!isDone) {
      checkReq(index, config)
        .then(() => {
          setCheckButton(checkButton + 1);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      uncheckReq(index, config)
        .then(() => {
          setCheckButton(checkButton + 1);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  return (
    <ContainerToday>
      <Top />
      <ContentToday>
        <TopContent>
          <Date>
            {weekdayName.filter((i, index) => index === dayjs().day())},{' '}
            {dayjs().format('DD/MM')}
          </Date>
          <HabitsDone doneQtd={doneQtd}>
            {doneQtd === 0
              ? 'Nenhum habito concluido ainda'
              : `${habitsPercentage.toFixed(0)}% dos hábitos concluidos`}
          </HabitsDone>
        </TopContent>
        {habits.map((todayHabit) => (
          <HabitsDisplay key={todayHabit.id}>
            <HabitsInfos>
              <HabitsName>{todayHabit.name}</HabitsName>
              <HabitsSequence>
                <h1>
                  Sequencia atual:{' '}
                  <Sequence sequenceNumber={todayHabit.currentSequence}>
                    {todayHabit.currentSequence} dias
                  </Sequence>
                </h1>
              </HabitsSequence>
              <HabitsRecord>
                <h1>
                  Seu recorde:{' '}
                  <Record
                    recordNumber={todayHabit.highestSequence}
                    sequenceNumber={todayHabit.currentSequence}
                  >
                    {todayHabit.highestSequence} dias
                  </Record>
                </h1>
              </HabitsRecord>
            </HabitsInfos>
            <HabitsButton>
              <CheckButton
                done={todayHabit.done}
                onClick={() =>
                  toCheckUncheckHabit(todayHabit.id, todayHabit.done)
                }
              >
                <FaCheck />
              </CheckButton>
            </HabitsButton>
          </HabitsDisplay>
        ))}
      </ContentToday>
      <Bottom percentage={habitsPercentage.toFixed(0)} />
    </ContainerToday>
  );
}
