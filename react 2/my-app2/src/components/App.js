import React, { Component } from 'react';
import propTypes from 'prop-types';
//Components

import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';

//Data

import items from '../data/menu';

class App extends Component {
  static propTypes = {
    children: propTypes.object.isRequired
  };

  render() {
    const {children} = this.props;
    return (
      <div className="App">
        <Header title="Ejemplo" items={items}/>
        <Content body={children}/>
        <Footer copyright="&copy; ejemplo 2019"/>
      </div>
    );
  }
}

export default App;
