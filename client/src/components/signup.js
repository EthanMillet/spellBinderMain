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

              <div className='navContainer'>
              <Link to="/login" className='navButton'><button className='logIn'>Log In</button></Link>
                <button className='navButton'>Sign Up</button>
                </div>

                <div className='modal-header'>
                  <h2>Spell Binder</h2>
                </div>

                <div className='modal-body'>
                  
                  <form className='form-body' onSubmit={handleSubmitRegister}>

                    <label className='label' htmlFor="username"> User Name</label>
                    <input
                    className='input'
                      placeholder="Enter Your Username"
                      name="username"
                      type="username"
                      id="username"
                      onChange={handleRegister} />
  <hr className='form-break'></hr>
                    <label className='label' htmlFor="email">Email Address </label>
                    <input
                    className='input'
                      placeholder="Enter Your Email"
                      name="email"
                      type="email"
                      id="email"
                      onChange={handleRegister} />
<hr className='form-break'></hr>
                    <label className='label' htmlFor="pwd">Password </label>
                    <input
                    className='input'
                      placeholder="Enter Your Password"
                      name="password"
                      type="password"
                      id="pwd"
                      onChange={handleRegister} />
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