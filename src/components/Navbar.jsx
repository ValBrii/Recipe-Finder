import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar">
          <Link to="/">HOME</Link>
          <Link to="/search">SEARCH MEAL</Link>
          <Link to="/filter" className="navbar-link">SELECT DIET</Link>
      </nav>
    );
};

export default Navbar;
