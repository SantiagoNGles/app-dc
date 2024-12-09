import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1>Digital Car</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/login">Connexion</Link>
      </nav>
    </header>
  );
}

export default Header;
