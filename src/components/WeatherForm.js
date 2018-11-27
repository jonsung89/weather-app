import React, { Component } from 'react';
import '../styles/WeatherForm.css';

class WeatherForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      country: ''
    }
  }

  inputChangeCity(e) {
    this.setState({
      city: e.target.value
    })
  }
  inputChangeCountry(e) {
    this.setState({
      country: e.target.value
    })
  }
  
  onSubmitInput(e) {
    e.preventDefault();
    console.log('city: ', this.state.city);
    console.log('country: ', this.state.country);
  }

  render() {
    return (
      <form 
        className="form-group"
        // onSubmit={this.props.getWeather}
        data={this.state}
        onSubmit={(e) => this.onSubmitInput(e)}
      >
        {/* <label for="city-input">city</label> */}
        <input 
          id='city-input' 
          className='input city' 
          value={this.state.city}
          onChange={(e) => this.inputChangeCity(e)}
          type='text' 
          placeholder='city' 
          name='city'
          required
        />
        {/* <label for="country-input">country</label> */}
        <input 
          id='country-input'
          className='input country' 
          value={this.state.country}
          onChange={(e) => this.inputChangeCountry(e)}
          type='text' 
          placeholder='country' 
          name='country'
        />
        <button className='get-weather'>Get Weather</button>
      </form>
    )
  }
}

export default WeatherForm;