import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookDetails from "./Components/BookDetails/BookDetails";
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path="/book/:idBook" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;