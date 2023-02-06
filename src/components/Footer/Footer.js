import React from 'react';
import './Footer.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <h3>@Copyright2023 Aniruddh</h3>
      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiance">Experiance</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/aniruddh-udayan-997534226/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AniruddhUdayan"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />
        </a>
        <a
          href="https://twitter.com/Anirudd67572848"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitterSquare />
        </a>
        <a
          href="https://www.instagram.com/_aniruddh.__/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagramSquare />
        </a>
      </div>
      <div className="footer__copyright">
        <small>Copyright</small>
      </div>
    </footer>
  );
}

export default Footer;
