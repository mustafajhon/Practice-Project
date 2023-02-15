import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <>
        <button onClick={this.Handle} className="btn btn-sm btn-warning">
          Decrease
        </button>
        <button onClick={this.Reset} className="btn btn-sm btn-warning">
          {this.state.count}
        </button>
        <button onClick={this.Handler} className="btn btn-sm btn-warning">
          Increase
        </button>
      </>
    );
  }
  Handler = () => {
    this.setState({ count: this.state.count + 1 });
  };
  Reset = () => {
    this.setState({ count: (this.state.count = 0) });
  };
  Handle = () => {
    this.setState({ count: this.state.count - 1 });
  };
}

export default Counter;
