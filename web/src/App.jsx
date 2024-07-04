import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Cache from "./pages/cache";
import Category from "./pages/category";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="pt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cache" element={<Cache />} />
            {/* <Route path="/category" element={<Category />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
