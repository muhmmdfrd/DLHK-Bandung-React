import React, { useContext } from "react";
import FadeIn from "react-fade-in";
import exportToExcel from "../../helpers/exportToExcel";
import exportToPdf from "../../helpers/exportToPdf";
import { ItemContext } from "../../providers/ItemContext";

const ExportItem = () => {
  const { item, loading } = useContext(ItemContext);

  return loading ? (
    <p>Mohon tunggu</p>
  ) : (
    <FadeIn>
      <div className="row">
        <div className="col-md-12">
          <button className="btn btn-primary mt-5 mb-5 ml-3">
            <a href="/#/admin/barang" className="text-white">
              Kembali
            </a>
          </button>
          <button
            className="btn btn-danger mt-5 mb-5 ml-3"
            onClick={() =>
              exportToPdf(window.$(".formItem")[0], "Daftar-Barang")
            }
          >
            PDF
          </button>
          <button
            className="btn btn-success mt-5 mb-5 ml-3"
            onClick={() => exportToExcel("tableItem")}
          >
            Excel
          </button>
        </div>
      </div>

      <form class="formItem" style={{ maxWidth: "none", width: 1005 + "px" }}>
        <div id="tableItem" className="table-responsive">
          <table className="table table-striped table-inverse">
            <thead className="thead-inverse">
              <tr className="d-flex">
                <th className="col-1 text-center">#</th>
                <th className="col-2">Kode Barang</th>
                <th className="col-2">Nama Barang</th>
                <th className="col-1 text-center">Awal</th>
                <th className="col-1 text-center">Masuk</th>
                <th className="col-1 text-center">Keluar</th>
                <th className="col-1 text-center">Stok</th>
                <th className="col-3">Kategori</th>
              </tr>
            </thead>
            <tbody>
              {item.map((value, index) => {
                const {
                  itemName,
                  qty,
                  categoryName,
                  itemCode,
                  dataIn,
                  out,
                  firstQty,
                } = value;

                return (
                  <tr key={index} className="d-flex">
                    <td className="col-1 text-center">{index + 1}</td>
                    <td className="col-2">{itemCode}</td>
                    <td className="col-2">{itemName}</td>
                    <td className="col-1 text-center">{firstQty}</td>
                    <td className="col-1 text-center">{dataIn}</td>
                    <td className="col-1 text-center">{out}</td>
                    <td className="col-1 text-center">{qty}</td>
                    <td className="col-3">{categoryName}</td>
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

export default ExportItem;
