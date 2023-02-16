import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,

    myName: "MustafaJohn@Gmail.com",
    Password: "@@Mustafa12345",
  };
  render() {
    return (
      <>
        <div className="container">
          <button onClick={this.DecreaseHandler} className="btn btn-primary">
            Decrease
          </button>
          <button onClick={this.ResetHandler} className="btn btn-warning">
            {this.state.count}
          </button>
          <button onClick={this.IncreaseHandler} className="btn btn-primary">
            Increase
          </button>
        </div>

        <div className="btn">
          <button className="btn btn-danger" onClick={this.Resetpwd}>
            ChangeState
          </button>
          <button className=" one btn btn-danger" onClick={this.Alert}>
            Alerbtn
          </button>
        </div>
        <br />
        <h2 className="text text-center">{this.state.myName}</h2>
        <h2 className="text text-center">{this.state.Password}</h2>
      </>
    );
  }

  Alert = () => {
    window.alert("Nice Shot");
  };

  Resetpwd = () => {
    this.setState({ Password: "StateChangedToThisByClick" });
  };
  DecreaseHandler = () => {
    this.setState({ count: this.state.count - 1 });
  };
  ResetHandler = () => {
    this.setState({ count: (this.state.count = 0) });
  };
  IncreaseHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;
