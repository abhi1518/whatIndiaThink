import React from "react"
import "./login.css"
import back from "../../assets/images/register.jpeg"
import { useState, useEffect } from 'react';
import { registerOtp } from '../../api';
import { useHistory } from 'react-router-dom';

export const RegsiterOtp = () => {
  const history = useHistory();
  const [otp, setOtp] = useState('');
  const [userid, setUserid] = useState('');
  const [status, setStatus] = useState('');
  const [inCorrect, setIncorreact] = useState(false);
 
 

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const formData = new FormData();
      formData.append('userid', userid);
      formData.append('otp', otp);

      const result = await registerOtp(formData);
      console.log(result);
      if(result.success){
        history.push('/register/password');
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
    setUserid(localStorage.getItem('userid'));
  }, []);



  return (
    <>
      <section className='login mt-3'>
        <div className='container'>
        <div>
            <img src={back} alt='' className="back-ground-image"/>
          </div>

          <form onSubmit={handleSubmit}>
          <span>Enter OTP</span>
            <input type='text' placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
            {inCorrect == true ? <><p style={{color:"red"}}>Invalid OTP</p></> : <></>}
            <button type="submit" className='button'>Proceed</button>
          </form>
        </div>
      </section>
    </>
  )
}
