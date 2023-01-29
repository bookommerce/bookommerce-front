import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookDetails from "./Components/BookDetails/BookDetails.jsx";
import Category from "./Components/Category/Category.jsx";
import Checkout from "./Components/Checkout/Checkout.jsx";
import Home from './Components/Home/Home';
import SigninPage from "./Components/SigninPage/SigninPage.jsx";
import SignupPage from "./Components/SignupPage/SignupPage.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SigninPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/category/:category?' element={<Category />} />
          <Route path="/book/:idBook" element={<BookDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;