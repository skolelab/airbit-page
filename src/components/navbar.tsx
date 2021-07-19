import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">
          air:bit
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="upload">
              Last opp data
            </Link>
            <Link className="nav-link" to="history">
              Søk i tid
            </Link>
            <Link className="nav-link" to="/live">
              Live
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
