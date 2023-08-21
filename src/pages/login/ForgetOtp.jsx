import React from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { Router } from 'react-router-dom';
import { useState } from 'react';
import { forgetOtp } from '../../api';
import { useHistory } from 'react-router-dom';

export const ForgetOtp = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const formData = new FormData();
      // formData.append('name', name);
      formData.append('email', email);
      // formData.append('mobile', mobile);
      // formData.append('address', address);

      const result = await forgetOtp(formData);
      console.log(result);
      localStorage.setItem('email', email);
      if(result.success ){
        // window.location.href = '/register/otp';
        history.push('/forget/verifyotp');
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
              <h3>Register</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
          {/* <span>Name</span>
            <input type='text' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <span>Mobile No.</span>
            <input type='tel' placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)}  required /> */}
            <span>Email</span>
            <input type='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            {/* <span>Address</span>
            <input type='text' placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required /> */}
           
            <button type="submit" className='button'>Proceed</button>
          </form>
        </div>
      </section>
    </>
  )
}
