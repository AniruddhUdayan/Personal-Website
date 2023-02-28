import React from 'react';
import './Services.css';
import { FaCheck } from 'react-icons/fa';

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>MERN Developer</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Developing custom web applications from the ground up using the
                MERN stack, including front-end development with React.js and
                back-end development with Node.js and Express.js.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                {' '}
                Building RESTful APIs with Node.js and Express.js, using MongoDB
                as a database, to provide data to front-end applications
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Integrating third-party services and APIs into MERN stack
                applications, such as payment gateways, social media platforms,
                and data analytics tools.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Provide ongoing maintenance and support for MERN stack
                applications, including bug fixes, feature updates, and
                performance optimization.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Front-End Developer</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Creating custom React applications from scratch to meet your
                clients' specific needs.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                {' '}
                Integration of RESTful APIs and other data sources into React
                applications to display real-time data and enhance user
                experience.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Designing and implementing user interfaces and user experiences
                using React and related libraries such as Material UI, Ant
                Design, and Bootstrap.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Writing unit tests and integration tests for React components
                and debugging issues that arise during development.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Creating UI designs that are intuitive and user-friendly</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
