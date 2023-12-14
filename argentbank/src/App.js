import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/main.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import User from './pages/User/User';
import Footer from './components/Footer/Footer';
import Error from './pages/Error/Error';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/user' element={<User />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
