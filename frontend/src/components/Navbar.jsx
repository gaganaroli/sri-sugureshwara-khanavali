import { Link } from "react-router-dom";
import { Utensils, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <Utensils size={30} />
        <div>
          <h2>Sri Sugureshwara</h2>
          <span>KHANAVALI</span>
        </div>
      </Link>

      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/menu" onClick={() => setOpen(false)}>Menu</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;