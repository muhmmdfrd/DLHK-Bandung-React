import React, { useContext, useRef } from "react";
import { EmployeeContext } from "../../providers/EmployeeContext";
import excel from "tableexport";
import FadeIn from "react-fade-in";

const ExportEmployee = ({ history }) => {
  const { employee } = useContext(EmployeeContext);
  const btnRef = useRef();

  const exportPdf = () => {};

  const exportExcel = () => {
    if (btnRef.current) {
      btnRef.current.setAttribute("disabled", "disabled");
    }

    excel(window.$("#employeeTable"), {
      bootstrap: true,
      formats: ["xlsx"],
    });
  };

  return (
    <FadeIn>
      <button className="btn btn-primary ml-5 mt-5 mb-5">
        <a href="/#/admin/pegawai" className="text-white">
          Kembali
        </a>
      </button>
      <button
        ref={btnRef}
        className="btn btn-success ml-5 mt-5 mb-5"
        onClick={() => exportExcel()}
      >
        Excel
      </button>
      <button
        ref={btnRef}
        className="btn btn-danger ml-5 mt-5 mb-5"
        onClick={() => exportPdf()}
      >
        PDF
      </button>
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
                  <td className="col-1">{zone}</td>
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
