import './App.css';
import ProductCard from "./components/productCard/ProductCard";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/Home/HomePage';
import CartPage from './pages/Cart/CartPage';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
      </Routes>
  </>
  );
}

export default App;
