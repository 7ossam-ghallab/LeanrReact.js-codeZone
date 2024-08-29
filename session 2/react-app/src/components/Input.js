import React, { useState } from 'react'

const Input = (props) => {

  const [value, setValue] = useState()

  return (
    <>
      <label>{props.label}</label>
      <input type={props.type} onChange={(e) => {
        // console.log(e.target.value)
        setValue(e.target.value)
      }}/>
      <br/>
      <span>{value}</span>
      <br/>
    </>
  )
}

export default Input
