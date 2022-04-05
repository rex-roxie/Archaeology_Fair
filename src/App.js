import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Video from './Components/Video/Vid';
import Biography from './Components/Bio/Bio';
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
        <Routes>
          <Route path="/video" element={<Video />} />
        </Routes>
        <Routes>
          <Route path="/bio" element={<Biography />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
