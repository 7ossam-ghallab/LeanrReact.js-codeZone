import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  const [product, setProduct] = useState()

  let {ProductID} = useParams();
  useEffect(() => {
    fetch(`http://localhost:9000/products/${ProductID}`).then((res) => res.json()).then((data) => {setProduct(data)})
  }, [])
  return (
    <div className='p-4'>
      {product 
      ? 
        <>
        <img src={product.image} width={500}/>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: <strong>{product.price}</strong></p>
        </>
      : 
        <h2 className='text-danger'>Product Not Found</h2>}
    </div>
  )
}

export default ProductDetails
