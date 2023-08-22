import React from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { registerLogin } from '../../api';
import { useHistory } from 'react-router-dom';

export const Login = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [inCorrect, setIncorreact] = useState(false);
 
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password );

      const result = await registerLogin(formData);
      console.log(result);
      setUserId(result.userid);
      setName(result.name);
      localStorage.setItem('userId', result.userid);
        localStorage.setItem('name', result.name);
      // setUserId(result.data.userid);
      console.log(userId);
      if(result.success){
        setStatus(result.data);
        
        console.log(result.userid);
        localStorage.setItem('isLogin', true);
        
        // history.push('/');
        // window.location.reload();
        // window.location.href = '/';
      }else {
        setIncorreact(true);
        console.log(inCorrect);
      }
      
      console.log(status);
      // setUserId(status.data.userid);
    } catch (error) {
      setIncorreact(true);
        console.log(inCorrect);
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
            {inCorrect == true ? <><p style={{color:"red"}}>Email or Password not match</p></> : <></>}
            {/* <p>kjkjjn</p> */}
            <Link to="/forget/otp" className="text-right">Forgot Password</Link>
            <button type="submit" className='button mt-5'>Log in</button>
          </form>
        </div>
      </section>
    </>
  )
}
