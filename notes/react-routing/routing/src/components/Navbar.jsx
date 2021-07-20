import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className="App-link" activeClassName="active-link" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="App-link" activeClassName="active-link" exact to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="App-link" activeClassName="active-link" exact to="/services">
            Services
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
