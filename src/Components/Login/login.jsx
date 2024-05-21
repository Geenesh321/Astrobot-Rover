import './login.scss';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { MdOutlineMail } from "react-icons/md";
import { FiKey } from "react-icons/fi";
import Swal from 'sweetalert2';
import { jwtDecode } from 'jwt-decode';  
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/registration');
  };

  // Schema for form validation using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  // Function to handle form submission
  const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/user/api/login/', values);

      if (response.status === 200) {
        localStorage.setItem('token', response.data.access);
        localStorage.setItem('user', JSON.stringify(jwtDecode(response.data.access)));
        fetchUser(jwtDecode(response.data.access).user_id);

        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You have successfully logged in!',
        });

        navigate('/Landing');
        resetForm();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Email or password does not match',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Email or password does not match',
      });
      console.error('Login failed:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const fetchUser = async (userId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/user/user/${userId}/`);
      localStorage.setItem('currentUser', JSON.stringify(response.data));
    } catch (error) {
      console.error('Error fetching user details:', error);
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
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="right-card">
            <div className="Rheader">
              <h3>Log In</h3>
            </div>
            <div className="Rbody">
              <div className="input-icon-wrap">
                <span className="input-icon">
                  <MdOutlineMail className="input-icon" />
                </span>
                <Field type="text" name="email" className="input-with-icon" id="email-input" placeholder="Email" />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>
              <div className="input-icon-wrap">
                <span className="input-icon">
                  <FiKey className="input-icon" />
                </span>
                <Field type="password" name="password" className="input-with-icon" id="password-input" placeholder="Password" />
                <ErrorMessage name="password" component="div" className="error-message" />
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
                <button type="submit" className="btn login-button" disabled={isSubmitting}>Login</button>
              </div>
            </div>
            <div className="register-now">
              <p>Don't have an account? <span className="register-link" onClick={handleRegisterClick}>Register Now</span></p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
