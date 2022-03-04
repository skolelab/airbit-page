import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import NavigationBar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/landing";
import Version from "./components/version";
import Resources from "./components/resources";
import Wiki from "./components/wiki";
import { Container } from "react-bootstrap";
import { useCookies } from "react-cookie";
import "./style.css";

const App = () => {
  const [wiki, setWiki] = useState(true);
  // const [version, setVersion] = useState(0);
  const [cookies, _] = useCookies(["version"]);

  return (
    <>
      <Router>
        <Route exact path="/version">
          <Version />
        </Route>
        {cookies.version == 1 || cookies.version == 2 ? (
          <>
            <NavigationBar />
            <Container fluid>
              <Switch>
                <Route
                  path="/wiki/:id"
                  render={(props) => (
                    <Wiki {...props} wiki={wiki} setWiki={setWiki} />
                  )}
                />
                <Route exact path="/home"></Route>
                <Route exact path="/resources">
                  <Resources />
                </Route>
              </Switch>
            </Container>
          </>
        ) : null}
        <Route exact path="/">
          {cookies.version == 1 || cookies.version == 2 ? (
            <Landing version={cookies.version} wiki={wiki} setWiki={setWiki} />
          ) : (
            <Redirect to="/version"></Redirect>
          )}
        </Route>
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
