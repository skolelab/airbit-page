import { Nav, Navbar } from "react-bootstrap";

const WikiBar = () => {
  return (
    <Navbar className="wikinav" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link href="/live">English</Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link href="/upload">Last opp data</Nav.Link>
        <Nav.Link href="/history">Søk i tid</Nav.Link>
        <Nav.Link href="/live">Live</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default WikiBar;
