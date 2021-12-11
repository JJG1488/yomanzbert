// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header/Header';
import NavTabs from './components/NavTabs/NavTabs';
import About from './components/pages/About/About';
import Home from './components/pages/Home/Home';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router basename="/">
        <NavTabs />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </header>

    </div>
  );
}

export default App;
