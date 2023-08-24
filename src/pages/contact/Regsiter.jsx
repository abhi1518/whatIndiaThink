import React from "react"
import back from "../../assets/images/contact.jpeg"
import { contactUs } from '../../api';
import { useState} from 'react';


export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('address');
  const [message, setMessage] = useState('');
  const [pin, setPin] = useState('');
  
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
      formData.append('pincode', pin);

      const result = await contactUs(formData);
      console.log(result);
      if(result.status){
        // localStorage.setItem('isLogin', true);
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
        <div>
            <img  src={back} alt='' className="mt-3 back-ground-image" />
          </div>

          <form onSubmit={handleSubmit}>
            <span>Name</span>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} required />
            <span>Mobile No. </span>
            <input type='text' value={mobile} onChange={(e) => setMobile(e.target.value)} required />
            <span>Email address</span>
            <input type='text' value={email} onChange={(e) =>  setEmail(e.target.value)} required />
            {/* <span>Address</span>
            <input type='text' value={address} onChange={(e) =>  setAddress(e.target.value)} required /> */}
            <span>Pin Code</span>
            <input type='text' value={pin} onChange={(e) => setPin(e.target.value)} required />
            <span>Message</span>
            <input type='text' value={message} onChange={(e) => setMessage(e.target.value)} required />
            <button type="submit" className='button'>Proceed</button>
          </form>
        </div>
      </section>
    </>
  )
}
