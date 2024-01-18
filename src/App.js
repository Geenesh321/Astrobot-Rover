import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Social from './Components/Social/social';
import Navigation from './Components/Nav/Navigation';
import Testimonial from './Components/Testimonial/testimonial';
import Client from './Components/Client/client';
import Footer from './Components/footer/footer';
import Registration from './Components/Registration/registration.jsx';
import Login from './Components/Login/login.jsx';
import Logout from './Components/Logout/logout.jsx';
import Temperature from './Components/Temprature/temperature.jsx';

function App() {
  return (
    <Router>
      <>
        {/* <Navigation /> */}
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/temperature' element={<Temperature />} />
          <Route path="#" element={<Logout />} />
          <Route path="#" element={<Social />} />
          <Route path="#" element={<Testimonial />} />
          <Route path="#" element={<Client />} />
          <Route path="#" element={<Registration />} />
          <Route path="#" element={<Login />} />
          <Route path="#" element={<Footer />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
