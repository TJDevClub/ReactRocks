import React, { Component } from 'react';
import SmallDay from './SmallDay.js';

class FiveDay extends Component {
  handleClick (weather) {
    this.props.handleClick(weather);
  }
  render() {
    const forecast = this.props.weather;
    const days = forecast.map((day) => {
      return (
        <SmallDay key={day.id} weather={day} handleClick={this.handleClick.bind(this)}></SmallDay>
      )
    });
    return (
      <div className="fiveday">
        <div className="fiveday-title">
          Five Day Forecast for {this.props.location}:
        </div>
        <ul className="fiveday-list">
          {days}
        </ul>
      </div>
    );
  }
}

export default FiveDay;
