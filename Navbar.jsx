import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Toggle function
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Shin chan</span>

        {/* ✅ MENU ICON TOGGLER */}
        <div className="menuicone" id="menuicone" onClick={handleClick}>
          {/* Show Menu icon if not open */}
          {!menuOpen && (
            <img
              className="menu"
              src="src/assets/Gif/menu_18873843.gif"
              alt="menu"
            />
          )}

          {/* Show Close icon if open */}
          {menuOpen && (
            <div className="close">
              <img src="src/assets/Gif/toya_16677840.gif" alt="close" />
            </div>
          )}
        </div>

        {/* ✅ NAV LINKS */}
     <ul
  className={`navItems ${menuOpen ? "active" : ""}`}
>
  <li>Home</li>
  <li>page02</li>
  <li>page03</li>
  <li>Page04</li>

</ul>
      </div>
    </div>
  );
};

export default Navbar;
