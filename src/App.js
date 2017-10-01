import React, { Component } from "react";
import "./App.css";
import Button from './Button'
import Picture from './Picture'

class App extends Component {
  state = {
    date: new Date(),
  }

  onDateIncrease = () => {
    const date = this.state.date;
    const newDate = date.setDate(date.getDate() + 1)
    if (newDate <= new Date()) {
      this.setState({ date: new Date(newDate) });
    }
  }

  onDateDecrease = () => {
    const date = this.state.date;
    const newDate = date.setDate(date.getDate() - 1)
    this.setState({ date: new Date(newDate) });
  }

  dateToText = () => {
    const date = this.state.date;
    const year = date.getFullYear();
    const month = date.getMonth() < 9 ? `0${date.getMonth()+1}` : date.getMonth()+1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    return `${year}-${month}-${day}`;
  }

  render() {
    return (
      <div className="app">
        <h1>NASA Picture of the Day</h1>
        <div className='navigation'>
          <Button onClick={this.onDateDecrease}>{`<`}</Button>
          <span>{this.dateToText(this.state.date)}</span>
          <Button onClick={this.onDateIncrease}>{`>`}</Button>
        </div>

        <Picture date={this.dateToText(this.state.date)} />

      </div>
    );
  }
}

export default App;
