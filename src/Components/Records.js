import '../styles/reset.css';
import 'react-circular-progressbar/dist/styles.css';
import Top from './Top';
import Bottom from './Bottom';
import PercentageContext from '../contexts/PercentageContext';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  ContentRecords,
  RouteName,
  RecordsMessage,
} from '../styles/globalStyles';

export default function Records() {
  const { percentage } = useContext(PercentageContext);
  const history = useHistory();

  if (!localStorage.getItem('loginUser')) {
    history.push('/');
  }

  return (
    <Container>
      <Top />
      <ContentRecords>
        <RouteName>Histórico</RouteName>
        <RecordsMessage>
          Em breve você poderá ver o histórico dos seus hábitos aqui!
        </RecordsMessage>
      </ContentRecords>
      <Bottom percentage={percentage.toFixed(0)} />
    </Container>
  );
}
