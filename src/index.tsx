import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/navbar";
import WikiBar from "./components/wikibar";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/landing";
import Wiki from "./components/wiki";
import { Container } from "react-bootstrap";
import "./style.css";

const App = () => {
  // choose English or Norwegian language
  const [language, setLanguage] = useState(false);
  var wiki = true;

  if (window.location.pathname.includes("wiki")) {
    wiki = false;
  }

  return (
    <>
      <Router>
        <NavigationBar />
        {wiki && <WikiBar language={language} setLanguage={setLanguage} />}
        <Container fluid>
          <Switch>
            <Route path="upload"></Route>
            <Route path="history"></Route>
            <Route path="live"></Route>
            <Route path="wiki/:id" component={Wiki} />
            <Route exact path="/">
              <Landing language={language} />
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
