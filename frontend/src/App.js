import './App.css';
import Header from "./components/Header.js"
import Footer from './components/Footer.js';
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Projects from './pages/Projects.js';


function App() {
  const URL = process.env.REACT_APP_URL || "http://localhost:4000/";

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects URL={URL}/>} />
        <Route path="/about" element={<About URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
