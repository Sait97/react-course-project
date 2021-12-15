import { Routes, Route } from 'react-router-dom';
import './App.css';


import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';

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
import Notification from './components/Common/Notification/Notification';
import PrivateRoute from './components/Common/PrivateRoute';
import MyProfile from './components/MyProfile/MyProfile';



function App() {


  return (
  <AuthProvider >
    <NotificationProvider>

    <div className="App">
        <Header />
        <Notification />
        <Routes>
        <Route path="*" element={<NotFound />  } />
        <Route path="/" element={<Home />  } />
        <Route path="/login" element={<Login /> } />
        <Route path="/logout" element={<Logout /> } />
        <Route path="/register" element={<Register /> } />
        <Route path="/watches" element={<Watches /> } />
        <Route path="/details/:watchId" element={<Details /> } />
        
       
        <Route element={<PrivateRoute />}>
            <Route path="/edit/:watchId" element={<Edit /> } />
            <Route path="/add-watch" element={<Create /> } />
            <Route path="/wishlist" element={<Wishlist /> } />
            <Route path="/my-profile" element={<MyProfile /> } />
        </Route>

      </Routes>
  
  
        <Footer />
    </div>
    </NotificationProvider>
  </AuthProvider>
  );
}

export default App;
