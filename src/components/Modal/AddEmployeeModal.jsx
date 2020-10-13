import React, { useContext, useState, useEffect } from "react";
import { PersonContext } from "../../providers/PersonContext";

const AddEmployeeModal = () => {
  const { modalStatus, addPerson, editPerson, dataPersonId } = useContext(
    PersonContext
  );

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [dataPhone, setPhone] = useState("");
  const [dBirth, setDBirth] = useState("");
  const [pBirth, setPBirth] = useState("");
  const [lastJob, setLastJob] = useState("");
  const [lastSchool, setLastSchool] = useState("");
  const [nameCouple, setNameCouple] = useState("");
  const [jobCouple, setJobCouple] = useState("");
  const [dataAddress, setAddress] = useState("");
  const [status, setStatus] = useState("");

  // * method
  const clear = () => {
    setId("");
    setName("");
    setAddress("");
    setPhone("");
    setPBirth("");
    setDBirth("");
    setLastSchool("");
    setLastJob("");
    setNameCouple("");
    setJobCouple("");
  };

  const loadButton = () => {
    window.$("#btn-submit-modal").text("Load...");
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleDBirth = (event) => {
    setDBirth(event.target.value);
  };

  const handlePBirth = (event) => {
    setPBirth(event.target.value);
  };

  const handleLastJob = (event) => {
    setLastJob(event.target.value);
  };

  const handleLastSchool = (event) => {
    setLastSchool(event.target.value);
  };

  const handleNameCouple = (event) => {
    setNameCouple(event.target.value);
  };

  const handleJobCouple = (event) => {
    setJobCouple(event.target.value);
  };

  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleAdd = () => {
    let data = {
      personName: name,
      address: dataAddress,
      phone: dataPhone,
      placeOfBirth: pBirth,
      dateOfBirth: dBirth,
      lastDegree: lastSchool,
      previousJob: lastJob,
      nameOfCouple: nameCouple,
      jobOfCouple: jobCouple,
    };

    addPerson(data);
    loadButton();
    window.$("#formAddEmployee").trigger("reset");
    clear();
  };

  const handleEdit = (id) => {
    let data = {
      personId: id,
      personName: name,
      address: dataAddress,
      phone: dataPhone,
      placeOfBirth: pBirth,
      dateOfBirth: dBirth,
      lastDegree: lastSchool,
      previousJob: lastJob,
      nameOfCouple: nameCouple,
      jobOfCouple: jobCouple,
    };

    editPerson(data);
    setStatus(true);
    window.$("#formAddEmployee").trigger("reset");
    clear();
  };
  // * end of method

  useEffect(() => {
    if (status === "Edit") {
      const {
        personId,
        address,
        personName,
        phone,
        placeOfBirth,
        lastDegree,
        previousJob,
        dateOfBirth,
        nameOfCouple,
        jobOfCouple,
      } = dataPersonId;

      const dateBirth = new Date(dateOfBirth);
      const justDate = dateBirth.getDate();
      const year = dateBirth.getFullYear();
      var month = dateBirth.getMonth() + 1;
      month = month < 10 ? `0${month}` : month;
      const resDate = `${year}-${month}-${justDate}`;

      setName(personName);
      setAddress(address);
      setPhone(phone);
      setPBirth(placeOfBirth);
      setDBirth(resDate);
      setLastSchool(lastDegree);
      setLastJob(previousJob);
      setNameCouple(nameOfCouple);
      setJobCouple(jobOfCouple);
      setId(personId);
    } else if (status === "Tambah") {
      clear();
    }
  }, [dataPersonId, status]);

  useEffect(() => {
    setStatus(modalStatus);
  }, [modalStatus]);

  return (
    <div
      className="modal fade"
      id="EmployeeModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{status} Data Pegawai</h5>
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
              <form id="formAddEmployee">
                <div className="row">
                  <div className="col-md-6">
                    <label>Nama Pegawai</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nama"
                      value={name}
                      onChange={handleName}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Nomer Telepon</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Nomer Telepon"
                      value={dataPhone}
                      onChange={handlePhone}
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <label>Tanggal Lahir</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Tanggal Lahir"
                      value={dBirth}
                      onChange={handleDBirth}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Kota Lahir</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Kota Lahir"
                      value={pBirth}
                      onChange={handlePBirth}
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <label>Pendidikan Terakhir</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pendidikan Terakhir"
                      value={lastSchool}
                      onChange={handleLastSchool}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Pekerjaan Terakhir</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pekerjaan Terakhir"
                      value={lastJob}
                      onChange={handleLastJob}
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <label>Nama Pasangan</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nama Suami/Istri"
                      value={nameCouple}
                      onChange={handleNameCouple}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Pekerjaan Pasangan</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pekerjaan Suami/Istri"
                      value={jobCouple}
                      onChange={handleJobCouple}
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-12">
                    <textarea
                      id="textAddress"
                      className="form-control"
                      rows="4"
                      placeholder="Alamat Sesuai KTP"
                      value={dataAddress}
                      onChange={handleAddress}
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button
                className="btn btn-primary"
                onClick={() =>
                  status !== "Edit" ? handleAdd() : handleEdit(id)
                }
              >
                <span id="btn-submit-modal">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
