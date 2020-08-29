import React from 'react';

const UserTable = ({ response, action, currentPage, postPerPage }) => {
  return (
    <div className='table-responsive'>
      <table className='table table-striped table-inverse'>
        <thead className='thead-inverse'>
          <tr className='d-flex'>
            <th className='col-1 text-center'>#</th>
            <th className='col-1'>ID</th>
            <th className='col-2'>Nama</th>
            <th className='col-2'>Kota</th>
            <th className='col-6 text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
          {response.map((value, index) => {
            const { personId, personName, address } = value;
            const { handleEdit, handleDelete, loadMore } = action;

            return (
              <tr key={index} className='d-flex'>
                <td className='col-1 text-center'>
                  {(currentPage - 1) * postPerPage + index + 1}
                </td>
                <td className='col-1'>USR-{personId}</td>
                <td className='col-2'>{personName}</td>
                <td className='col-2'>{address.split(' ').pop()}</td>
                <td className='col-6'>
                  <div className='row'>
                    <div className='col-md-4'>
                      <button
                        className='btn btn-sm btn-primary btn-icon-split'
                        onClick={() => handleEdit(personId)}
                      >
                        <span className='icon text-white-50'>
                          <i
                            className='fa fa-ellipsis-v'
                            aria-hidden='true'
                          ></i>
                        </span>
                        <span id={`span-btn-${personId}`} className='text mr-4 pl-3'>Edit&nbsp;</span>
                      </button>
                    </div>
                    <div className='col-md-4'>
                      <button
                        className='btn btn-sm btn-danger btn-icon-split'
                        onClick={() => handleDelete(personId)}
                      >
                        <span className='icon text-white-50'>
                          <i className='fa fa-trash' aria-hidden='true'></i>
                        </span>
                        <span className='text mr-1 pl-3'>Delete</span>
                      </button>
                    </div>
                    <div className='col-md-4'>
                      <button
                        className='btn btn-sm btn-success btn-icon-split'
                        onClick={() => loadMore()}
                      >
                        <span className='icon text-white-50'>
                          <i className='fa fa-user' aria-hidden='true'></i>
                        </span>
                        <span className='text mr-4 pl-3'>Anak</span>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
