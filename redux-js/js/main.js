console.log(Redux)
console.log(ReduxThunk)

const WITHDRAW_MONEY = "WITHDRAW_MONEY"
const DEPOSITE_MONEY = "DEPOSITE_MONEY"

const ADD_PRODUCT = 'ADD_PRODUCT'
const GET_PRODUCTS = 'GET_PRODUCTS'


// Action Creators
const withdraw = (amount) => {
  return {
    type : WITHDRAW_MONEY,
    payload : amount
  }
}
const depositeite = (amount) => {
  return {
    type : DEPOSITE_MONEY,
    payload : amount
  }
}
const addProduct = (product) => {
  return {
    type : ADD_PRODUCT,
    payload : product
  }
}

const getProducts = (products) => {
  return {
    type: GET_PRODUCTS,
    payload: products
  }
}

const fetchProducts = () => {
  return async (dispatch) => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json();
    console.log(data)
    dispatch(getProducts(data))
  }
}

// const action = {
//   type : 'WITHDRAW_MONEY'
// }
// const action2 = {
//   type : 'DEPOSITE_MONEY'
// }

const bankReducer = (state = 1000, action) => {
  switch (action.type) {
    case WITHDRAW_MONEY :
      // return state - 100
      return state - action.payload
    case DEPOSITE_MONEY :
      // return state + 100
      return state + action.payload
    default : 
      return state
  }
}

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT :
      return [...state, action.payload]
    case GET_PRODUCTS :
      return [...action.payload]
    default : 
      return state
  }
}

// const store = Redux.createStore(reducer)
// const store = Redux.createStore(bankReducer, productsReducer) // ERROR
const appReducer = Redux.combineReducers({
  bank: bankReducer,
  products: productsReducer
})
const store = Redux.createStore(appReducer, Redux.applyMiddleware(ReduxThunk))

console.log(store)
store.dispatch(addProduct({id:1, title: 'product-1'}))
console.log(store.getState())

// store.dispatch(action) // -100
// store.dispatch(action) // -100
// store.dispatch(action2) // +100

// store.dispatch(withdraw(100))
// store.dispatch(withdraw(200))
// store.dispatch(deposite(1000))


console.log(store.getState())
let amountInput = document.querySelector("#amount")
let amountVal = document.querySelector("#value")
amountVal.innerHTML = store.getState().bank

document.querySelector('#withdraw').addEventListener('click', () => {
  store.dispatch(withdraw(+amountInput.value))
})
document.querySelector('#deposite').addEventListener('click', () => {
  store.dispatch(deposite(+amountInput.value))
})

store.subscribe(() => {
  console.log("CURRENT STATE", store.getState())
  amountVal.innerHTML = store.getState().bank
})