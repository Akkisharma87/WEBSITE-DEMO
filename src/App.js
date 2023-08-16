import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Navbar from "./Components/Navbar";
import OurHistory from "./Pages/OurHistory";

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
