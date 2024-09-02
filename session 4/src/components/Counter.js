import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter : 0
    }
  }
  
  componentDidMount() {
    this.setState({
      counter : this.state.counter + 1
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps)
    console.log(prevState)
  }

  componentWillUnmount() {
    console.log('unmounting')
  }





  increment = () => {
    this.setState({counter : this.state.counter + 1})
  }
  
  render() {
    return (
      <>
        <div>counter : {this.state.counter}</div>
        <button onClick={this.increment}>+</button>
      </>
    )
  }
}

export default Counter
