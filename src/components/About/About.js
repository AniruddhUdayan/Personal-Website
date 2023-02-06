import React from 'react';
import './About.css';
// import me from '../../assets/card2.jpg';
import AboutCard from './AboutCard';
import AnimatedBtn from '../../UI/buttons/AnimatedBtn';

function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div class="responsiveAnimation">
            <div class="loader"></div>
            <div class="loader"></div>
            <div class="loader"></div>
          </div>
          <div class="para">
            <span>Responsive Page</span>
            <span>Responsive Page</span>
          </div>
        </div>

        <div className="about__content">
          <div className="box31">
            <p>
              Hello, everyone! My name is Aniruddh and I'm from Raipur. I'm
              currently pursuing B.Tech at KIIT Universiry, and I hope to become
              a Software Developer one day. I'm really passionate about my work,
              and I'm always looking for new ways to learn and improve my
              skills. I'm also a firm believer of teamwork, and I believe that
              working together is the best way to achieve success. Thank you for
              taking the time to get to know me.
            </p>
            <AnimatedBtn />
          </div>
          <AboutCard />
        </div>
      </div>
    </section>
  );
}

export default About;
