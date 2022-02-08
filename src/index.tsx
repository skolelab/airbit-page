import React, { useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/navbar";
import WikiBar from "./components/wikibar";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/landing";
import Resources from "./components/resources";
import Wiki from "./components/wiki";
import { Container } from "react-bootstrap";
import "./style.css";

const App = () => {
	// choose English or Norwegian language
	const [language, setLanguage] = useState(false);
	const [wiki, setWiki] = useState(true);

	return (
		<>
			<Router>
				<NavigationBar />
				{wiki && <WikiBar language={language} setLanguage={setLanguage} />}
				<Container fluid>
					<Switch>
            //{" "}
						<Route path="/resources">
							<Resources />
						</Route>
						<Route
							path="/wiki/:id"
							render={(props) => (
								<Wiki {...props} wiki={wiki} setWiki={setWiki} />
							)}
						/>
						<Route exact path="/">
							<Landing language={language} wiki={wiki} setWiki={setWiki} />
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
