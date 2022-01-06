import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link" to="/edit/:id">
              Edit Exercise
            </Link>
            <Link className="nav-item nav-link" to="/users">
              Create User
            </Link>
            <Link className="nav-item nav-link" to="/create">
              Create Exercise
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
