import React from "react";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">DEV@Deakin</h1>
      <input type="text" placeholder="Search..." className="search" />
      <div className="header-buttons">
        <button>Post</button>
        <button>Login</button>
      </div>
    </header>
  );
}

export default Header;
