import React, { Component } from "react";
import "./App.css";

import { data } from './data'

const API_KEY = "LbFYO3SNWbNiztw71oMQpzChpytNi5uFxhKe7ZR0";
const API = "https://api.nasa.gov/planetary/apod/";


class App extends Component {
  render() {
    const { date, explanation, title, url } = data;
    return (
      <div className="app">
        <h1>NASA Picture of the Day</h1>

        <div className='picture-day'>
          <span>{date}</span>
          <h2>{title}</h2>
          <img src={url} alt={title}/>
          <p>{explanation}</p>
        </div>

      </div>
    );
  }
}

export default App;
