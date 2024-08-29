import React from 'react'
import productsData from '../products-data'
import Product from './Product'
import './productsList.css'


const ProductsList = () => {
  // console.log(productsData)
  const products = productsData.map((product) => {
    return (
      // <div className='card' key={product.id}>
      //   {/* <Product title={product.title} image={product.image} description={product.description}/> */}
      //   <Product product={product}/>
      // </div>

      // product.price > 100 ? <div className='card' key={product.id}><Product product={product}/></div> : null

      product.price > 100 && <div className='card' key={product.id}><Product product={product}/></div>
    )
  })
  return (
    <div className='products-list'>
      {products}
    </div>
  )
}

export default ProductsList
