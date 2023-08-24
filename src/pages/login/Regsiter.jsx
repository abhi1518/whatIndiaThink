import React from "react"
import "./login.css"
import back from "../../assets/images/register.jpeg"
import { Router } from 'react-router-dom';
import { useState } from 'react';
import { registerUser } from '../../api';
import { useHistory } from 'react-router-dom';

export const Regsiter = () => {
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
      formData.append('name', name);
      formData.append('email', email);
      formData.append('mobile', mobile);
      formData.append('address', address);

      const result = await registerUser(formData);
      console.log(result);
      localStorage.setItem('userid', result.userid);
      if(result.status){
        // window.location.href = '/register/otp';
        history.push('/register/otp');
      }
      setStatus(result);
    } catch (error) {
      console.error('Error registering user:', error);
      setStatus('Error registering user.');
    }
  };
  

   

  return (
    <>
      <section className='login mt-3'>
        <div className='container'>
          <div>
            <img  src={back} alt='' className="mt-1 back-ground-image" />
          </div>

          <form onSubmit={handleSubmit}>
          <span>Name</span>
            <input type='text' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <span>Mobile No.</span>
            <input type='tel' placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)}  required />
            <span>Email</span>
            <input type='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <span>Pin Code</span>
            <input type='text' placeholder="Pin Code" value={address} onChange={(e) => setAddress(e.target.value)} required />
           
            <button type="submit" className='button'>Proceed</button>
          </form>
        </div>
      </section>
    </>
  )
}
