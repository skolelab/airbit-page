import { Nav, Navbar } from "react-bootstrap";
import { Dispatch, SetStateAction } from "react";

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
    <Navbar className="wikinav" variant="dark">
      <Nav className="mr-auto">{link}</Nav>
      <Nav className="ml-auto">
        <Nav.Link href="wiki">Programmering</Nav.Link>
        <Nav.Link href="wiki/">Bygging</Nav.Link>
        <Nav.Link href="resources">Ressurser</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default WikiBar;
