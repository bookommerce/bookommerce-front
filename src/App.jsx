import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./Components/CartPage/CartPage.jsx";
import SigninPage from "./Components/SigninPage/SigninPage.jsx";
// import BookDetails from "./Components/BookDetails/BookDetails.jsx";
// import Home from './Components/Home/Home';
import SignupPage from "./Components/SignupPage/SignupPage.jsx";
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
          {/* <Route path='/home' element={<Home />} />
          <Route path="/book/:idBook" element={<BookDetails />} /> */}
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;