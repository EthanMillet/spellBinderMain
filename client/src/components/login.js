import React, { useState } from 'react';
import { Link, redirect } from 'react-router-dom';


import { useMutation } from '@apollo/client';

import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import './Styling/signIn.css'


  const Sidebar = () => {
    
    const [Login, setLogin] = useState({ email: '', password: '' });
    const [login, { error, loading }] = useMutation(LOGIN);
  
    const handleSubmitLogin = async (event) => {
      event.preventDefault();
      try {
        const mutationResponse = await login({
          variables: { email: Login.email, password: Login.password },
        });
        if (loading) {
          return (
            <p> Loading </p>)
  
        }
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e);
      }
    };
  
    const handleLogin = (event) => {
      const { name, value } = event.target;
      setLogin({
        ...Login,
        [name]: value,
      });
    };
    
    return (
      <div className='container' style={{width: "100%"}}>
              <div className='login-modal'>
                <div className='modal-header'>
                  <h2>Log in</h2>
                </div>
                <div className='modal-body'>
                  <form className='form-body' onSubmit={handleSubmitLogin}>

                    <label className='label' htmlFor="email">Email Address </label>
                    <input
                    className='input'
                      placeholder="Enter Your Email"
                      name="email"
                      type="email"
                      id="email"
                      onChange={handleLogin} />
                    <hr className='form-break'></hr>
                    <label className='label' htmlFor="pwd">Password </label>
                    <input
                      className='input'                   
                      placeholder="Enter Your Password"
                      name="password"
                      type="password"
                      id="pwd"
                      onChange={handleLogin} />
                    {error ? (
                      <div>
                        <p className="error-text">The provided credentials are incorrect</p>
                      </div>
                    ) : null}
                    <hr className='form-break'></hr>


                    <button className="sumbit-button" type="submit">Submit</button>

                  </form>
                </div>
              </div>
      </div>
    )
  }
  
  export default Sidebar;