import React from 'react';
import './Header.css'; // Importando o arquivo de estilos

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Meu Site</h1>
      <nav className="header-nav">
        <a href="#home" className="header-link">Home</a>
        <a href="#about" className="header-link">Sobre</a>
        <a href="#contact" className="header-link">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
