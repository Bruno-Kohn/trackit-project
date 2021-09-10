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

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login setUser={setUser}/>
          </Route>
          <Route path="/cadastro" exact>
            <Registration />
          </Route>
          <Route path="/habitos" exact>
            <Habits />
          </Route>
          <Route path="/hoje" exact>
            <Today />
          </Route>
          <Route path="/historico" exact>
            <Records />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
