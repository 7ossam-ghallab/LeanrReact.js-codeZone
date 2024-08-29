import { useState } from "react";
import Welcome from "./components/Welcome";
import Guest from "./components/Guest";
import List from "./components/List";
import ProductsList from "./components/ProductsList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // let element;
  // if(isLoggedIn) {
  //   element = <h1>i'm LoggedIn</h1>
  // } else {
  //   element = <h1>i'm not LoggedIn</h1>
  // }

  // let element = isLoggedIn ? <h1>i'm LoggedIn</h1> : <h1>i'm not LoggedIn</h1>;
  return (
    // <div className="App">
    //   <button onClick={() => setIsLoggedIn(true)}>login</button>
    //   {/* {element} */}
    //   {/* {isLoggedIn ? <Welcome name={'hossam'}/> : <Guest />} */}
    //   {isLoggedIn ? <Welcome name={'hossam'}/> : null}
    //   <List />
    // </div>
    <ProductsList />
  );
}

export default App;
