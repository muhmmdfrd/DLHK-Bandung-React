import React, { useContext, useRef } from "react";
import { EmployeeContext } from "../../providers/EmployeeContext";
import excel from "tableexport";
import FadeIn from "react-fade-in";

const ExportEmployee = () => {
  const { employee, loading } = useContext(EmployeeContext);
  const btnRef = useRef();

  const exportPdf = () => {};

  const exportExcel = () => {
    const today = new Date();

    if (btnRef.current) {
      btnRef.current.setAttribute("disabled", "disabled");
    }

    excel.prototype.typeConfig.date.assert = () => {
      return false;
    };
    excel(window.$("#employeeTable"), {
      headings: true,
      footers: true,
      formats: ["xlsx"],
      filename: `${today.toDateString()}-Daftar-Pegawai`,
      bootstrap: true,
      position: "well",
      ignoreRows: null,
      ignoreCols: null,
    });
  };

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
            ref={btnRef}
            className="btn btn-danger mt-5 mb-5 ml-3"
            onClick={() => exportPdf()}
          >
            PDF
          </button>
          <button
            ref={btnRef}
            className="btn btn-success mt-5 mb-5 ml-3"
            onClick={() => exportExcel()}
          >
            Excel
          </button>
        </div>
      </div>

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
    </FadeIn>
  );
};

export default ExportEmployee;
