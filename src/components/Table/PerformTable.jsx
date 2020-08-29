import React from 'react';
import checkNullNum from '../../helpers/checkNullNum';

const PerformTable = ({ response, action, currentPage, postPerPage }) => {
  return (
    <div className='table-responsive'>
      <table className='table table-striped table-inverse'>
        <thead className='thead-inverse'>
          <tr className='d-flex'>
            <th className='col-1 text-center'>#</th>
            <th className='col-2'>NIP</th>
            <th className='col-2'>Nama</th>
            <th className='col-2'>Pekerjaan</th>
            <th className='col-2'>Wilayah</th>
            <th className='col-1'>Zona</th>
            <th className='col-2 text-center'>Persentase Performa</th>
          </tr>
        </thead>
        <tbody>
          {response.map((value, index) => {
            const {
              employeeNumber,
              employeeName,
              regionName,
              zoneName,
              roleName,
              percentage,
            } = value;

            return (
              <tr key={index} className='d-flex'>
                <td className='col-1 text-center'>
                  {(currentPage - 1) * postPerPage + index + 1}
                </td>
                <td className='col-2'>{employeeNumber}</td>
                <td className='col-2'>{employeeName}</td>
                <td className='col-2'>{roleName}</td>
                <td className='col-2'>{regionName}</td>
                <td className='col-1'>{zoneName}</td>
                <td className='col-2 text-center'>
                  {checkNullNum(percentage)}%
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PerformTable;
