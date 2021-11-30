import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Create from './components/Create';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
        <Header />
      <Routes>
        <Route path="/" element={<Home />  } />
        <Route path="/login" element={<Login /> } />
        <Route path="/register" element={<Register /> } />
        <Route path="/add-watch" element={<Create /> } />
        
      </Routes>
  
  
        <Footer />
    </div>
  );
}

export default App;
