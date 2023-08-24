import React from "react";
import "./login.css";
import back from "../../assets/images/register.jpeg"
import { useState, useEffect } from 'react';
import { registerPassword } from '../../api';
import { useHistory } from 'react-router-dom';

export const RegsiterPassword = () => {
  const history = useHistory();
  const [password, setPassword] = useState('');
  const [userid, setUserid] = useState('');
  const [status, setStatus] = useState('');
 

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const formData = new FormData();
      formData.append('userid', userid);
      formData.append('password', password );

      const result = await registerPassword(formData);
      console.log(result);
      if(result.status){
        history.push('/login');
        // window.location.href = '/login';
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
      <section className="login mt-3">
        <div className="container">
        <div>
            <img src={back} alt='' className="back-ground-image"/>
          </div>

          <form onSubmit={handleSubmit}>
            <span>Password</span>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <span>Conform Password</span>
            <input type="password" placeholder="Conform Password" required />
            <button type="submit"  className="button">Proceed</button>
          </form>
        </div>
      </section>
    </>
  );
};
