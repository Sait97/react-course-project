import { Routes, Route } from 'react-router-dom';
import './App.css';

import useLocalStorage from './hooks/useLocalStorage';
import { AuthContext } from './contexts/AuthContext';

import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
import Register from './components/Auth/Register';
import Create from './components/Create';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Watches from './components/Watches/Watches';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import NotFound from './components/NotFound/NotFound';
import Wishlist from './components/Wishlist/Wishlist';
const initialAuthState = {
  _id: '',
  email: '',
  accessToken: '',
};
function App() {
  const [user, setUser] = useLocalStorage('user', initialAuthState);

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
        <Route path="*" element={<NotFound />  } />
        <Route path="/" element={<Home />  } />
        <Route path="/login" element={<Login /> } />
        <Route path="/logout" element={<Logout /> } />
        <Route path="/register" element={<Register /> } />
        <Route path="/watches" element={<Watches /> } />
        <Route path="/details/:watchId" element={<Details /> } />
        <Route path="/edit/:watchId" element={<Edit /> } />
        <Route path="/add-watch" element={<Create /> } />
        <Route path="/wishlist" element={<Wishlist /> } />
        
      </Routes>
  
  
        <Footer />
    </div>
  </AuthContext.Provider>
  );
}

export default App;
