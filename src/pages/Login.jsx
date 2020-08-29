import React, { useState } from 'react';
import qs from 'querystring';
import LoginService from './../Services/LoginService';

const Login = () => {
  // states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // local storage
  if (window.localStorage.length !== 0) {
    window.location.href = '/#/admin/dashboard';
  }

  // methods
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const enabledForm = () => {
    window.$('#inputUsername').prop('disabled', false);
    window.$('#inputPassword').prop('disabled', false);
    window.$('#btnLogin').prop('disabled', false);
    window.$('#btnLogin').val('Login');
    window.$('#btnLogin').css('cursor', 'default');
  };

  const disabledForm = () => {
    window.$('#inputUsername').prop('disabled', true);
    window.$('#inputPassword').prop('disabled', true);
    window.$('#btnLogin').prop('disabled', true);
    window.$('#btnLogin').val('Loading...');
    window.$('#btnLogin').css('cursor', 'not-allowed');
  };

  const validateLogin = (event) => {
    event.preventDefault();

    if (username.length === 0 || password.length === 0) {
      alert('Mohon isi semua form!');
    } else {
      disabledForm();

      var params = qs.stringify({
        username: username,
        password: password,
        grant_type: 'password',
      });

      LoginService(params)
        .then((response) => {
          if (response.status === 200) {
            window.localStorage.setItem('_tid', response.data.access_token);
            window.localStorage.setItem('_uin', username);
            window.location.href = '/#/admin/dashboard';
          }
        })
        .catch((response) => alert('username atau password salah'))
        .finally(() => enabledForm());
    }
  };

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-xl-10 col-lg-12 col-md-9 mt-5'>
          <div className='card o-hidden border-0 shadow-lg my-5'>
            <div className='card-body p-0'>
              <div className='row'>
                <div className='col-lg-6 d-none d-lg-block bg-login-image'></div>
                <div className='col-lg-6'>
                  <div className='p-5'>
                    <div className='text-center'>
                      <h1 className='h4 text-gray-900 mb-3'>
                        Login Admin DLHK
                      </h1>
                      <img
                        src='https://www.kangpisman.com/wp-content/uploads/2018/11/1.-logo-kangpisman.png'
                        alt=''
                        className='img-responsive mb-3'
                        style={{ width: 150 + 'px', height: 'auto' }}
                      />
                    </div>
                    <form className='user' onSubmit={validateLogin}>
                      <div className='form-group'>
                        <input
                          id='inputUsername'
                          type='text'
                          value={username}
                          onChange={handleUsername}
                          className='form-control form-control-user'
                          placeholder='Enter username'
                          autoComplete='false'
                        />
                      </div>
                      <div className='form-group'>
                        <input
                          id='inputPassword'
                          type='password'
                          value={password}
                          onChange={handlePassword}
                          className='form-control form-control-user'
                          placeholder='Enter Password'
                        />
                      </div>

                      <input
                        id='btnLogin'
                        type='submit'
                        className='btn btn-primary btn-user btn-block'
                        value='Login'
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
