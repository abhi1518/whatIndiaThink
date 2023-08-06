import React from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { useState, useEffect } from 'react';
import { registerOtp } from '../../api';

export const RegsiterOtp = () => {

  const [otp, setOtp] = useState('');
  const [userid, setUserid] = useState('');
  const [status, setStatus] = useState('');
 

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const formData = new FormData();
      formData.append('userid', userid);
      formData.append('otp', otp);

      const result = await registerOtp(formData);
      console.log(result);
      if(result.success){
        window.location.href = '/register/password';
      }
      setStatus(result);
    } catch (error) {
      console.error('Error registering user:', error);
      setStatus('Error registering user.');
    }
  };

  useEffect(() => { 
    setUserid(localStorage.getItem('userid'));
  }, []);



  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Register</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
          <span>Enter Otp!</span>
            <input type='text' placeholder="Otp" value={otp} onChange={(e) => setOtp(e.target.value)} required />
           
            <button type="submit" className='button'>Proceed</button>
          </form>
        </div>
      </section>
    </>
  )
}
