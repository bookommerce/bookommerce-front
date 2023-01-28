import { BrowserRouter, Routes, Route } from "react-router-dom";
// import BookDetails from "./Components/BookDetails/BookDetails.jsx";
// import Home from './Components/Home/Home';
import SigninPage from "./components/SigninPage/SigninPage";
import SignupPage from "./components/SignupPage/SignupPage";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>

        <Routes>
          <Route path='/' element={<SigninPage />} />
          <Route path='/signup' element={<SignupPage />} />
          {/* <Route path='/home' element={<Home />} />
          <Route path="/book/:idBook" element={<BookDetails />} /> */}
        </Routes>

      </UserProvider>
    </BrowserRouter>
  );
}

export default App;