import React, { Fragment } from 'react';

const ProgressBar = ({ data }) => {
  const { title, value, type } = data;

  return (
    <Fragment>
      <h4 className='small font-weight-bold'>
        {title}{' '}
        <span className='float-right'>
          {value === 100 ? 'Completed' : `${value}%`}
        </span>
      </h4>
      <div className='progress mb-4'>
        <div
          className={`progress-bar ${type}`}
          role='progressbar'
          style={{ width: value + '%' }}
          aria-valuenow={value}
          aria-valuemin='0'
          aria-valuemax='100'
        ></div>
      </div>
    </Fragment>
  );
};

export default ProgressBar;
