import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Habits from './Components/Habits';
import Today from './Components/Today';
import Records from './Components/Records';
import './styles/reset.css';
import UserContext from './contexts/UserContext';
import React, { useState, useEffect } from 'react';
import PercentageContext from './contexts/PercentageContext';

export default function App() {
  const [userData, setUserData] = useState('');
  const [percentage, setPercentage] = useState(0);
  const [habits, setHabits] = useState([]);

  useEffect(
    () => {
      const loginUser = JSON.parse(localStorage.getItem('loginUser'));
      if (loginUser) {
        setUserData(loginUser);
      }
    },
    // eslint-disable-next-line
    []
  );

  console.log(JSON.parse(localStorage.getItem('loginUser')));

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Login />
          </Route>
          <Route path='/cadastro' exact>
            <Registration />
          </Route>
          <PercentageContext.Provider
            value={{ percentage, setPercentage, habits, setHabits }}
          >
            <Route path='/habitos' exact>
              <Habits />
            </Route>
            <Route path='/hoje' exact>
              <Today />
            </Route>
            <Route path='/historico' exact>
              <Records />
            </Route>
          </PercentageContext.Provider>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
