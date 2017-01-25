import React, { Component } from 'react';
import './App.css';
import Today from './components/Today.js'
import FiveDay from './components/FiveDay.js'
import axios from 'axios';

class App extends Component {
  constructor () {
    super();
    this.state = {
      location: 'San Francisco',
      mainDay: {},
      weather: [{
        "id": 5348960298336256,
        "weather_state_name": "Light Rain",
        "weather_state_abbr": "lr",
        "wind_direction_compass": "NNE",
        "created": "2017-01-22T16:30:39.334060Z",
        "applicable_date": "2017-01-22",
        "min_temp": 8.057142857142857,
        "max_temp": 11.349999999999998,
        "the_temp": 10.383333333333333,
        "wind_speed": 5.643812049129086,
        "wind_direction": 30.767054420761692,
        "air_pressure": 1005.685,
        "humidity": 90,
        "visibility": 6.562922532410722,
        "predictability": 75

      }]
    };
  }

  componentDidMount () {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition( position => {
        axios.get('https://jammin.naitian.org/location/search/', {
          params: { lattlong: position.coords.latitude + ',' + position.coords.longitude }
        }).then((res) => {
          console.log(res);
          this.setState({
            location: res.data[0]
          });
          console.log(this.state.location);
          axios.get('https://jammin.naitian.org/location/' + res.data[0].woeid).then((res) => {
            this.setState({
              weather: res.data.consolidated_weather
            });
            console.log('hasdklghasdf');
            console.log(this.state);
          }).catch((err) => {
            console.error(err);
          })
        }).catch((err) => {
          console.error(err);
        })
      }) 
    }
    this.setState({
      mainDay: this.state.weather[0]
    })
    console.log(this.state.mainDay);
  }

  changeMainWeather (weather) {
    this.setState({
      mainDay: weather
    })
    console.log(weather);
  }

  render() {
    let fivedays = this.state.weather.slice(1);
    return (
      <div> 
        <Today location={this.state.location.title} weather={this.state.mainDay}></Today>
        <FiveDay location={this.state.location.title} weather={fivedays} handleClick={this.changeMainWeather.bind(this)}></FiveDay>
      </div>    
    );
  }
}

export default App;
