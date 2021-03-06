import React, { useContext } from "react";
import FadeIn from "react-fade-in";
import checkExpiredDate from "../../helpers/checkExpiredDate";
import checkNullNum from "../../helpers/checkNullNum";
import dateFormat from "../../helpers/dateFormat";
import exportToExcel from "../../helpers/exportToExcel";
import exportToPdf from "../../helpers/exportToPdf";
import { EmployeeContext } from "../../providers/EmployeeContext";

const ExportPerson = () => {
  const { employee, loading } = useContext(EmployeeContext);

  return loading ? (
    <p>Mohon tunggu</p>
  ) : (
    <FadeIn>
      <div className="row">
        <div className="col-md-12">
          <button className="btn btn-primary mt-5 mb-5 ml-3">
            <a href="/#/admin/kontrak-pegawai" className="text-white">
              Kembali
            </a>
          </button>
          <button
            className="btn btn-danger mt-5 mb-5 ml-3"
            onClick={() =>
              exportToPdf(window.$(".formPerson")[0], "Daftar-Pegawai")
            }
          >
            PDF
          </button>
          <button
            className="btn btn-success mt-5 mb-5 ml-3"
            onClick={() => exportToExcel("tablePerson")}
          >
            Excel
          </button>
        </div>
      </div>

      <form class="formPerson" style={{ maxWidth: "none", width: 1005 + "px" }}>
        <div id="tablePerson" className="table-responsive">
          <table className="table table-striped table-inverse">
            <thead className="thead-inverse">
              <tr className="d-flex">
                <th className="col-1 text-center">#</th>
                <th className="col-2">Nama</th>
                <th className="col-1 text-center">Usia</th>
                <th className="col-2">Awal Kontrak</th>
                <th className="col-2">Akhir Kontrak</th>
                <th className="col-2 text-center">Status</th>
                <th className="col-1 text-center">Absensi</th>
                <th className="col-1 text-center">Kinerja</th>
              </tr>
            </thead>
            <tbody>
              {employee.map((value, index) => {
                const {
                  name,
                  firstContract,
                  lastContract,
                  age,
                  smartPresence,
                  perform,
                } = value;

                return (
                  <tr key={index} className="d-flex">
                    <td className="col-1 text-center">{index + 1}</td>
                    <td className="col-2">{name}</td>
                    <td className="col-1 text-center">{age}</td>
                    <td className="col-2">{dateFormat(firstContract)}</td>
                    <td className="col-2">{dateFormat(lastContract)}</td>
                    <td className="col-2 text-center">
                      <span
                        className={`badge badge-${
                          checkExpiredDate(lastContract).label
                        }`}
                      >
                        {checkExpiredDate(lastContract).status}
                      </span>
                    </td>
                    <td className="col-1 text-center">
                      {checkNullNum(smartPresence)}%
                    </td>
                    <td className="col-1 text-center">
                      {checkNullNum(perform)}%
                    </td>
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

export default ExportPerson;
