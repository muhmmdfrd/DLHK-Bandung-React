import React from 'react';

const Pagination = ({
  next,
  previous,
  current,
  total,
  currentPage,
  postPerPage,
}) => {
  const divided = Math.ceil(total / postPerPage);

  return (
    <div className='text-center card-footer'>
      <div className='row'>
        <div className='col-lg-3'>&nbsp;</div>
        <div className='col-lg-9'>
          <div className='row float-right mr-5'>
            <div className='col-lg-3 col-md-4'>
              <button
                className={
                  'btn btn-success btn-sm ' +
                  (currentPage === 1 ? 'disabled' : '')
                }
                onClick={() => previous(current)}
              >
                {'<<'}
              </button>
            </div>
            <div className='col-lg-6 col-md-4 pr-1 text-center'>
              {currentPage} of {divided}
            </div>
            <div className='col-lg-3 col-md-4'>
              <button
                className={
                  'btn btn-success btn-sm ' +
                  (currentPage === divided || divided <= 1 ? 'disabled' : '')
                }
                onClick={() => next(current)}
              >
                {'>>'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
