import React from 'react';
import './AboutCard.css';
// import { FaSchool } from 'react-icons/fa';

function AboutCard() {
  return (
    <div className="card-card">
      <div className="divH">
        <div className="template">
          <div className="header1">
            <div className="img-box">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  fill="#668ba4"
                  d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
                ></path>
              </svg>
            </div>
            <h1 className="title">School</h1>
          </div>

          <div className="content">
            <p>School Name - Krishna Public School</p>
            <p>10th Passing Year - 2018</p>
            <p>10th percentage - 88%</p>
            <p>12th Passing Year - 2020</p>
            <p>12th percentage - 86%</p>
          </div>
        </div>
      </div>
      <div className="divH">
        <div className="template">
          <div className="header1">
            <div className="img-box">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  fill="#668ba4"
                  d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
                ></path>
              </svg>
            </div>
            <h1 className="title">Collage</h1>
          </div>

          <div className="content">
            <p>University Name - KIIT</p>
            <p>Current Year - 3rd</p>
            <p>Branch - Computer Science</p>
            <p>Graduation Year - 2024</p>
            <p>Current cgpa - 8.6</p>
          </div>
        </div>
      </div>
      <div className="divH">
        <div className="template">
          <div className="header1">
            <div className="img-box">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  fill="#668ba4"
                  d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
                ></path>
              </svg>
            </div>
            <h1 className="title">Experience</h1>
          </div>

          <div className="content">
            <p>
              Working on frontEnd projects from a year. You can checkout more
              about my skills and experience by clicking the link below
            </p>
            <a href="#experience" className="btn-link">
              Read More...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
