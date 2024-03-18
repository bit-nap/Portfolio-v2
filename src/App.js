import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <Routes>
          <Route path="/Portfolio/" element={<Home />} />
          <Route path="/Portfolio/projects" element={<Projects />} />
          <Route path="/Portfolio/about" element={<About />} />
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
