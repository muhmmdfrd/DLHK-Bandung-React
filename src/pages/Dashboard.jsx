import React from 'react';

const Dashboard = () => {
  return (
    <div
      className='container h-100'
      style={{
        position: 'fixed',
        width: 100 + '%',
        height: 100 + '%'
      }}
    >
      <div className='row h-100 justify-content-center align-items-center'>
      <img
        src='https://www.kangpisman.com/wp-content/uploads/2018/11/1.-logo-kangpisman.png'
        alt=''
        className='img-responsive mb-3'
        style={{ width: 150 + 'px', height: 'auto' }}
      />
        <h1>Selamat Datang Admin</h1>
      </div>
    </div>
  );
};

export default Dashboard;
