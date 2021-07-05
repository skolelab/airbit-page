import { Nav, Navbar } from "react-bootstrap";
import WikiBar from "./wikibar";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="light" expand="lg">
        <Navbar.Brand href="/">air:bit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/upload">Last opp data</Nav.Link>
            <Nav.Link href="/history">Søk i tid</Nav.Link>
            <Nav.Link href="/live">Live</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <WikiBar />
    </>
  );
};

export default NavigationBar;
