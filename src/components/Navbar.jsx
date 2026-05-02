import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/'); 
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand">Smart Assistant</span>
      <button
        className="btn btn-outline-light"
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
}