import { Routes, Route } from 'react-router-dom';


import './App.css';
import { AuthContext } from './contexts/AuthContext';
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
import Register from './components/Auth/Register';
import Create from './components/Create';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { useState } from 'react';
import Watches from './components/Watches/Watches';
import Details from './components/Detail/Details';

const initialAuthState = {
  _id: '',
  email: '',
  accessToken: '',
};
function App() {
  const [user, setUser] = useState('user', initialAuthState);

  const login = (authData) => {
    setUser(authData);
  }
  const logout = () => {
    setUser(initialAuthState);
  };

  return (
  <AuthContext.Provider value={{user, login, logout}}>

    <div className="App">
        <Header />
      <Routes>
        <Route path="/" element={<Home />  } />
        <Route path="/login" element={<Login /> } />
        <Route path="/logout" element={<Logout /> } />
        <Route path="/register" element={<Register /> } />
        <Route path="/watches" element={<Watches /> } />
        <Route path="/details/:watchId" element={<Details /> } />
        <Route path="/add-watch" element={<Create /> } />
        
      </Routes>
  
  
        <Footer />
    </div>
  </AuthContext.Provider>
  );
}

export default App;
