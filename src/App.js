import React, { Component } from "react";
import "./App.css";
import Button from './Button'
import Picture from './Picture'

const dateChangeDirection = {
  increase: 1,
  decrease: -1
}

class App extends Component {
  state = {
    date: new Date(),
  }

  onDateIncrease = () => {
    this.onDateChange(dateChangeDirection.increase, this.state.date)
  }

  onDateDecrease = () => {
    this.onDateChange(dateChangeDirection.decrease, this.state.date)
  }

  onDateChange = (direction, date) => {
    const newDate = new Date(date).setDate(date.getDate() + direction)
    if (newDate <= new Date()) {
      this.setState({ date: new Date(newDate) });
    }
  }

  dateToText = ( date ) => {
    const year = date.getFullYear();
    const month = date.getMonth() < 9 ? `0${date.getMonth()+1}` : date.getMonth()+1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    return `${year}-${month}-${day}`;
  }

  render() {
    return (
      <div className="app">
        <h1>NASA Picture of the Day</h1>
        <div>
          <Button onClick={this.onDateDecrease}>&lt;</Button>
          <span>{this.dateToText(this.state.date)}</span>
          <Button onClick={this.onDateIncrease}>&gt;</Button>
        </div>

        <Picture date={this.dateToText(this.state.date)} />

      </div>
    );
  }
}

export default App;
