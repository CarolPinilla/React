import React, { Component } from 'react';
import propTypes from 'prop-types';
import logo from './images/logo.svg';
import './css/Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  static propTypes = {
    title: propTypes.string.isRequired,
    items: propTypes.array.isRequired
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
            {items && items.map(
              (item, key) => <li key = {key}><Link to={item.url}>{item.title}</Link></li>
              )
              }
          </ul>
      </div>
    );
  }
}

export default Header;
