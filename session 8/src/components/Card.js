import React from 'react'

function Card(props) {
  // console.log(props)
  return (
    <>
      <div>Card</div>
      {props.children}
    </>
  )
}

Card.Title = function() {
  return (
    <p>CARD TITLE</p>
  )
}


Card.Img = function() {
  return (
    <p>CARD IMGAE</p>
  )
}

export default Card
