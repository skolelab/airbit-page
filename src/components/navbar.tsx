import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">
          air:bit
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Link className="nav-link" to="/wiki/Home">
            Programmering
          </Link>
          <Link className="nav-link" to="/wiki/Guide-bygging-lodding">
            Bygging
          </Link>
          <Link className="nav-link" to="/resources">
            Ressurser
          </Link>
          <Link className="nav-link" to="/version">
            Velg versjon
          </Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavigationBar;
