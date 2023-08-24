import React from "react"
import "./login.css"
import back from "../../assets/images/login.jpeg"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { registerLogin } from '../../api';
import { useHistory } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

export const Login = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [inCorrect, setIncorreact] = useState(false);
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Prevent the default form submission behavior

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
        setLoading(false);
        setStatus(result.data);
        
        console.log(result.userid);
        localStorage.setItem('isLogin', true);
        
        history.push('/');
        window.location.reload();
        // window.location.href = '/';
      }else {
        setIncorreact(true);
        console.log(inCorrect);
      }
      
      console.log(status);
      // setUserId(status.data.userid);
    } catch (error) {
      setLoading(false);
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
        <div>
            <img src={back} alt=''  className="mt-3 back-ground-image"/>
          </div>

          <form onSubmit={handleSubmit}>
            <span>Email</span>
            <input type='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <span>Password</span>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            {inCorrect == true ? <><p style={{color:"red"}}>Email or Password not match</p></> : <></>}
            {/* <p>kjkjjn</p> */}
            <Link to="/forget/otp" className="text-right">Forgot Password</Link>
            <button type="submit" className={` button mt-5 loading-button ${loading ? 'loading' : ''}`} disabled={loading}>
            {loading ? (
          <TailSpin className="text-center" style={{margin:"200px" , paddingLeft:"100px"}} color="#FFFFFF" height={20} width={20}  />
        ) : (
          'Log in'
        )}</button>
          </form>
        </div>
      </section>
    </>
  )
}
