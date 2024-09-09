import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

function Products() {

  const [products, setProducts] = useState([])

  const getAllProducts = () => {
    fetch('http://localhost:9000/products').then((res) => res.json()).then((data) => {setProducts(data)})
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  const deleteProduct = (product) => {
    Swal.fire({
      title : `are you sure to delete ${product.title}`,
      showCancelButton: true
    }).then((data) => {
      // console.log(data)
      if(data.isConfirmed) {
        fetch(`http://localhost:9000/products/${product.id}`, {
          method: "DELETE"
        }).then((res) => res.json()).then((data) => getAllProducts())
      }
    })
  }

  return (
    <>
      <h2>Products Page</h2>
      <Link className='btn btn-success mt-3' to='/products/add'>Add new product</Link>
      <table className="table table-striped mt-5">

        <thead>
          <tr>
            <td>id</td>
            <td>Name</td>
            <td>Category</td>
            <td>Price</td>
            <td>operations</td>
          </tr>
        </thead>
        <tbody>

          {
            products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td className='d-flex gap-2'>
                    <button className='btn btn-danger btn-sm' onClick={() => deleteProduct(product)}>Delete</button>
                    <Link className='btn btn-secondary btn-sm' to={`${product.id}`}>view</Link>
                    <button className='btn btn-primary btn-sm'>Edit</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>

      </table>
    </>
  )
}

export default Products
