import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };
  render() {
    const{ title, items}= this.props;

    return (
      <div className="Header"> 
        <div className="Logo">
        <img src={logo} alt="logo" />
        </div>     
          <h2>{title}</h2>
          <ul className="Menu">
            {items && items.map((item, key) => <li key = {key}>{item.title}</li>)}
          </ul>
      </div>
    );
  }
}

export default Header;
