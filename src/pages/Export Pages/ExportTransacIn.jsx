import React, { useContext } from "react";
import FadeIn from "react-fade-in";
import dateFormat from "../../helpers/dateFormat";
import exportToExcel from "../../helpers/exportToExcel";
import exportToPdf from "../../helpers/exportToPdf";
import { ItemContext } from "../../providers/ItemContext";

const ExportTransacIn = () => {
  const { transac, loading } = useContext(ItemContext);

  return loading ? (
    <p>Mohon Tunggu</p>
  ) : (
    <FadeIn>
      <div className="row">
        <div className="col-md-12">
          <button className="btn btn-primary mt-5 mb-5 ml-3">
            <a href="/#/admin/transaksi-barang" className="text-white">
              Kembali
            </a>
          </button>
          <button
            className="btn btn-danger mt-5 mb-5 ml-3"
            onClick={() =>
              exportToPdf(window.$(".formTransacIn")[0], "Daftar-Barang-Masuk")
            }
          >
            PDF
          </button>
          <button
            className="btn btn-success mt-5 mb-5 ml-3"
            onClick={() => exportToExcel("transacInTable")}
          >
            Excel
          </button>
        </div>
      </div>

      <form
        class="formTransacIn"
        style={{ maxWidth: "none", width: 1005 + "px" }}
      >
        <div id="transacInTable" className="table-responsive">
          <table className="table table-striped table-inverse">
            <thead className="thead-inverse">
              <tr className="d-flex">
                <th className="col-1 text-center">#</th>
                <td className="col-3">Tanggal</td>
                <td className="col-3">Jenis Transaksi</td>
                <th className="col-3">Nama Barang</th>
                {/* <th className='col-3'>Suplier</th> */}
                <th className="col-2 text-center">Qty</th>
              </tr>
            </thead>
            <tbody>
              {transac.map((value, index) => {
                const {
                  itemName,
                  qty,
                  dataOfTransac,
                  // suplierName,
                  typeOfTransac,
                } = value;

                return (
                  <tr key={index} className="d-flex">
                    <td className="col-1 text-center">{index + 1}</td>
                    <td className="col-3">{dateFormat(dataOfTransac)}</td>
                    <td className="col-3">
                      {typeOfTransac === "IN" ? "Masuk" : "Keluar"}
                    </td>
                    <td className="col-3">{itemName}</td>
                    {/* <td className='col-3'>{suplierName}</td> */}
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

export default ExportTransacIn;
