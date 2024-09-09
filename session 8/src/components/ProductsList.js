import React, { useContext } from 'react'
import { productsContext } from '../context/ProductsContext'
import { useRecoilState } from 'recoil'
import productsState from '../atoms/products-atom'



function ProductsList() {
  // const products = useContext(productsContext)
  const [products, setProducts] = useRecoilState(productsState)
  return (
    <div>
      {products.map((product) => <h1 key={product.id}>{product.title}</h1>)}
    </div>
  )
}

export default ProductsList
