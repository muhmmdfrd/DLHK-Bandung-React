import React from "react";
import dateFormat from "../../helpers/dateFormat";

const TransacOutTable = ({ response, currentPage, postPerPage }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-inverse">
        <thead className="thead-inverse">
          <tr className="d-flex">
            <th className="col-1 text-center">#</th>
            <td className="col-2">Tanggal</td>
            <th className="col-2">Nama Barang</th>
            <th className="col-2">Penerima</th>
            <th className="col-2">Wilayah</th>
            <th className="col-1">Zona</th>
            <th className="col-2 text-center">Qty</th>
          </tr>
        </thead>
        <tbody>
          {response.map((value, index) => {
            const {
              itemName,
              qty,
              dataOfTransac,
              userRequest,
              region,
              zone,
            } = value;

            return (
              <tr key={index} className="d-flex">
                <td className="col-1 text-center">
                  {(currentPage - 1) * postPerPage + index + 1}
                </td>
                <td className="col-2">{dateFormat(dataOfTransac)}</td>
                <td className="col-2">{itemName}</td>
                <td className="col-2">{userRequest}</td>
                <td className="col-2">{region}</td>
                <td className="col-1">{zone}</td>
                <td className="col-2 text-center">{qty}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransacOutTable;
