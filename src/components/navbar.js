import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Button } from '@chakra-ui/react';
import '../App.css'; // Import CSS file

function Navbar() {
  const { token, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="brand">Quiz Generator</div>
      <div>
        <Link to="/">Home</Link>
        {token ? (
          <>
            <Link to="/upload">Upload</Link>
            <Link to="/quiz">Quiz</Link>
            <Link to="/grades">Grades</Link>
            <Button className="btn-logout" onClick={logout}>Logout</Button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
