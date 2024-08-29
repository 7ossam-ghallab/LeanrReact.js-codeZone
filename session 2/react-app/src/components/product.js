import Button from './Button'

function Product(props) {
  return (
    <div className="product-card">
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <span>{props.price}</span>
      <br/>
      <Button title={props.btn}/>
    </div>
  )
}

export default Product