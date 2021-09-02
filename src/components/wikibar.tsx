import { Nav, Navbar } from "react-bootstrap";
import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface NavigationBarProps {
  language: boolean;
  setLanguage: Dispatch<SetStateAction<boolean>>;
}

const WikiBar = ({ language, setLanguage }: NavigationBarProps) => {
  var link = null;
  if (language) {
    link = <Nav.Link onClick={() => setLanguage(!language)}>Norsk</Nav.Link>;
  } else {
    link = <Nav.Link onClick={() => setLanguage(!language)}>English</Nav.Link>;
  }
  return (
    <Navbar id="wikibar" className="wikinav" variant="dark">
      <Nav className="mr-auto">{link}</Nav>
      <Nav className="ml-auto">
        <Link className="nav-link" to="/wiki/Home">
          Programmering
        </Link>
        <Link className="nav-link" to="/wiki/Guide-bygging-lodding">
          Bygging
        </Link>
        <Link className="nav-link" to="resources">
          Ressurser
        </Link>
      </Nav>
    </Navbar>
  );
};

export default WikiBar;
