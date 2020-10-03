import React, { useContext } from "react";
import FadeIn from "react-fade-in";
import exportToExcel from "tableexport";
import roundNumber from "../../helpers/roundNumber";
import { PresenceContext } from "../../providers/PresenceContext";

const ExportPresence = () => {
  const { presence, loading } = useContext(PresenceContext);

  const exportPdf = () => alert("pdf");

  const exportExcel = () => {
    const today = new Date();
    exportToExcel.prototype.typeConfig.date.assert = () => {
      return false;
    };

    exportToExcel(window.$("#tablePresence"), {
      headings: true,
      footers: true,
      formats: ["xlsx"],
      filename: `${today.toDateString()}-Statistik-Absen`,
      bootstrap: true,
      position: "well",
      ignoreRows: null,
      ignoreCols: null,
    });
  };

  return (
    <FadeIn>
      <div className="row">
        <div className="col-md-12">
          <button className="btn btn-primary mt-5 mb-5 ml-3">
            <a href="/#/admin/statistik-absensi" className="text-white">
              Kembali
            </a>
          </button>
          <button
            className="btn btn-danger mt-5 mb-5 ml-3"
            onClick={() => exportPdf()}
          >
            PDF
          </button>
          <button
            className="btn btn-success mt-5 mb-5 ml-3"
            onClick={() => exportExcel()}
          >
            Excel
          </button>
        </div>
      </div>

      <form class="form" style={{ maxWidth: "none" }}>
        <div id="tablePresence" className="table-responsive">
          <table className="table table-striped table-inverse">
            <thead className="thead-inverse">
              <tr className="d-flex">
                <th className="col-1 text-center">#</th>
                <th className="col-2">NIK</th>
                <th className="col-2">Nama</th>
                <th className="col-2">Zona</th>
                <th className="col-2">Bagian</th>
                <th className="col-1 text-center">Hadir</th>
                <th className="col-1 text-center">Izin</th>
                <th className="col-1 text-center">Absen</th>
              </tr>
            </thead>
            <tbody>
              {presence.map((value, index) => {
                const {
                  employeeNumber,
                  employeeName,
                  zoneName,
                  leave,
                  presence,
                  absence,
                  roleName,
                } = value;

                const total = presence + leave + absence;

                return loading ? (
                  <p>Mohon Tunggu</p>
                ) : (
                  <tr key={index} className="d-flex">
                    <td className="col-1 text-center">{index + 1}</td>
                    <td className="col-2">{employeeNumber}</td>
                    <td className="col-2">{employeeName}</td>
                    <td className="col-2">{zoneName.toString()}</td>
                    <td className="col-2">{roleName}</td>
                    <td className="col-1 text-center">
                      {roundNumber((presence / total) * 100)}%
                    </td>
                    <td className="col-1 text-center">
                      {roundNumber((leave / total) * 100)}%
                    </td>
                    <td className="col-1 text-center">
                      {roundNumber((absence / total) * 100)}%
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

export default ExportPresence;
