import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/Home/HomePage';
import CartPage from './pages/Cart/CartPage';
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
      </Routes>
      <Footer/>
  </>
  );
}

export default App;
