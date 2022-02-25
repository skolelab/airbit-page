import React, { useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/navbar";
import WikiBar from "./components/wikibar";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/landing";
// import Resources from "./components/resources";
import Version from "./components/version";
import Wiki from "./components/wiki";
import { Container } from "react-bootstrap";
import { useCookies } from "react-cookie";
import "./style.css";

const App = () => {
  // choose English or Norwegian language
  const [language, setLanguage] = useState(false);
  const [wiki, setWiki] = useState(true);
  const [version, setVersion] = useState(0);
  const [cookies, setCookies] = useCookies(["version"]);

  const onChange = (val: number) => {
    setVersion(val);
    setCookies("version", val, { path: "/" });
  };
  console.log(version);

  return (
    <>
      <Router>
        {version ? (
          <>
            <NavigationBar />
            {wiki && <WikiBar language={language} setLanguage={setLanguage} />}
            <Container fluid>
              <Switch>
                <Route
                  path="/wiki/:id"
                  render={(props) => (
                    <Wiki {...props} wiki={wiki} setWiki={setWiki} />
                  )}
                />
                <Route exact path="/home"></Route>
              </Switch>
            </Container>
          </>
        ) : null}
        <Route exact path="/">
          {version ? (
            <Landing
              version={cookies.version}
              language={language}
              wiki={wiki}
              setWiki={setWiki}
            />
          ) : (
            <Version onChange={onChange} />
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
