import logo from "../img/yoga.webp";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="" style={{ width: "250px" }} />
        </a>
        <h3>YAMAN ACADEMY</h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link active"
                aria-current="page"
                style={({ isActive }) => ({ color: isActive && "red" })}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/success"
                className="nav-link"
                aria-current="page"
                style={({ isActive }) => ({ color: isActive && "red" })}
              >
                Success
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/graduates"
                className="nav-link"
                aria-current="page"
                style={({ isActive }) => ({ color: isActive && "red" })}
              >
                Graduates
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
                aria-current="page"
                style={({ isActive }) => ({ color: isActive && "red" })}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
