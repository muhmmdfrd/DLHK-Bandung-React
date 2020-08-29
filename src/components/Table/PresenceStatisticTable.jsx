import React from 'react';
import roundNumber from '../../helpers/roundNumber';

const PresenceStatisticTable = ({ response, postPerPage, currentPage }) => {
  return (
    <div className='table-responsive'>
      <table className='table table-striped table-inverse'>
        <thead className='thead-inverse'>
          <tr className='d-flex'>
            <th className='col-1 text-center'>#</th>
            <th className='col-2'>NIK</th>
            <th className='col-2'>Nama</th>
            <th className='col-1'>Zona</th>
            <th className='col-2'>Bagian</th>
            <th className='col-1 text-center'>Hadir</th>
            <th className='col-1 text-center'>Izin</th>
            <th className='col-1 text-center'>Absen</th>
            <th className='col-1 text-center'>Telat</th>
          </tr>
        </thead>
        <tbody>
          {response.map((value, index) => {
            const {
              employeeNumber,
              employeeName,
              zoneName,
              leave,
              presence,
              absence,
              roleName,
              late,
            } = value;

            const total = presence + leave + absence + late;

            return (
              <tr key={index} className='d-flex'>
                <td className='col-1 text-center'>
                  {(currentPage - 1) * postPerPage + index + 1}
                </td>
                <td className='col-2'>{employeeNumber}</td>
                <td className='col-2'>{employeeName}</td>
                <td className='col-1'>{zoneName}</td>
                <td className='col-2'>{roleName}</td>
                <td className='col-1 text-center'>
                  {roundNumber((presence / total) * 100)}%
                </td>
                <td className='col-1 text-center'>
                  {roundNumber((leave / total) * 100)}%
                </td>
                <td className='col-1 text-center'>
                  {roundNumber((absence / total) * 100)}%
                </td>
                <td className='col-1 text-center'>
                  {roundNumber((late / total) * 100)}%
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PresenceStatisticTable;
