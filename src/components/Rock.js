import React, { Component } from 'react';

// sn, sl, h, t, hr, lr, s, hc, lc, c
class Rock extends Component {
  constructor () {
    super();
    this.statics = {
      images: {
        'sn': 'snow',
        'sl': 'snow',
        'h': 'snow',
        't': 'thunder',
        'hr': 'rain',
        'lr': 'rain',
        's': 'rain',
        'hc': 'cloud',
        'lc': 'cloud',
        'c': 'dry'
      }
    }
  }
  render() {
    const path = '/rocks/' + this.statics.images[this.props.weatherName] + '.svg';
    return (
      <img className={this.props.className} src={path} alt={this.props.weatherName}/>
    );
  }
}

export default Rock;
