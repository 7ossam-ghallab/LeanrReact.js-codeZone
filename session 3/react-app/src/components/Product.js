import React from 'react'

const Product = (props) => {
  return (
    <>
      {/* <img src={props.image} />
      <h1>{props.title}</h1>
      <p>{props.description}</p> */}
      
      <img src={props.product.image} height={150}/>
      <h1>{props.product.title}</h1>
      <p>{props.product.description}</p>
      <p>price : {props.product.price}</p>
      <button onClick={() => console.log('you are going to buy this product', props.product.price)}>Buy</button>
    </>
  )
}

export default Product
