import { Nav, Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
const NavigationBar = () => {
  const [_, setCookies] = useCookies(["version"]);

  const onChange = (val: number) => {
    // setVersion(val);
    setCookies("version", val, { path: "/" });
  };
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
          <Button variant="outline-light" onClick={() => onChange(0)}>
            Velg versjon
          </Button>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavigationBar;
