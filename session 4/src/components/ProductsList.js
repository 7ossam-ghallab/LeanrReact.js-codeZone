import React, { useEffect, useState } from 'react'
import Product from './Product'
import './productsList.css'


const ProductsList = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  const productsData = products.map((product) => {
    return (
      product.price > 100 && <div className='card' key={product.id}><Product product={product}/></div>
    )
  })
  return (
    <div className='products-list'>
      {products.length === 0 ? <h1>Loading...</h1> : productsData}
    </div>
  )
}

export default ProductsList
