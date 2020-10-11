import React, { useContext, useState } from "react";
import { GetEmployeeData } from "../../Services/EmployeeService";
import addFile from "../../Services/ImportExcel";
import { EmployeeContext } from "../../providers/EmployeeContext";

const ExcelEmployeeModal = () => {
  const [file, setFile] = useState("");
  const [type, setType] = useState("employee");

  const { setEmployee, setLoading } = useContext(EmployeeContext);

  const handleFile = (event) => {
    setFile(event.target.files[0]);
  };

  const handleType = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = () => {
    const formData = new FormData();

    formData.append("type", type);
    formData.append("file", file);

    addFile(formData)
      .then(() => {
        window.$("#btn-submit-excele").prop("disabled", true);
        window.$("#btn-submit-excele-text").text("loading...");
      })
      .then(() => alert("data berhasil di-import"))
      .then(() => {
        window.$("#btn-submit-excele").prop("disabled", false);
        window.$("#btn-submit-excele-text").text("Submit");
        window.$("#excelEmployeeModal").modal("hide");
      })
      .finally(() =>
        GetEmployeeData()
          .then((response) => setEmployee(response.data.data))
          .finally(() => setLoading(false))
      );
  };

  return (
    <div
      className="modal fade"
      id="excelEmployeeModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Import Data Dari XLSX</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <form>
                <div className="row">
                  <div className="col-md-12">
                    <label>File</label>
                    <input
                      type="file"
                      placeholder="XLSX"
                      className="form-control-file"
                      accept=".xlsx"
                      onChange={handleFile}
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-12">
                    <label>Kode</label>
                    <input
                      type="text"
                      className="form-control"
                      value={type}
                      onChange={handleType}
                      readOnly
                    />
                  </div>
                </div>
                <br />
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button
                id="btn-submit-excele"
                className="btn btn-primary"
                onClick={() => handleSubmit()}
              >
                <span id="btn-submit-excele-text">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcelEmployeeModal;
