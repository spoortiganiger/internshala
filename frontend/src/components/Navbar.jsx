import React from "react";

const Navbar = ({ logout }) => {
  return (
    <nav
      style={{
        background: "#282c34",
        color: "#fff",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>Task Tracker</h2>

      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default Navbar;