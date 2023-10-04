import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import { useMutation } from '@apollo/client';

import { LOGIN } from '../utils/mutations';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import './Styling/signIn.css'


  const Sidebar = () => {

    const [RegisterState, setRegisterState] = useState({ email: '', password: '' });
    const [addUser, { error, loading }] = useMutation(ADD_USER);
  
    const handleSubmitRegister = async (event) => {
      event.preventDefault();
      try {
      const mutationResponse = await addUser({
        variables: {
          username: RegisterState.username,
          email: RegisterState.email,
          password: RegisterState.password,
        },
      }) 
      if (loading) {
        return (
          <p> Loading </p>)

      }
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  
  }
  
    const handleRegister = (event) => {
      const { name, value } = event.target;
      setRegisterState({
        ...RegisterState,
        [name]: value,
      });
    };

  
  
    return (
      <div className='container' style={{width: "100%"}}>
              <div className='login-modal'>
                <div className='modal-header'>
                  <h2>Register</h2>
                </div>
                <div className='modal-body'>
                  <form onSubmit={handleSubmitRegister}>
                    <label htmlFor="username"> User Name:</label>
                    <input
                      placeholder="User Name"
                      name="username"
                      type="username"
                      id="username"
                      onChange={handleRegister} />
  
                    <label htmlFor="email">Email: </label>
                    <input
                      placeholder="email@test.com"
                      name="email"
                      type="email"
                      id="email"
                      onChange={handleRegister} />
                    <label htmlFor="pwd">Password: </label>
                    <input
                      placeholder="******"
                      name="password"
                      type="password"
                      id="pwd"
                      onChange={handleRegister} />
                    {error ? (
                      <div>
                        <p className="error-text">The provided credentials are incorrect</p>
                      </div>
                    ) : null}
                    <button type="submit">Submit</button>
                  </form>
                </div>
              </div>

      </div>
    )
  }
  
  export default Sidebar;