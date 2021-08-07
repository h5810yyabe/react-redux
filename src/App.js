import React, { Component } from 'react';


//functional component
const App = () => (<Counter></Counter>)


class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  handlePlusButton = () => {
    //setStateを実行すると、stateが実行されたあとに差分のrenderが実行される
    this.setState({count: this.state.count+1})
  }

  handleMinusButton = () => {
    this.setState({count: this.state.count-1})
  }

  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
