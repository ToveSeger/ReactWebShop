import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/Home/HomePage';
import CartPage from './pages/Cart/CartPage';
import { Footer } from "./components/footer/Footer";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import ThankYouPage from "./pages/ThankYou/ThankYouPage";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/checkout" element={<CheckoutPage/>}/>
          <Route path="/thankyou" element={<ThankYouPage/>}/>
      </Routes>
      <Footer/>
  </>
  );
}

export default App;
