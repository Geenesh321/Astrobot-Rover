import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Navigation from './Components/Nav/Navigation';
import Registration from './Components/Registration/registration.jsx';
import Login from './Components/Login/login.jsx';
import Logout from './Components/Logout/logout.jsx';
import Temperature from './Components/Temprature/temperature.jsx';
import Moist from './Components/Moist/moist.jsx';
import Live from './Components/Live/live.jsx';
import NavBar from './Components/NavBar/bar.jsx';


function App() {
  return (
    <Router>
      <>
        <Navigation />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/temperature' element={<Temperature />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="registration" element={<Registration />} />
          <Route path='/moist' element={<Moist />} />
          <Route path='/live' element={<Live />} />
          <Route path='/bar' element={<NavBar />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </>
    </Router>
  );
}

export default App;
