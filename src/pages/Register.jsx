import React, { useState, useEffect } from 'react';
import { AddApplicant } from '../Services/ApplicantService';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [match, setMatch] = useState(false);

  // * method
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleFirstname = (event) => {
    setFirstname(event.target.value);
  };

  const handleLastName = (event) => {
    setLastname(event.target.value);
  };

  const handleCheckPassword = (event) => {
    setCheckPassword(event.target.value);
  };

  useEffect(() => {
    if (password !== checkPassword) {
      setMatch(true);
    } else {
      setMatch(false);
    }
  }, [checkPassword, password]);

  const enabledForm = () => {
    window.$('#exampleFirstName').prop('disabled', false);
    window.$('#exampleLastName').prop('disabled', false);
    window.$('#exampleInputEmail').prop('disabled', false);
    window.$('#exampleInputPassword').prop('disabled', false);
    window.$('#btnApplicantLogin').prop('disabled', false);
    window.$('#exampleRepeatPassword').prop('disabled', false);
    window.$('#exampleRegister').val('Register');
    window.$('#exampleRegister').css('cursor', 'default');
  };

  const disabledForm = () => {
    window.$('#exampleFirstName').prop('disabled', true);
    window.$('#exampleLastName').prop('disabled', true);
    window.$('#exampleInputEmail').prop('disabled', true);
    window.$('#exampleInputPassword').prop('disabled', true);
    window.$('#btnApplicantLogin').prop('disabled', true);
    window.$('#exampleRepeatPassword').prop('disabled', true);
    window.$('#exampleRegister').val('Loading...');
    window.$('#exampleRegister').css('cursor', 'not-allowed');
  };

  const validateRegister = (event) => {
    event.preventDefault();

    if (
      email.length === 0 ||
      password.length === 0 ||
      firstname.length === 0 ||
      lastname.length === 0
    ) {
      alert('Mohon isi semua form!');
    } else {
      disabledForm();
      let data = {
        email: email,
        password: password,
        applicantName: `${firstname} ${lastname}`,
      };

      AddApplicant(data)
        .then((response) => {
          if (response.data.messageCode !== 400) {
            alert('Anda berhasil terdaftar!');
            window.location.href = '/#/pelamar/login';
          }
        })
        .finally(() => enabledForm());
    }
  };

  return (
    <div className='container'>
      <div className='card o-hidden border-0 shadow-lg my-5'>
        <div className='card-body p-0'>
          <div className='row'>
            <div className='col-lg-5 d-none d-lg-block bg-register-image'></div>
            <div className='col-lg-7'>
              <div className='p-5'>
                <div className='text-center'>
                  <h1 className='h4 text-gray-900 mb-4'>Create an Account!</h1>
                </div>
                <form className='user' onSubmit={validateRegister}>
                  <div className='form-group row'>
                    <div className='col-sm-6 mb-3 mb-sm-0'>
                      <input
                        type='text'
                        className='form-control form-control-user'
                        id='exampleFirstName'
                        placeholder='First Name'
                        value={firstname}
                        onChange={handleFirstname}
                      />
                    </div>
                    <div className='col-sm-6'>
                      <input
                        type='text'
                        className='form-control form-control-user'
                        id='exampleLastName'
                        placeholder='Last Name'
                        value={lastname}
                        onChange={handleLastName}
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <input
                      type='email'
                      className='form-control form-control-user'
                      id='exampleInputEmail'
                      placeholder='Email Address'
                      value={email}
                      onChange={handleEmail}
                    />
                  </div>
                  <div className='form-group row'>
                    <div className='col-sm-6 mb-3 mb-sm-0'>
                      <input
                        type='password'
                        className='form-control form-control-user'
                        id='exampleInputPassword'
                        placeholder='Password'
                        value={password}
                        onChange={handlePassword}
                      />
                    </div>
                    <div className='col-sm-6'>
                      <input
                        type='password'
                        className='form-control form-control-user'
                        id='exampleRepeatPassword'
                        placeholder='Repeat Password'
                        value={checkPassword}
                        onChange={handleCheckPassword}
                      />
                    </div>
                  </div>
                  {match ? <Warning /> : null}
                  <input
                    id='exampleRegister'
                    type='submit'
                    value={'Register'}
                    className='btn btn-primary btn-user btn-block'
                    disabled={match}
                  />
                </form>
                <hr />
                <div className='text-center'>
                  <a className='small' href='/#/pelamar/login'>
                    Sudah punya akun? Login!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Warning = () => {
  return (
    <div className='text-center'>
      <p className='text-danger'>Password Anda tidak sesuai!</p>
    </div>
  );
};

export default Register;
