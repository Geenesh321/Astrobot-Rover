import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Registration from './Components/Registration/registration.jsx';
import Login from './Components/Login/login.jsx';
import Logout from './Components/Logout/logout.jsx';
import Temperature from './Components/Temprature/temperature.jsx';
import Moist from './Components/Moist/moist.jsx';
import Live from './Components/Live/live.jsx';
import NavBar from './Components/NavBar/bar.jsx';
import NetLink from './Components/Netlink/netlink.jsx';
import Post from './Components/Netlink/Post/post.jsx'
import Nav from './Components/Nav/Navigation.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Landing' element={<Landing />} />
        <Route path='/temperature' element={<Temperature />} />
        <Route path="registration" element={<Registration />} />
        <Route path='/moist' element={<Moist />} />
        <Route path='/live' element={<Live />} />
        <Route path='/bar' element={<NavBar />} />
        <Route path='/netlink' element={<NetLink />} />
        <Route path='/post' element={<Post />} />
        <Route path='/nav' element={<Nav />} />
        <Route path='/Logout' element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
