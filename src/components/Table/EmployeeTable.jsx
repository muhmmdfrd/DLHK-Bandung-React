import React from 'react';

const EmployeeTable = ({ response, action, currentPage, postPerPage }) => {
  return (
    <div className='table-responsive'>
      <table className='table table-striped table-inverse'>
        <thead className='thead-inverse'>
          <tr className='d-flex'>
            <th className='col-1 text-center'>#</th>
            <th className='col-2'>Nama</th>
            <th className='col-2'>Pekerjaan</th>
            <th className='col-3'>Wilayah</th>
            <th className='col-1'>Zona</th>
            <th className='col-1 text-center'>Shift</th>
            <th className='col-2 text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
          {response.map((value, index) => {
            const { employeeId, name, region, zone, role, shift } = value;

            return (
              <tr key={index} className='d-flex'>
                <td className='col-1 text-center'>
                  {(currentPage - 1) * postPerPage + index + 1}
                </td>
                <td className='col-2'>{name}</td>
                <td className='col-2'>{role}</td>
                <td className='col-3'>{region}</td>
                <td className='col-1'>{zone}</td>
                <td className='col-1 text-center'>{shift}</td>
                <td className='col-2 text-center'>
                  <div className='row'>
                    <div className='col-md-12 text-center'>
                      <button
                        className='btn btn-sm btn-primary btn-icon-split'
                        onClick={() => action(employeeId)}
                      >
                        <span className='icon text-white-50'>
                          <i className='fa fa-pen' aria-hidden='true'></i>
                        </span>
                        <span
                          id={`span-btn-${employeeId}`}
                          className='text mr-4 pl-3'
                        >
                          Edit&nbsp;
                        </span>
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

export default EmployeeTable;
