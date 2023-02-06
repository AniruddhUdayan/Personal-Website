import React from 'react';
import './Experience.css';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaCuttlefish } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';

function Experience() {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Expirience</h2>

      <div className="container expirience__container">
        <div className="experience__card1">
          <div className="box1">
            <h2>Skills</h2>
          </div>
          <div className="box2">
            <div className="box3">
              <div className="plate">
                <span>
                  <FaHtml5></FaHtml5>
                </span>
                <span className="skill">HTML</span>
              </div>
              <div className="plate">
                <span>
                  <FaCss3Alt />
                </span>
                <span className="skill">CSS</span>
              </div>
              <div className="plate">
                <span>
                  <FaJs />
                </span>
                <span className="skill">JavaScript</span>
              </div>
              <div className="plate">
                <span>
                  <FaCuttlefish />
                </span>
                <span className="skill">C++</span>
              </div>
              <div className="plate">
                <span>
                  <FaCuttlefish />
                </span>
                <span className="skill">C</span>
              </div>
            </div>
            <div className="box3">
              <div className="plate">
                <span>
                  <FaReact />
                </span>
                <span className="skill">React</span>
              </div>
              <div className="plate">
                <span>
                  <FaReact />
                </span>
                <span className="skill">Redux</span>
              </div>
              <div className="plate">
                <span>
                  <FaPython />
                </span>
                <span className="skill">Python</span>
              </div>
              <div className="plate">
                <span>
                  <FaGithub />
                </span>
                <span className="skill">Github</span>
              </div>
              <div className="plate">
                <span>
                  <FaBootstrap />
                </span>
                <span className="skill">Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
        <div className="experience__card1">
          <div className="box1">
            <h2>Experience</h2>
          </div>
          <div className="box5">
            <div className="plate2">
              <span>
                <FaAngleDoubleRight />
              </span>
              <span>
                <h3 className="skill">Internship</h3>
                <div>
                  <h5>Role - React Intern</h5>
                  <h5>Company Name - Technutia</h5> <h5>Duration - 3 months</h5>
                  <h5>Service - Front End development</h5> <h5>Tasks -</h5>
                  <p className="para">
                    Manage website development projects from initial design
                    through completion in frontend using JavaScript, React , css
                    and HTML.
                  </p>
                </div>
                {/* <a class="btn1" href="#">
                  Completion Certificate <FaFileDownload />
                </a> */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
