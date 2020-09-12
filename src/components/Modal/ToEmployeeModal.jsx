import React, { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "../../providers/EmployeeContext";
import axios from "axios";

const ToEmployeeModal = () => {
  const [region, setRegion] = useState("");
  const [regionId, setRegionId] = useState(0);
  const [zone, setZone] = useState("");
  const [role, setRole] = useState("");
  const [person, setPerson] = useState([]);
  const [personId, setPersonId] = useState(0);
  const [bank, setBank] = useState("");
  const [nip, setNip] = useState("");
  const [first, setFirst] = useState("");
  const [location, setLocation] = useState("");
  const [shift, setShift] = useState("1");

  const { addEmployee } = useContext(EmployeeContext);

  // * method
  const handlePerson = (event) => {
    setPersonId(event.target.value);
  };

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleFirst = (event) => {
    setFirst(event.target.value);
  };

  const handleShift = (event) => {
    setShift(event.target.value);
  };

  const handleRegion = (event) => {
    setRegion(Number(event.target.value));
    setRegionId(event.target.value);
  };

  const handleZone = (event) => {
    setZone(Number(event.target.value));
  };

  const handleRole = (event) => {
    setRole(Number(event.target.value));
  };

  const handleBank = (event) => {
    setBank(event.target.value);
  };

  const handleNIP = (event) => {
    setNip(event.target.value);
  };

  const handleAdd = () => {
    const data = {
      personId: personId,
      zoneId: zone,
      regionId: region,
      roleId: role,
      employeeNumber: nip,
      bank: bank,
      firstContract: first,
      locationContract: location,
      shift: shift,
    };

    addEmployee(data);
  };
  // * end of method

  useEffect(() => {
    setInterval(() => {
      axios
        .get("http://api.dlhk.local/api/person/interview")
        .then((response) => setPerson(response.data.data));
    }, 10000);
  }, []);

  return (
    <div
      className="modal fade"
      id="employeeModal1234"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Tambah Pekerja</h5>
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
              <form id="formToEmployeeModal">
                <div className="row">
                  <div className="col-md-12">
                    <label>Nama Pegawai</label>
                    <select className="form-control" onChange={handlePerson}>
                      <option>Pilih Nama</option>
                      {person.map((value, index) => {
                        return (
                          <option key={index} value={value.personId}>
                            {value.personName}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <label>Nomer Induk Pegawai</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="NIP"
                      onChange={handleNIP}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Lokasi Kerja</label>
                    <select className="form-control" onChange={handleLocation}>
                      <option>Pilih Lokasi</option>
                      <option>BU</option>
                      <option>BS</option>
                    </select>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <label>Bagian</label>
                    <select className="form-control" onChange={handleRole}>
                      <option>Pilih Pekerjaan</option>
                      <option value={4}>Penyapu</option>
                      <option value={5}>Pengangkut Sampah</option>
                      <option value={10}>Drainase</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label>Akun Bank BJB</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rekening Pegawai"
                      onChange={handleBank}
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <label>Wilayah</label>
                    <select className="form-control" onChange={handleRegion}>
                      <option value={0}>Pilih Wilayah</option>
                      <option value={3}>Kordon - Gedebage</option>
                      <option value={4}>Bojonagara</option>
                      <option value={5}>Tegalega</option>
                      <option value={6}>Cibeunying</option>
                      <option value={7}>Karees</option>
                      <option value={8}>Arcamanik - Ujung Berung</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label>Zona</label>
                    <select className="form-control" onChange={handleZone}>
                      {regionId === "4" ? (
                        <React.Fragment>
                          <option value={4}>BO-01</option>
                          <option value={5}>BO-02</option>
                          <option value={6}>BO-03</option>
                          <option value={7}>B0-04</option>
                          <option value={9}>BO-05</option>
                          <option value={8}>BO-06</option>
                          <option value={10}>BO-07</option>
                          <option value={12}>BO-08</option>
                          <option value={13}>BO-09</option>
                        </React.Fragment>
                      ) : null}
                      {regionId === "3" ? (
                        <React.Fragment>
                          <option value={46}>KG-01</option>
                          <option value={47}>KG-02</option>
                          <option value={48}>KG-03</option>
                          <option value={49}>KG-04</option>
                        </React.Fragment>
                      ) : null}
                      {regionId === "8" ? (
                        <React.Fragment>
                          <option value={43}>AU-01</option>
                          <option value={44}>AU-02</option>
                          <option value={45}>AU-03</option>
                        </React.Fragment>
                      ) : null}
                      {regionId === "5" ? (
                        <React.Fragment>
                          <option value={14}>TL-01</option>
                          <option value={15}>TL-02</option>
                          <option value={17}>TL-03</option>
                          <option value={18}>TL-04</option>
                          <option value={19}>TL-05</option>
                          <option value={20}>TL-06</option>
                          <option value={21}>TL-07</option>
                        </React.Fragment>
                      ) : null}
                      {regionId === "7" ? (
                        <React.Fragment>
                          <option value={35}>KA-01</option>
                          <option value={36}>KA-02</option>
                          <option value={37}>KA-03</option>
                          <option value={38}>KA-04</option>
                          <option value={39}>KA-05</option>
                          <option value={40}>KA-06</option>
                          <option value={42}>KA-07</option>
                        </React.Fragment>
                      ) : null}
                      {regionId === "6" ? (
                        <React.Fragment>
                          <option value={22}>CB-01</option>
                          <option value={23}>CB-02</option>
                          <option value={24}>CB-03</option>
                          <option value={25}>CB-04</option>
                          <option value={26}>CB-05</option>
                          <option value={27}>CB-06</option>
                          <option value={28}>CB-07</option>
                          <option value={29}>CB-08</option>
                          <option value={30}>CB-09</option>
                          <option value={31}>CB-10</option>
                          <option value={32}>CB-11</option>
                          <option value={33}>CB-12</option>
                          <option value={34}>CB-13</option>
                        </React.Fragment>
                      ) : null}
                    </select>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-4">
                    <label>Shift</label>
                    <select className="form-control" onChange={handleShift}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div className="col-md-8">
                    <label>Awal Kontrak</label>
                    <input
                      type="date"
                      className="form-control"
                      onChange={handleFirst}
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
                id="btn-submit-modal-person-employee-click"
                className="btn btn-primary"
                onClick={() => handleAdd()}
              >
                <span id="btn-submit-modal-person-employee">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToEmployeeModal;
