import React, { useContext } from "react";
import { EmployeeContext } from "../../providers/EmployeeContext";
import FadeIn from "react-fade-in";
import exportToExcel from "../../helpers/exportToExcel";
import exportToPdf from "../../helpers/exportToPdf";

const ExportEmployee = () => {
  const { employee, loading } = useContext(EmployeeContext);

  return loading ? (
    <p>Mohon tunggu</p>
  ) : (
    <FadeIn>
      <div className="row">
        <div className="col-md-12">
          <button className="btn btn-primary mt-5 mb-5 ml-3">
            <a href="/#/admin/pegawai" className="text-white">
              Kembali
            </a>
          </button>
          <button
            className="btn btn-danger mt-5 mb-5 ml-3"
            onClick={() =>
              exportToPdf(window.$(".formEmployee")[0], "Daftar-Kerja-Pegawai")
            }
          >
            PDF
          </button>
          <button
            className="btn btn-success mt-5 mb-5 ml-3"
            onClick={() => exportToExcel("employeeTable")}
          >
            Excel
          </button>
        </div>
      </div>

      <form
        class="formEmployee"
        style={{ maxWidth: "none", width: 1005 + "px" }}
      >
        <div id="employeeTable" className="table-responsive">
          <table className="table table-striped table-inverse">
            <thead className="thead-inverse">
              <tr className="d-flex">
                <th className="col-2 text-center">#</th>
                <th className="col-2">Nama</th>
                <th className="col-2">Pekerjaan</th>
                <th className="col-3">Wilayah</th>
                <th className="col-1">Zona</th>
                <th className="col-2 text-center">Shift</th>
              </tr>
            </thead>
            <tbody>
              {employee.map((value, index) => {
                const { name, region, zone, role, shift } = value;

                return (
                  <tr key={index} className="d-flex">
                    <td className="col-2 text-center">{index + 1}</td>
                    <td className="col-2">{name}</td>
                    <td className="col-2">{role}</td>
                    <td className="col-3">{region}</td>
                    <td className="col-1">{zone.toString()}</td>
                    <td className="col-2 text-center">{shift}</td>
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

export default ExportEmployee;
