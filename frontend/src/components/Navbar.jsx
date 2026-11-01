import { Link } from "react-router-dom";
import { Utensils, Menu, X } from "lucide-react";
import { useState } from "react";

import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">

      <Link to="/" className="logo" onClick={closeMenu}>
        <Utensils size={30} />
        <div>
          <h2>Sri Sugureshwara</h2>
          <span>KHANAVALI</span>
        </div>
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>

      <div className={`nav-links ${open ? "active" : ""}`}>

        <Link to="/" onClick={closeMenu}>
          {t("home")}
        </Link>

        <Link to="/menu" onClick={closeMenu}>
          {t("menu")}
        </Link>

        <Link to="/about" onClick={closeMenu}>
          {t("about")}
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          {t("contact")}
        </Link>

        <button
          className="language-btn"
          onClick={() => {
            toggleLanguage();
            closeMenu();
          }}
        >
          {language === "en" ? "ಕನ್ನಡ" : "English"}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;