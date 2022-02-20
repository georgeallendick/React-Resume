import React, { Component } from 'react'
import { appStyle, mainStyle } from './functionality/Theme'
import Title from './components/Title'
import DisplayTime from './components/DisplayTime'
import Dropdown from './components/Dropdown'


class App extends Component {
  render() {
    return (
      <div className="App" style={appStyle}>
        <main style={mainStyle}>
          <Title />
          <DisplayTime />
          <Dropdown />
        </main>
      </div>
    );
  }
}

export default App;