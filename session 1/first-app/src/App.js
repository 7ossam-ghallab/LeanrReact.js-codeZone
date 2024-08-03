import Greeting from "./components/Greeting";

function App() {
  const My_name = '';
  // const tag = <h1>hello, {My_name}</h1>
  
  function greeting(name) {
    if(name) {
      return <h2>hello, {name}</h2>
    }
    return <h2>hello, Guest</h2>
  }

  return (
    <div className="App">
      <h1>hello World</h1>
      {/* {tag} */}
      {greeting(My_name)}
      <Greeting/>
    </div>


    // ERROR
    // <div className="test">
    //   <h1>hello World</h1>
    //   {/* {tag} */}
    //   {greeting(My_name)}
    // </div>


    // <>
    //   <div className="app">
    //   <h1>hello World form div app</h1>
    //   </div>
    //   <div className="test">
    //   <h1>hello World form div test</h1>
    //   </div>
    // </>
  );
}

export default App;
