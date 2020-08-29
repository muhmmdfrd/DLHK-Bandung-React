import React from 'react';

const RegionStatisticTable = ({ response, postPerPage, currentPage }) => {
  return (
    <div className='table-responsive'>
      <table className='table table-striped table-inverse'>
        <thead className='thead-inverse'>
          <tr className='d-flex'>
            <th className='col-1 text-center'>#</th>
            <th className='col-3'>Nama Wilayah</th>
            <th className='col-2'>Jumlah Zona</th>
            <th className='col-3'>Jumlah Pekerja</th>
            <th className='col-1 text-center'>Hadir</th>
            <th className='col-1 text-center'>Izin</th>
            <th className='col-1 text-center'>Absen</th>
          </tr>
        </thead>
        <tbody>
          {response.map((value, index) => {
            const {
              regionName,
              zoneTotal,
              employeTotal,
              leave,
              presence,
              absence,
            } = value;

            return (
              <tr key={index} className='d-flex'>
                <td className='col-1 text-center'>
                  {(currentPage - 1) * postPerPage + index + 1}
                </td>
                <td className='col-3'>{regionName}</td>
                <td className='col-2 text-center'>{zoneTotal}</td>
                <td className='col-3 text-center'>{employeTotal}</td>
                <td className='col-1 text-center'>{presence}</td>
                <td className='col-1 text-center'>{leave}</td>
                <td className='col-1 text-center'>{absence}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RegionStatisticTable;
