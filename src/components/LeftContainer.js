import React from 'react';
import '../styles/LeftContainer.css';
import background from '../images/bird-s-eye-view-bright-close-up-1438761.jpg';

export default function LeftContainer() {
  return (
    <div className="left-container">
      <img src={background} alt="background" />
      <div className="header">
        <h1>Local Weather</h1>
        <hr />
        <h4>Please enter your city and country to receive your local weather information.</h4>
      </div>
    </div>
  )
}