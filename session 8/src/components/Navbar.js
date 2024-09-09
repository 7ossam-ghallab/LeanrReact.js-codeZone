import React, { useContext } from 'react'
import { productsContext } from '../context/ProductsContext'
import productsState from '../atoms/products-atom'
import { useRecoilState } from 'recoil'

function Navbar(props) {
  // const value = useContext(productsContext)
  // console.log(value)
  const [products, setProducts] = useRecoilState(productsState)

  return (
    <div>
      {/* <h1>products count: {props.count}</h1> */}
      <h1>products count: {products.length}</h1>
    </div>
  )
}

Navbar.Toggle = function() {
  return(
    <h1>Toggle</h1>
  )
}

export default Navbar
