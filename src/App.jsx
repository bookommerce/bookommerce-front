import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookDetails from "./Components/BookDetails/BookDetails.jsx";
import Home from './Components/Home/Home';
import SigninPage from "./components/SigninPage/SigninPage";
import SignupPage from "./components/SignupPage/SignupPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SigninPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/home' element={<Home />} />
          <Route path="/book/:idBook" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;