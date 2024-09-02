import React, { useState, useEffect } from 'react'

function CounterFC() {
  const [counter, setCounter] = useState(0)
  const [product, setProduct] = useState(0)

  // useEffect(() => {
  //   document.title = `you have clicked ${counter} times`
  // })

  // useEffect(() => {
  //   setCounter(counter + 1)
  // }, [])

  useEffect(() => {
    console.log('here')
    return(() => {
      console.log('unmounting')
    })
  }, [counter])


  return (
    <>
      <div>counter : {counter}</div>
      <div>product : {product}</div>
      <button onClick={() => setCounter(counter+1)}>+</button>
      <button onClick={() => setProduct(product+1)}>+</button>
    </>
  )
}

export default CounterFC
