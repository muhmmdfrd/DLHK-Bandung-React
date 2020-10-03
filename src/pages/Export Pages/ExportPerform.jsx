import React, { useContext } from "react";
import FadeIn from "react-fade-in";

// * context
import { PresenceContext } from "../../providers/PresenceContext";

// * plugin
import excel from "tableexport";
import jsPDF from "jspdf";
import checkNullNum from "../../helpers/checkNullNum";
import html2canvas from "html2canvas";

const ExportPerform = () => {
  const { perform, loading } = useContext(PresenceContext);
  const exportPdf = () => {
    const form = window.$(".formPerform")[0];

    getCanvas().then((canvas) => {
      const img = canvas.toDataURL("image/png");
      const doc = new jsPDF({
        unit: "px",
        format: "a4",
        orientation: "landscape",
      });

      doc.addImage(img, "JPEG", 20, 20);
      doc.save("Statistik-Performa.pdf");
    });

    function getCanvas() {
      return html2canvas(form, {
        imageTimeout: 2000,
        removeContainer: true,
      });
    }
  };

  const exportExcel = () => {
    excel.prototype.typeConfig.date.assert = () => {
      return false;
    };

    excel(window.$("#tablePerform"), {
      formats: ["xlsx"],
      bootstrap: true,
    });
  };

  return loading ? (
    <p>Mohon ditunggu</p>
  ) : (
    <FadeIn>
      <div className="row">
        <div className="col-md-12">
          <button className="btn btn-primary mt-5 mb-5 ml-3">
            <a href="/#/admin/statistik-performa" className="text-white">
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

      <form
        class="formPerform"
        style={{ maxWidth: "none", width: 1005 + "px" }}
      >
        <div id="tablePerform" className="table-responsive">
          <table className="table table-striped table-inverse">
            <thead className="thead-inverse">
              <tr className="d-flex">
                <th className="col-1 text-center">#</th>
                <th className="col-2">NIP</th>
                <th className="col-2">Nama</th>
                <th className="col-2">Pekerjaan</th>
                <th className="col-2">Wilayah</th>
                <th className="col-1">Zona</th>
                <th className="col-2 text-center">Persentase Performa</th>
              </tr>
            </thead>
            <tbody>
              {perform.map((value, index) => {
                const {
                  employeeNumber,
                  employeeName,
                  regionName,
                  zoneName,
                  roleName,
                  percentage,
                } = value;

                return (
                  <tr key={index} className="d-flex">
                    <td className="col-1 text-center">{index + 1}</td>
                    <td className="col-2">{employeeNumber}</td>
                    <td className="col-2">{employeeName}</td>
                    <td className="col-2">{roleName}</td>
                    <td className="col-2">{regionName}</td>
                    <td className="col-1">{zoneName.toString()}</td>
                    <td className="col-2 text-center">
                      {checkNullNum(percentage)}%
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

export default ExportPerform;
