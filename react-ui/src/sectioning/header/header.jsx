import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div><NavLink to="/">Home</NavLink></div>
      <ul>
        <li>
          <NavLink to="/reviews">Reviews</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
