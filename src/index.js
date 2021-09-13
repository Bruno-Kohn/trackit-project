import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Habits from "./Components/Habits";
import Today from "./Components/Today";
import Records from "./Components/Records";
import "./styles/reset.css";
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import PercentageContext from "./contexts/PercentageContext";

function App() {
  const [user, setUser] = useState(null);
  const [percentage, setPercentage] = useState(0);

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login setUser={setUser} />
          </Route>
          <Route path="/cadastro" exact>
            <Registration />
          </Route>
          <PercentageContext.Provider value={percentage}>
            <Route path="/habitos" exact>
              <Habits />
            </Route>
            <Route path="/hoje" exact>
              <Today setPercentage={setPercentage} />
            </Route>
            <Route path="/historico" exact>
              <Records />
            </Route>
          </PercentageContext.Provider>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
