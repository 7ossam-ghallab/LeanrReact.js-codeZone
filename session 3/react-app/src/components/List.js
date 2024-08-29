import React from 'react'

const List = () => {
  const arr = [{id:1, name:'html'}, {id: 2, name:'css'}, {id: 3, name:'js'}, {id: 4, name:'react'}]
  const li = arr.map((el) => {
    return <li key={el.id}>{el.name}</li>
  })
  // console.log(li)
  return (
    <ul>
      <li>html</li>
      <li>css</li>
      <li>js</li>
      <br/>
      {li}
      <br/>
      {arr.map((el, i) => <li key={i + arr.length}>{el.name}</li>)}
    </ul>
  )
}

export default List
