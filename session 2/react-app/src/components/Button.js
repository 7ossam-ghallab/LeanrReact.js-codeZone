function Button(props) {
  function btnHandler() {
    console.log('Click')
  }
  function mouseEnterHandler() {
    console.log("mouse Enter")
  }
  function mouseLeaveHandler() {
    console.log("mouse Leave")
  }

  return (
    // <button className="react-btn" onClick={() => console.log('hello world')}>
    //   {props.title}
    // </button>
    <button className="react-btn" onClick={btnHandler} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      {props.title}
    </button>
  )
}

export default Button