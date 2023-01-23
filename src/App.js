
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter , Routes, Route }
from "react-router-dom";
import Checkout from "./Checkout";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header></Header>

    <Routes>
   <Route path="/" element={<Home/>}></Route>
   <Route path="/checkout" element={<Checkout></Checkout>}></Route>
    </Routes>
    
    
    </div>
    </BrowserRouter>
  );
}

export default App;
