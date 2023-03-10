import React from 'react';
import './HeaderSocials.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

function HeaderSocials() {
  return (
    <div className="socials">
      <ul className="ul">
        <li>
          <a
            href="https://www.linkedin.com/in/aniruddh-udayan-997534226/"
            target="_blank"
            className="linkdin"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AniruddhUdayan"
            target="_blank"
            className="github"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Anirudd67572848"
            target="_blank"
            className="twitter"
            rel="noreferrer"
          >
            <FaTwitterSquare />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/_aniruddh.__/"
            target="_blank"
            className="instagram"
            rel="noreferrer"
          >
            <FaInstagramSquare />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default HeaderSocials;
