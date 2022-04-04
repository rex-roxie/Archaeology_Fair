import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Video from './Components/Video/Vid';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Video />
    </div>
  );
}

export default App;
