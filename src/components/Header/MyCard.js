import React from 'react';
import './MyCard.css';

function MyCard() {
  return (
    <div class="card">
      <div class="card-info">
        {/* <p class="title">Aniruddh</p> */}
        <div class="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p class="subtitle">Hover Over Here</p>
      </div>
      <div class="card-bio">
        <p>Click the scroll down button at left to see my projects.</p>
      </div>
    </div>
  );
}

export default MyCard;
