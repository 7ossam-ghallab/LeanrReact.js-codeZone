import { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import Card from "./components/Card";
import ProductsProvider from "./context/ProductsContext";

// export const productsContext = createContext()

function App() {
  
  return (
    <ProductsProvider>
    {/* <productsContext.Provider value={products}> */}
      <div className="App">
        hello
        {/* <Navbar count={products.length}/> */}
        <Navbar />
        <Navbar.Toggle />
        {/* <ProductsList products={products}/> */}
        <ProductsList />
      
        {/* <Card />
        <Card.Title />
        <Card.Img /> */}
        
        <Card>
          <Card.Title />
          {/* <Card.Img /> */}
        </Card>


      </div>
    {/* </productsContext.Provider> */}
    </ProductsProvider>
  );
}

export default App;
