import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles/main.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import User from './pages/User/User';
import Footer from './components/Footer/Footer';
import Error from './pages/Error/Error';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children ? children : <Outlet />;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<SignIn />} />
        <Route element={<PrivateRoute isAuthenticated={true} />}>
          <Route path='/profile' element={<User />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
