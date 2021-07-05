import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from "./components/navbar";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/landing";
import "./style.css";

const App = () => (
  <>
    <NavigationBar />
    <div id="container">
      <Route path="/upload"></Route>
      <Route path="/history"></Route>
      <Route path="/live"></Route>
      <Route path="/">
        <Landing />
      </Route>
    </div>
  </>
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
