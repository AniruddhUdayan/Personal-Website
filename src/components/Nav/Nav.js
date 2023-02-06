import React, { useState } from 'react';
import './Nav.css';
import { FaHome } from 'react-icons/fa';
import { FaUserAstronaut } from 'react-icons/fa';
import { FaBookReader } from 'react-icons/fa';
import { FaHubspot } from 'react-icons/fa';
import { FaAt } from 'react-icons/fa';

function Nav() {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <div className="nav1">
      <nav className="navBox">
        <a
          href="/"
          onClick={() => setActiveNav('#')}
          className={activeNav === '#' ? 'active' : ''}
        >
          <FaHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav('#about')}
          className={activeNav === '#about' ? 'active' : ''}
        >
          <FaUserAstronaut />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav('#experience')}
          className={activeNav === '#experience' ? 'active' : ''}
        >
          <FaBookReader />
        </a>
        <a
          href="#services"
          onClick={() => setActiveNav('#services')}
          className={activeNav === '#services' ? 'active' : ''}
        >
          <FaHubspot />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          <FaAt />
        </a>
      </nav>
    </div>
  );
}

export default Nav;
