import React from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { registerLogin } from '../../api';

export const Login = () => {

  const [isLogin, setIsLogin] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  
  const [status, setStatus] = useState('');
 
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password );

      const result = await registerLogin(formData);
      console.log(result);
      if(result.success){
        localStorage.setItem('isLogin', true);
        window.location.href = '/';
      }
      setStatus(result);
    } catch (error) {
      console.error('Error registering user:', error);
      setStatus('Error registering user.');
    }
  };

  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Login</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <span>Email</span>
            <input type='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <span>Password</span>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <a href="/" className="text-right">Forgot Password</a>
            <button type="submit" className='button mt-5'>Log in</button>
          </form>
        </div>
      </section>
    </>
  )
}
