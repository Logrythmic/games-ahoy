import { NavLink } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';

function Footer() {
  return (
    <footer>
      <Navbar className="justify-content-center" bg="light">
        <Nav.Item>
          <Nav.Link as="li">Copyright 2021</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as='li'><a href='https://github.com/Logrythmic/games-ahoy'>GitHub</a></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as="li"><NavLink to="/credits">Credits</NavLink></Nav.Link>
        </Nav.Item>
      </Navbar>
    </footer>
  );
}

export default Footer;
