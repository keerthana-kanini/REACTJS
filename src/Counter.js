import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  decrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  };

  render() {
    const { count } = this.state;
    let countMessage;
    if (count > 0) {
      countMessage = 'Positive';
    } else if (count < 0) {
      countMessage = 'Negative';
    } else {
      countMessage = 'Zero';
    }

    return (
      <div className="counter" style={{ backgroundColor: 'pink' }}>
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <p>Count is: {countMessage}</p>
        <div className="buttons">
          <button onClick={this.incrementCount}>Increment</button>
          <button onClick={this.decrementCount}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default Counter;
