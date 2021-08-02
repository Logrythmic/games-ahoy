import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <ul>
        <li>Copyright 2021</li>
        <li><a href='https://github.com/Logrythmic/games-ahoy'>GitHub</a></li>
        <li>
          <NavLink to="/credits">Credits</NavLink>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
