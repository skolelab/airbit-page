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
		<Nav></Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
