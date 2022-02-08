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
    <Navbar id="wikibar" className="wikinav" variant="dark">
      <Nav className="mr-auto">{link}</Nav>
    </Navbar>
  );
};

export default WikiBar;
