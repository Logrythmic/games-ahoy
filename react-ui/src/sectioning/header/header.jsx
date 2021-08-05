import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
import game_controller from '../../game_controller.svg';

function Header() {
  return (
    <header>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>
            <img
              src={game_controller}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="game controller icon"
            />
            <b><i>Games Ahoy</i></b>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as='li'><NavLink to="/">Home</NavLink></Nav.Link>
            <Nav.Link as='li'><NavLink to="/reviews">Reviews</NavLink></Nav.Link>
            <Nav.Link as='li'><NavLink to="/about">About</NavLink></Nav.Link>
            <Nav.Link as='li'><NavLink to="/contact">Contact</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
