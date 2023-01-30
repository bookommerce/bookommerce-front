import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import BookDetails from "./Components/BookDetails/BookDetails.jsx";
// import Home from './Components/Home/Home';
import SigninPage from "./components/SigninPage/SigninPage.jsx";
import SignupPage from "./components/SignupPage/SignupPage.jsx";
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
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;