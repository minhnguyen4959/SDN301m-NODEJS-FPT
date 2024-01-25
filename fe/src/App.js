import logo from './logo.svg';
import './App.css';
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from './components/Product';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          {/* <Route path="/products" element={<List />}></Route> */}
          <Route path="/products" element={<Products />}></Route>
          {/* <Route path="/product/detail/:pid" element={<Detail />}></Route> */}
          {/* <Route path="/product/add" element={<Create />}></Route> */}
          {/* <Route path="/product/edit/:pid" element={<Edit />}></Route> */}  
          {/* <Route path="/posts" element={<Posts />}></Route> */}
          {/* <Route path="/todos" element={<Todo />}></Route> */}
          {/* <Route path="/login" element={<Login />}></Route> */}
          {/* <Route path="/register" element={<Register />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
