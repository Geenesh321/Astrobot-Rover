import './login.scss';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import { MdOutlineMail } from "react-icons/md";
import { FiKey } from "react-icons/fi";
import Swal from 'sweetalert2';
import { jwtDecode } from 'jwt-decode'
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate('/registration');
  };

  // State variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending login data to the server
      const response = await axios.post('your-backend-login-endpoint', {
        email,
        password
      });

      // Handle success response here, such as redirecting to dashboard
      console.log('Login successful!', response.data);
    } catch (error) {
      // Handle error response here, such as displaying error message
      console.error('Login failed!', error.response.data);
    }

    // Clear the form fields after submission
    setEmail('');
    setPassword('');
  };




  const [userId, setUserId] = useState()
  const [user, setUser] = useState()
  const fetchUser = async (userId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/user/user/${userId}/`);
      setUser(response.data);
      console.log(response.data)
      localStorage.setItem('currentUser', JSON.stringify(response.data))
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      console.log(formData)
      // Send registration data to the server
      const response = await axios.post('http://127.0.0.1:8000/user/api/login/', formData);
      console.log(response.data)
      console.log(response.status)
      // Display success alert
      if (response.status === 200) {
        console.log(response.data)
        localStorage.setItem('token', response.data.access)
        localStorage.setItem('user', JSON.stringify(jwtDecode(response.data.access)))
        fetchUser(jwtDecode(response.data.access).user_id)
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You have successfully Logged in.!',
        });
        // redirect('/login')
        setEmail('');
        setPassword('');

      }
      else {
        Swal.fire({
          icon: 'Failed',
          title: 'Error ',
          text: 'Email or password does not match',
        });
      }



      // Clear form fields after successful registration



      // You can redirect the user to a login page or dashboard here
    } catch (error) {
      // Display error alert
      Swal.fire({
        icon: 'Failed',
        title: 'Error ',
        text: 'Email or password does not match',
      });

      console.error('Registration failed:', error);
    }
  };





  return (
    <div className="login">
      <div className="left-card">
        <div className="Lheader">
          <img alt="Brand" src={require("../..//Assets/Register/brand.png")} />
        </div>
        <div className="Lbody">
          <img alt="Brand" src={require("../..//Assets/Login/Laptop.png")} />
        </div>
        <div className="Lfooter">
          <p>
            <span className="quote">"Tiny changes can bring about remarkable results."</span><br /><br />
            <span className="author">- James Clear</span>
          </p>
        </div>
      </div>
      <form className="right-card" onSubmit={handleFormSubmit}>
        <div className="Rheader">
          <h3>Log In</h3>
        </div>
        <div className="Rbody">
          <div className="input-icon-wrap">

            <span className="input-icon">
              <MdOutlineMail className="input-icon" />
            </span>

            <input type="text" className="input-with-icon" id="email-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-icon-wrap">
            <span className="input-icon">
              <FiKey className="input-icon" />
            </span>
            <input type="password" className="input-with-icon" id="password-input" placeholder="Password" value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
          </div>
          <div className="password-details">
            <div className="checkbox">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me" className="cursor-pointer">Remember me</label>
            </div>
            <div>
              <span className="cursor-pointer">Forgot Password?</span>
            </div>
          </div>
          <div>
            <button className="btn login-button">Login</button>
          </div>
        </div>

        <div className="register-now">
          <p>Don't have an account? <span className="register-link" onClick={handleRegisterClick} >Register Now</span></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
