import React from 'react';
import './Portfolio.css';
import project from '../../assets/img1.jpg';
import expenseTracker from '../../assets/expense.jpg';
import ReactMeals from '../../assets/ReactMeals.jpg';
import ToDo from '../../assets/todo.jpg';
import TicTacToe from '../../assets/tictactoe.jpg';
import Crypto from '../../assets/crypto.jpg';

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img alt="crypto" src={Crypto}></img>
          </div>
          <h3>Cryptoverse</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AniruddhUdayan/Cryptoverse"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://cryptoverse26.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img alt="portfolio" src={project}></img>
          </div>
          <h3>Personal Portfolio</h3>
          <div className="portfolio__item-cta">
            <a href="/" className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
            <a
              href="/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img alt="expense" src={expenseTracker}></img>
          </div>
          <h3>Expense Tracker</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AniruddhUdayan/Expense-Tracker"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://expense-tracker26.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img alt="meals" src={ReactMeals}></img>
          </div>
          <h3>Food Order App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AniruddhUdayan/Food-Order-App"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://food-order-app26.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img alt="todo" src={ToDo}></img>
          </div>
          <h3>To-do List App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AniruddhUdayan/Todo-list"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://to-do-list26.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img alt="tictactoe" src={TicTacToe}></img>
          </div>
          <h3>Tic-Tac-Toe Game</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AniruddhUdayan/tic-tac-toe-game"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://tic-tac-toe991.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
