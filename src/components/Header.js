import React, { useEffect, useState } from "react";
import "./header.css";
import { toast } from "react-toastify";

function Header({ prop }) {
  const [user, setUser] = useState('');

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userDetails")));
    if (user.length < 0) {
      window.location.href = "/";
    }
  }, []);

  const handleLogoClick = () => {
    window.location.href = "/landing";
  };
  const handleSignup = () => {
    window.location.href = "/signup";
  };
  const handleLogin = () => {
    window.location.href = "/login";
  };
  const handleLogout = () => {
    localStorage.removeItem("userDetails");
    toast.success("Logged out successfully");
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };
  return (
    <div className="header-container">
      <div>
        <h2 onClick={() => handleLogoClick}>MeShop</h2>
      </div>
      {prop ? (
        <div>
          <h3>Welcome {user ? user.name : ''}</h3>
        </div>
      ) : (
        <></>
      )}
      {prop ? (
        <div className="prop-container">
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="prop-container">
          <button onClick={handleSignup}>Sign Up</button>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Header;
