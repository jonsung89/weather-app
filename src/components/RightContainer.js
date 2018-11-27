import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import '../styles/RightContainer.css';

class LeftContainer extends Component {
  render() {
    return (
      <div className="right-container">
        <div className="weather-form">
          <WeatherForm />
        </div>
        <div className="weather-data">
          <h3>Weather in Minneapolis: 20</h3>      
        </div>
      </div>
    )
  }
}

export default LeftContainer;