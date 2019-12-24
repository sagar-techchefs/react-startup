import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { render } from '@testing-library/react';



class App extends React.Component {
  getDate = () => {
    const date = new Date();
    const today = `${date.getMonth()} / ${date.getDate()} / ${date.getFullYear()}`
    return today
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Date: {this.getDate()}</h1>
      </div>
    )
  }
}


export default App;
