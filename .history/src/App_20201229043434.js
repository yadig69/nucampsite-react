import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';
import { CAMPSITES } from './shared/campsites';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          campsites: CAMPSITES
      };
    }

  render() {
    return (
      <div className="App">
      <Main />
      </div>
    );
  }
}

export default App;