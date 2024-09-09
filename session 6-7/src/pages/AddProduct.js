import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  let navigate = useNavigate()

  const formSubmit = (e) => {
    e.preventDefault()

    // console.log(title)
    // console.log(price)

    // fetch('http://localhost:9000/products', {
    //   method : "POST",
    //   headers : {
    //     "Content-Type" : "Application/json"
    //   },
    //   body: JSON.stringify({
    //     title : title,
    //     price : price
    //   })
    // }).then((res) => res.json()).then((data) => console.log(data))

    axios.post("http://localhost:9000/products", {
      title,
      price,
      description,
      category
    })
    .then((data) => {
      console.log(data)
      navigate('/products')
    })
  }

  return (
    <>
      <h2>Add Product</h2>
      <form className="col-6" onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            title
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="enter product title"
            id="title"
            aria-describedby="product title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            price
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="enter product price"
            id="price"
            aria-describedby="product price"
            onChange={(e) => setPrice(+e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            description
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="enter product description"
            id="description"
            aria-describedby="product description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            category
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="enter product category"
            id="category"
            aria-describedby="product category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </>
  );
}

export default AddProduct;
