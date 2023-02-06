import React from 'react';
import CTA from './CTA';
import './Header.css';
// import Me from '../../assets/Me.jpg';
import HeaderSocials from './HeaderSocials';
import MyCard from './MyCard';

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Aniruddh Udayan</h1>
        <h5 className="text-light">Undergraduate Student</h5>
        <CTA />

        <div className="box">
          <HeaderSocials />
          <div className="me">
            <div className="my-card">
              <MyCard />
            </div>
          </div>
          <div className="boxbtn">
            <div className="animation">
              <div class="arrow">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="scroll-down">
              <a href="#portfolio" className="button1">
                <span>Scroll Down</span>
                <i></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
