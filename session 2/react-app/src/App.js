import './App.css';
import SayWelcomeFC from './components/WelcomeFC';
import SayWelcomeCC from './components/welcomeCC';
import Product from './components/product';
import Button from './components/Button';
import Input from './components/Input';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      
      {/* <SayWelcomeFC name="hossam" age="20" title="js dev"/>
      <SayWelcomeFC name="ahmed" age="30" title="C# dev"/>
      <SayWelcomeFC name="mohamed" age="40" title="MERN dev"/> */}
        
      {/* <SayWelcomeCC name="hamada"/>
      <SayWelcomeCC name="sameh"/> */}
      
      
      {/* <Product title="product-1" desc="this is product-one" price="200" btn="click"/>
      <Product title="product-2" desc="this is product-two" price="60" btn="click"/>
      <Product title="product-3" desc="this is product-three" price="140" btn="click"/> */}
    
      {/* <Button title="click"/> */}

      {/* <Input label={"Name"} type={"text"}/>
      <Input label={"Password"} type={"password"}/> */}
    
      <Form />
    </div>
  );
}

export default App;
