import React from 'react';
import './Services.css';
import { FaCheck } from 'react-icons/fa';

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article></article>
        <article className="service">
          <div className="service__head">
            <h3>Front End Developer</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>Using HTML, JavaScript and CSS to bring concepts to life.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Developing and maintaining the user interface.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Creating tools that improve site interaction regardless of the
                browser.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Managing software workflow with fixing bugs and testing for
                usability.
              </p>
            </li>
          </ul>
        </article>
        <article></article>
      </div>
    </section>
  );
}

export default Services;
