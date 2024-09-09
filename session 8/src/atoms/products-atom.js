import { atom } from "recoil";

const productsState = atom({
  key: 'productState',
  default: [
    {id: 1, title: 'product 1'},
    {id: 2, title: 'product 2'},
    {id: 3, title: 'product 3'}
  ]
})

export default productsState