import React from 'react';

class welcome extends React.Component {
  // old
  constructor(props) {
    console.log('constructor phase')
    super(props);
    this.state = {
      firstName: "hossam",
      lastName: "ghallab"
    }

    this.changeName1 = this.changeName1.bind(this)
  }
  // new
  /* state = { 
    firstName: "hossam",
    lastName: "ghallab"
  } */


  changeName1() {
    console.log(this)
    this.setState ({
      lastName : 'said'
    })
  }

  changeName2 = () => {
    console.log(this)
    this.setState ({
      lastName : 'ahmed'
    })
  }



  render() {
    // Error (infinite loop)
    /* this.setState ({
      lastName : 'motea'
    }) */
    console.log('render phase')
    console.log(this.props)
    console.log(this.state)
    return (
      <>
        <h1>Hello Class Component, {this.props.name}</h1>
        <p>created by, {this.state.firstName} {this.state.lastName}</p>
        <button onClick={this.changeName1}>
          change last name with bind
        </button>
        <button onClick={this.changeName2}>
          change last name with arrow function
        </button>
      </>
    )
  }

  componentDidMount() {
    // if i set the setState in render it will throw an error happen
    this.setState ({
      lastName : 'motea'
    })
    console.log('componentDidMount phase')
  }
}

export default welcome;