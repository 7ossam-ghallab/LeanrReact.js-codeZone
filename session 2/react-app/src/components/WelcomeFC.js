import { useState } from "react";

function Welcome(props) {
  console.log(props)
  let [counter, setCounter] = useState(0)
  return(
    <>
      <h1>hello, {props.name}</h1>
      <p>age : {props.age}</p>
      <p>tilte : {props.title}</p>
      <h6>{counter}</h6>
      <button onClick={() => {  
        setCounter(++counter)
      }}>
        +
      </button>
    </>
  )
}

export default Welcome;