import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import {
  BottomBar,
  HabitsLink,
  CircularProgressBar,
  RecordsLink,
} from '../styles/globalStyles.js';

export default function Bottom({ percentage }) {
  return (
    <BottomBar>
      <Link to='/habitos'>
        <HabitsLink>Hábitos</HabitsLink>
      </Link>
      <Link to='/hoje'>
        <CircularProgressBar>
          <CircularProgressbar
            value={percentage}
            text='Hoje'
            background
            backgroundPadding={6}
            styles={buildStyles({
              textColor: '#FFF',
              trailColor: '#52b6ff',
              backgroundColor: '#52b6ff',
              pathColor: '#FFF',
            })}
          />
        </CircularProgressBar>
      </Link>
      <Link to='/historico'>
        <RecordsLink>Histórico</RecordsLink>
      </Link>
    </BottomBar>
  );
}
