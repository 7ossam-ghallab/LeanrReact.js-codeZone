import React, { useEffect, useState } from 'react'
import Product from './Product'

function ProductsList() {
  const api_url = 'https://fakestoreapi.com/products'
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  const getProducts = () => {
    fetch(api_url)
      .then(res=>res.json())
      .then(data=>setProducts(data))
  }
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then(res=>res.json())
      .then(data=>setCategories(data))
  }

  const get_category = (catName) => {
    fetch(`${api_url}/category/${catName}`)
      .then(res=>res.json())
      .then(data=>setProducts(data))
  }

  useEffect(() => {
    getProducts()
    getCategories()
  }, [])

  return (
    <div>
      <h2 className='text-center p-5'>Our Products</h2>
      <div className='container'>
        <div className='categories d-flex mb-4 justify-content-center gap-2'>
          <div>
            <button className='btn btn-light' onClick={() => {
              getProducts()
            }}>All</button>
          </div>
          {categories.map((category) => {
            return (
              <div key={category}>
                <button className='btn btn-light' onClick={() => {
                  get_category(category)
                }}>{category}</button>
              </div>
            )
          })}
        </div>

        <div className='row'>
          {products.map((product) => {
            return (
              <div className='col-4' key={product.id}>
                <Product product={product}/>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default ProductsList
