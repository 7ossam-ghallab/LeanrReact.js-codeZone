import React, { useState } from 'react'

/* const Form = () => {
  const [name, setName] = useState("")
  const [pass, setPass] = useState("")
  const [gender, setgender] = useState("")
  
  const nameHandler = (val) => {
    setName(val)
  }
  const passHandler = (val) => {
    setPass(val)
  }
  const genderHandler = (val) => {
    setgender(val)
  }
  
  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log("form submitted")
        // console.log("name : ", name)
        // console.log("password : ", pass)
        // console.log("gender : ", gender)
        console.log({
          "name" : name,
          "password" :  pass,
          "gender" : gender
        })
      }}>
        <label>Name</label>
        <input type='text' placeholder='your name' onChange={(e) => {
          nameHandler(e.target.value)
        }}/>
        <br />
        <label>Password</label>
        <input type='password' placeholder='your password' onChange={(e) => {
          passHandler(e.target.value)
        }}/>
        <br />
        <label>Gender</label>
        <select onChange={(e) => {
          genderHandler(e.target.value)
        }}>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type='submit'>submit</button>
      </form>
    </>
  )
}
 */

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      pass: '',
      gender: ''
    }
  }

  nameHandler = (val) => {
    this.setState({name : val})
  }
  passHandler = (val) => {
    this.setState({pass : val})
  }
  genderHandler = (val) => {
    this.setState({gender : val})
  }

  render() {
    return (
      <>
        <form onSubmit={(e) => {
          e.preventDefault();
          console.log("form submitted")
          console.log(this.state)
        }}>
          <label>Name</label>
          <input type='text' placeholder='your name' onChange={(e) => {
            this.nameHandler(e.target.value)
          }}/>
          <br />
          <label>Password</label>
          <input type='password' placeholder='your password' onChange={(e) => {
            this.passHandler(e.target.value)
          }}/>
          <br />
          <label>Gender</label>
          <select onChange={(e) => {
            this.genderHandler(e.target.value)
          }}>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <button type='submit'>submit</button>
        </form>
      </>
    )
  }

}
export default Form
