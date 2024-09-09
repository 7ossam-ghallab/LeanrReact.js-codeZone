import React from 'react'
import { createContext, useState } from "react"

export const productsContext = createContext()


function ProductsProvider(props) {
  const [products, setProducts] = useState([
    {id: 1, title: 'product 1'},
    {id: 2, title: 'product 2'},
    {id: 3, title: 'product 3'}
  ])
  return (
    <productsContext.Provider value={products}>
      {props.children}
    </productsContext.Provider>
  )
}

export default ProductsProvider
