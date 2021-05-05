import "./App.css";
import Main from "./component/Main/Main";
import Navabar from "./component/Navbar/Navabar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Destination from "./component/Destination/Destination";
import Home from "./component/Home/Home";

function App() {
  return (
    <Router>
      <Navabar></Navabar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/destination">
          <Destination></Destination>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
