import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Helpdesk Mockup</h1>
      <nav className="header-nav">
        <a href="/">Home</a>
        <a href="/helpdesk">Helpdesk</a>
      </nav>
    </header>
  );
}

export default Header;
