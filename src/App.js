import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Activities from "./pages/Activities";
import Transcript from "./pages/Transcript";
import Contact from "./pages/Contact";

import "./App.css";


function App() {
  return (
    <Router>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/activities" element={<Activities/>}/>
        <Route path="/transcript" element={<Transcript/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

    </Router>
  );
}

export default App;