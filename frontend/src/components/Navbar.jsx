import "../App.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Health Journal</Link>
      </div>
      <div className="navbar-right">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/journals" className="navbar-link">Journals</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
        <Link to="/about" className="navbar-link">About</Link>
        {loggedIn ? (
          <>
            <Link to="/addentry" className="navbar-link">Symptom Tracker</Link>
            <Link to="/entries" className="navbar-link">My History</Link>
            <Link to="/profile" className="navbar-link">Profile</Link>
            <button onClick={handleLogout} className="navbar-button">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-link">Login</Link>
            <Link to="/register" className="navbar-link">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
