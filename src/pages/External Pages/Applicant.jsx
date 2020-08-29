import React, { useState } from 'react';
import { LoginApplicant } from '../../Services/ApplicantService';

const Applicant = () => {
  // states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // methods
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const enabledForm = () => {
    window.$('#email').prop('disabled', false);
    window.$('#password').prop('disabled', false);
    window.$('#btnApplicantLogin').prop('disabled', false);
    window.$('#btnApplicantLogin').val('Login');
    window.$('#btnApplicantLogin').css('cursor', 'default');
  };

  const disabledForm = () => {
    window.$('#email').prop('disabled', true);
    window.$('#password').prop('disabled', true);
    window.$('#btnApplicantLogin').prop('disabled', true);
    window.$('#btnApplicantLogin').val('Loading...');
    window.$('#btnApplicantLogin').css('cursor', 'not-allowed');
  };

  const validateLogin = (event) => {
    event.preventDefault();

    if (email.length === 0 || password.length === 0) {
      alert('Mohon isi semua form!');
    } else {
      disabledForm();

      let data = {
        email: email,
        password: password,
      };

      LoginApplicant(data)
        .then((response) => {
          if (response.data.messageCode === 400) {
            alert('email atau password salah!');
            window.$('#password').val('');
          } else {
            window.location.href = '/#/pelamar/kirim-lamaran';
            window.localStorage.setItem('_eml', email);
          }
        })
        .finally(() => {
          enabledForm();
        });
    }
  };

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-xl-10 col-lg-12 col-md-9 mt-5'>
          <div className='card o-hidden border-0 shadow-lg my-5'>
            <div className='card-body p-0'>
              <div className='row'>
                <div className='col-lg-6 d-none d-lg-block bg-applicant-image'></div>
                <div className='col-lg-6'>
                  <div className='p-5'>
                    <div className='text-center'>
                      <h1 className='h4 text-gray-900 mb-3'>
                        Login Pelamar DLHK
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
                          id='email'
                          type='email'
                          value={email}
                          onChange={handleEmail}
                          className='form-control form-control-user'
                          placeholder='Enter Email'
                          autoComplete={'false'}
                        />
                      </div>
                      <div className='form-group'>
                        <input
                          id='password'
                          type='password'
                          value={password}
                          onChange={handlePassword}
                          className='form-control form-control-user'
                          placeholder='Enter Password'
                        />
                      </div>

                      <input
                        id='btnApplicantLogin'
                        type='submit'
                        className='btn btn-primary btn-user btn-block'
                        value='Login'
                      />
                    </form>
                    <hr />
                    <div className='text-center'>
                      <a className='small' href='/#/pelamar/register'>
                        Buat akun
                      </a>
                    </div>
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

export default Applicant;
