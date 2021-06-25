import "./App.css";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
// import Login from "./components/Login";
import Routes from "./routes/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/welcome" component={Welcome}></Route>
        </Switch>
      </Router> */}
      <Routes />
    </div>
  );
}

export default App;
