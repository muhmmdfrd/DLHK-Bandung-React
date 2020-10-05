import React, { useContext } from "react";
import FadeIn from "react-fade-in";
import dateFormat from "../../helpers/dateFormat";
import exportToExcel from "../../helpers/exportToExcel";
import exportToPdf from "../../helpers/exportToPdf";
import { ItemContext } from "../../providers/ItemContext";

const ExportTransacOut = () => {
  const { transacOut, loading } = useContext(ItemContext);

  return loading ? (
    <p>Mohon tunggu</p>
  ) : (
    <FadeIn>
      <div className="row">
        <div className="col-md-12">
          <button className="btn btn-primary mt-5 mb-5 ml-3">
            <a href="/#/admin/transaksi-barang-keluar" className="text-white">
              Kembali
            </a>
          </button>
          <button
            className="btn btn-danger mt-5 mb-5 ml-3"
            onClick={() =>
              exportToPdf(
                window.$(".formTransacOut")[0],
                "Daftar-Barang-Keluar"
              )
            }
          >
            PDF
          </button>
          <button
            className="btn btn-success mt-5 mb-5 ml-3"
            onClick={() => exportToExcel("transacOutTable")}
          >
            Excel
          </button>
        </div>
      </div>

      <form
        class="formTransacOut"
        style={{ maxWidth: "none", width: 1005 + "px" }}
      >
        <div id="transacOutTable" className="table-responsive">
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
              {transacOut.map((value, index) => {
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
                    <td className="col-1 text-center">{index + 1}</td>
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
      </form>
    </FadeIn>
  );
};

export default ExportTransacOut;
