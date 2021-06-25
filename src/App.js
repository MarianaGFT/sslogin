import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/welcome" component={Welcome}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
