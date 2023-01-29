import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookDetails from "./Components/BookDetails/BookDetails.jsx";
import Category from "./Components/Category/Category.jsx";
import Checkout from "./Components/Checkout/Checkout.jsx";
import Home from './Components/Home/Home';
import SigninPage from "./Components/SigninPage/SigninPage.jsx";
import SignupPage from "./Components/SignupPage/SignupPage.jsx";
import CartPage from "./Components/CartPage/CartPage.jsx";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [user, setUser] = useState(undefined)
  const [token, setToken] = useState(undefined)

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser, token, setToken }}>
        <Routes>
          <Route path='/' element={<SigninPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/category/:category?' element={<Category />} />
          <Route path="/book/:idBook" element={<BookDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;