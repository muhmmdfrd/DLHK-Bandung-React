import React from 'react';

const ZoneStatisticTable = ({ response, postPerPage, currentPage }) => {
  return (
    <div className='table-responsive'>
      <table className='table table-striped table-inverse'>
        <thead className='thead-inverse'>
          <tr className='d-flex'>
            <th className='col-2 text-center'>#</th>
            <th className='col-2'>Kode Zona</th>
            <th className='col-2'>Wilayah</th>
            <th className='col-2'>Jumlah Pegawai</th>
            <th className='col-1 text-center'>Jumlah Hadir</th>
            <th className='col-1 text-center'>Jumlah Izin</th>
            <th className='col-1 text-center'>Jumlah Absen</th>
            <th className='col-1 text-center'>Hari Kerja</th>
          </tr>
        </thead>
        <tbody>
          {response.map((value, index) => {
            const {
              codeZone,
              totalEmployee,
              leave,
              presence,
              absence,
              total,
              regionName,
            } = value;

            return (
              <tr key={index} className='d-flex'>
                <td className='col-2 text-center'>
                  {(currentPage - 1) * postPerPage + index + 1}
                </td>
                <td className='col-2'>{codeZone}</td>
                <td className='col-2'>{regionName}</td>
                <td className='col-2 text-center'>{totalEmployee}</td>
                <td className='col-1 text-center'>{presence}</td>
                <td className='col-1 text-center'>{leave}</td>
                <td className='col-1 text-center'>{absence}</td>
                <td className='col-1 text-center'>{total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ZoneStatisticTable;
