import React, { Component } from 'react';
import Rock from './Rock.js';

class SmallDay extends Component {
  handleClick (e) {
    e.preventDefault();
    console.log('clicked');
    this.props.handleClick(this.props.weather)
  }
  render() {
    return (
      <li className="smallday" onClick={this.handleClick.bind(this)}>
        <strong>{this.props.weather.applicable_date}</strong>
        <div>{this.props.weather.weather_state_name}</div>
        <Rock weatherName={ this.props.weather.weather_state_abbr }></Rock>
      </li>
    );
  }
}

export default SmallDay;
