
import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { LOGIN } from '../utils/mutations';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

  const Sidebar = () => {


    function showNavigation() {
      if (Auth.loggedIn()) {
        return (
          <button className='login' onClick={() => Auth.logout()}>Logout</button>
        );
      } else {
        return (
          <>
            <button className='register' onClick={openRegister} disabled={loginIsOpen}>Register</button>
            <Modal
              isOpen={registerIsOpen}
              onAfterOpen={afteropenRegister}
              onRequestClose={closeRegister}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className='login-modal'>
                <div className='modal-header'>
                  <h2 ref={(_subtitle) => (subtitle2 = _subtitle)}>Register</h2>
                  <button onClick={closeRegister}>X</button>
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
            </Modal>
  
            <button className='login' onClick={openLogin} disabled={registerIsOpen}>Login</button>
            <Modal
              isOpen={loginIsOpen}
              onAfterOpen={afteropenLogin}
              onRequestClose={closeLogin}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className='login-modal'>
                <div className='modal-header'>
                  <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Log in</h2>
                  <button onClick={closeLogin}>X</button>
                </div>
                <div className='modal-body'>
                  <form onSubmit={handleSubmitLogin}>
                    <label htmlFor="email">Email: </label>
                    <input
                      placeholder="email@test.com"
                      name="email"
                      type="email"
                      id="email"
                      onChange={handleLogin} />
                    <label htmlFor="pwd">Password: </label>
                    <input
                      placeholder="******"
                      name="password"
                      type="password"
                      id="pwd"
                      onChange={handleLogin} />
                    {error ? (
                      <div>
                        <p className="error-text">The provided credentials are incorrect</p>
                      </div>
                    ) : null}
                    <button type="submit">Submit</button>
                  </form>
                </div>
              </div>
            </Modal></>
        );
      }
    }
  
  
  
    let subtitle;
    const [loginIsOpen, setIsLoginOpen] = React.useState(false);
  
    function openLogin() {
      setIsLoginOpen(true);
      setRegisterOpen(false);
    }
  
    function afteropenLogin() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeLogin() {
      setIsLoginOpen(false);
    }
  
  
    let subtitle2;
    const [registerIsOpen, setRegisterOpen] = React.useState(false);
  
  
    function openRegister() {
      setRegisterOpen(true);
      setIsLoginOpen(false);
    }
  
    function afteropenRegister() {
      // references are now sync'd and can be accessed.
      subtitle2.style.color = '#f00';
    }
  
    function closeRegister() {
      setRegisterOpen(false);
    }
  
    const [Login, setLogin] = useState({ email: '', password: '' });
    const [login, { error, loading }] = useMutation(LOGIN);
  
    const handleSubmitLogin = async (event) => {
      console.log(Login.password)
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
  
    const [RegisterState, setRegisterState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);
  
    const handleSubmitRegister = async (event) => {
      event.preventDefault();
      const mutationResponse = await addUser({
        variables: {
          username: RegisterState.username,
          email: RegisterState.email,
          password: RegisterState.password,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    };
  
    const handleRegister = (event) => {
      const { name, value } = event.target;
      setRegisterState({
        ...RegisterState,
        [name]: value,
      });
    };
  
    return (
      <div className='nav'>
  
        <div className='side-bar'>
          <Link className='button' to='/'>
            <span>HOME</span>
          </Link>
          <Link className='button' to='/profile'>
            <span>PROFILE</span>
          </Link>
        </div>
  
        <header className='header'>
          <div className='header'>
            <div>
              {showNavigation()}
            </div>
          </div>
        </header>
  
      </div>
    )
  }
  
  export default Sidebar;