import React, { Component } from 'react';
import Rock from './Rock.js';
import moment from 'moment';

class Today extends Component {
  constructor () {
    super();
    this.momentFormat = {
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      nextWeek: 'dddd',
      lastDay: '[Yesterday]',
      lastWeek: '[Last] dddd',
      sameElse: 'DD/MM/YYYY'
    } 
  }
  render() {
    const date = moment(this.props.weather.applicable_date);

    return (
      <div className="today">
        <div className="today-text">
          <strong>{this.props.weather.weather_state_name}</strong>
          <div className="today-location">{date.calendar(null, this.momentFormat)} in {this.props.location}.</div>
          <div className="today-temp">{Math.round(this.props.weather.the_temp)}&deg;C</div>        
        </div>
        <Rock className="today-rock" weatherName={this.props.weather.weather_state_abbr} />
      </div>
    );
  }
}

export default Today;
