import React from "react"
import "./login.css"
import back from "../../assets/images/forget.jpeg"
import { useState, useEffect } from 'react';
import { forgetVerifyOtp } from '../../api';
import { useHistory } from 'react-router-dom';

export const ForgetVerifyOtp = () => {
  const history = useHistory();
  const [otp, setOtp] = useState('');
  const [userid, setUserid] = useState('');
  const [status, setStatus] = useState('');
  const [inCorrect, setIncorreact] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const formData = new FormData();
      formData.append('email', userid);
      formData.append('otp', otp);

      const result = await forgetVerifyOtp(formData);
      console.log(result);
      if(result.success){
        history.push('/forget/password');
        // window.location.href = '/register/password';
      } else {
        setIncorreact(true);
        console.log(inCorrect);
      }
      setStatus(result);
    } catch (error) {
      setIncorreact(true);
        console.log(inCorrect);
      console.error('Error registering user:', error);
      setStatus('Error registering user.');
    }
  };

  useEffect(() => { 
    setUserid(localStorage.getItem('email'));
  }, []);



  return (
    <>
      <section className='login'>
        <div className='container'>
        <div>
            <img  src={back} alt='' className="mt-3 back-ground-image" />
          </div>  

          <form onSubmit={handleSubmit}>
          <span>Enter OTP</span>
            <input type='text' placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
            {inCorrect == true ? <><p style={{color:"red"}}>Invalid Otp</p></> : <></>}
            <button type="submit" className='button'>Proceed</button>
          </form>
        </div>
      </section>
    </>
  )
}
