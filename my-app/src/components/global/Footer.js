import React, { Component } from 'react';
import './css/Footer.css';
import propTypes from 'prop-types';

class Footer extends Component {
  static propTypes = {
    copyright: propTypes.string
  };
  render() {
    const { copyright = '&copy; React 2019'} = this.props;
    return (
      <div className="Footer"> 
        <p>{copyright}</p>          
      </div>
    );
  }
}

export default Footer;
