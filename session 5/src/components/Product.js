import React from 'react'
import { Link } from 'react-router-dom'

function Product(props) {
  const {product} = props

  return (
    <>
      <div className="card">
        <img src={product.image} className="card-img-top" alt="product"/>
        <div className="card-body">
          <h5 className="card-title" alt={product.title}>{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <Link to={`/product/${product.id}`} className="btn btn-primary" style={{width: '100%'}}>Go Details</Link>
        </div>
      </div>
    </>
  )
}

export default Product
