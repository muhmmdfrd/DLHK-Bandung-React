import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const ProgressDashboard = () => {
  const [progressData] = useState([
    { title: 'Server Migration', value: 20, type: 'bg-danger' },
    { title: 'Sales Tracking', value: 40, type: 'bg-warning' },
    { title: 'Customer Database', value: 60, type: '' },
    { title: 'Payout Detail', value: 80, type: 'bg-info' },
    { title: 'Account Setup', value: 100, type: 'bg-sucess' },
  ]);

  return (
    <div className='row'>
      <div className='col-lg-6 mb-4'>
        <div className='card shadow mb-4'>
          <div className='card-header py-3'>
            <h6 className='m-0 font-weight-bold text-primary'>Projects</h6>
          </div>
          <div className='card-body'>
            {progressData.map((value, index) => {
              return <ProgressBar key={index} data={value} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressDashboard;
