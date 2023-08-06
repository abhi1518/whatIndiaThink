import React from "react"
import back from "../../assets/images/my-account.jpg"
import { contactUs } from '../../api';
import { useState} from 'react';


export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  
  const [Status, setStatus] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email );
      formData.append('mobile', mobile);
      formData.append('address', address );
      formData.append('message', message);

      const result = await contactUs(formData);
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
              <h3>Contact Us</h3>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <span>Name</span>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} required />
            <span>Mobile No.</span>
            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} required />
            <span>Email address</span>
            <input type='text' value={mobile} onChange={(e) => setMobile(e.target.value)} required />
            <span>Address</span>
            <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} required />
            <span>Message</span>
            <input type='text' value={message} onChange={(e) => setMessage(e.target.value)} required />
            <button type="submit" className='button'>Proceed</button>
          </form>
        </div>
      </section>
    </>
  )
}
