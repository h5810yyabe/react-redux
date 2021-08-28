import React, { Component } from 'react';
import { connect } from "react-redux";

import { increment, decrement } from "../actions";

//functional component
class App extends Component {
  //reducerでintialstateの設定されてるので不要
  // constructor(props) {
  //   super(props)
  //   this.state = {count: 0}
  // }

  //reducerの中でcountの増減処理するので不要
  // handlePlusButton = () => {
  //   //setStateを実行すると、stateが実行されたあとに差分のrenderが実行される
  //   this.setState({count: this.state.count+1})
  // }

  // handleMinusButton = () => {
  //   this.setState({count: this.state.count-1})
  // }

  //onClickのタイミングでprops.increment実行
  //ｰ>props.incrementはmapDispatchToStateによりdispatch(increment())がセットされてる
  //->dispatch(increment())が実行。reducerが実行される
  //
  render() {
    const props = this.props;

    return (
      <React.Fragment>
        <div>count: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({value: state.count.value})

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

const mapDispatchToProps = ({increment, decrement})

//1.connect関数によりmapStateToPropsが実行ｰ>AppのPropsにstateが入る
//2.connect関数によりmapDispatchToPropsが実行ｰ>props.increment,decrementが設定される
export default connect(mapStateToProps, mapDispatchToProps)(App);

