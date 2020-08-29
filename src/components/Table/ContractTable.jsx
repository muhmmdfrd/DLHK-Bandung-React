import React from 'react';
import { NavLink } from 'react-router-dom';

// * helpers
import dateFormat from '../../helpers/dateFormat';
import checkNullNum from '../../helpers/checkNullNum';

const ContractTable = ({ response, currentPage, postPerPage }) => {
  return (
    <div className='table-responsive'>
      <table className='table table-striped table-inverse'>
        <thead className='thead-inverse'>
          <tr className='d-flex'>
            <th className='col-1 text-center'>#</th>
            <th className='col-2'>Nama</th>
            <th className='col-1 text-center'>Usia</th>
            <th className='col-2'>Awal Kontrak</th>
            <th className='col-2'>Akhir Kontrak</th>
            <th className='col-2 text-center'>Absensi</th>
            <th className='col-2 text-center'>Kinerja</th>
          </tr>
        </thead>
        <tbody>
          {response.map((value, index) => {
            const {
              name,
              firstContract,
              lastContract,
              personId,
              age,
              smartPresence,
              perform,
            } = value;

            return (
              <tr key={index} className='d-flex'>
                <td className='col-1 text-center'>
                  {(currentPage - 1) * postPerPage + index + 1}
                </td>
                <td className='col-2'>
                  <NavLink to={`/admin/detail-pegawai/${personId}`}>
                    {name}
                  </NavLink>
                </td>
                <td className='col-1 text-center'>{age}</td>
                <td className='col-2'>{dateFormat(firstContract)}</td>
                <td className='col-2'>{dateFormat(lastContract)}</td>
                <td className='col-2 text-center'>
                  {checkNullNum(smartPresence)}%
                </td>
                <td className='col-2 text-center'>{checkNullNum(perform)}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContractTable;
