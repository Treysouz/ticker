import React, { Component } from "react";

export default class Ticker extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    setInterval(
      () =>
        this.setState({
          count: this.state.count + 1
        }),
      1000
    );
  }

  clearTicker= ()=>{
    this.setState({
      count: 0
    })
  }
    
  
  render() {
    return (
      <div>
        The Ticker is: {this.state.count}{" "}
        <br></br>
          <button onClick={()=>this.clearTicker()}>Clear Interval</button>
        
      </div>
    );
  }
}
