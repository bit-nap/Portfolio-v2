import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <HashRouter basename="/Portfolio">
      <div className="App">
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer></Footer>
      </div>
    </HashRouter>
  );
}

export default App;
