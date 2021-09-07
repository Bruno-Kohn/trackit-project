import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Habits from "./Components/Habits";
import Today from "./Components/Today";
import Records from "./Components/Records";
import "./styles/reset.css";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login />
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
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));