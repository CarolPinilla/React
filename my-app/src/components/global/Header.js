import React, { Component } from 'react';
import propTypes from 'prop-types';
import './css/Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  static propTypes = {
    title: propTypes.string.isRequired,
    items: propTypes.array.isRequired
  };
  render() {
    const{items}= this.props;

    return (
      <div className="Header">
        <nav className="navbar navbar-dark bg-dark" id="navbar">
        
          <ul className="Menu">
            {items && items.map(
              (item, key) => <li key = {key}><Link to={item.url}>{item.title}</Link></li>
              )
              }
          </ul>
    
        </nav>  
        
      </div>
    );
  }
}

export default Header;
