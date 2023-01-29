import "./App.css";
//react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Movies from "./pages/Movies";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exaxt path="/" element={<Home />}></Route>
          <Route exaxt path="/movies" element={<Movies />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
