import React from 'react'

function ProductPage(props) {
  // console.log(props)
  // console.log(props.data)
  const {data} = props
  return (
    <div className='container p-4 border border-3 border-light mt-5 rounded'>
      <div className='d-flex justify-content-between align-items-center' style={{gap: 50}} >
        <div className='image m-auto'>
          <img src={data.image} style={{maxHeight: '400px', width: '100%'}} alt="product"/>
        </div>
        <div className='data' style={{width: '60%'}}>
          <h3>{data.title}</h3>
          <br/>
          <p>{data.description}</p>
          <br/>
          <p>price: {data.price}$</p>
          <button className='btn btn-dark'>buy now</button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
