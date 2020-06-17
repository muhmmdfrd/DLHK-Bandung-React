import React from 'react';

const ContentWrapper = ({ children }) => {
  return (
    <div id='content-wrapper' className='d-flex flex-column'>
      {children}
    </div>
  );
};

export default ContentWrapper;
