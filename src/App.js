import "./App.css";
import Navabar from "./component/Navbar/Navabar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Destination from "./component/Destination/Destination";
import Home from "./component/Home/Home";
import Login from "./Login/Login";

function App() {
  return (
    <Router>
      <Navabar></Navabar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/destination/:id">
          <Destination></Destination>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
