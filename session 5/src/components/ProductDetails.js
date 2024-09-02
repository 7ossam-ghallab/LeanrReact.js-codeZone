import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductPage from './ProductPage'

function ProductDetails() {
  const params = useParams()
  const [product, setProduct] = useState([])
  const api_url = 'https://fakestoreapi.com/products'

  useEffect(() => {
    fetch(`${api_url}/${params.productID}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setProduct(data)
      })
  }, [])
  // console.log(params)
  return (
    <div className='container'>
      {/* <h1>Product Details {params.productID}</h1> */}
      <ProductPage data={product} />
    </div>
  )
}

export default ProductDetails
