import React, { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "../../providers/EmployeeContext";

const EmployeeModal = () => {
  const { editEmployee, dataEmployeeId } = useContext(EmployeeContext);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [dataRegionId, setRegionId] = useState(0);
  const [datazoneId, setZoneId] = useState(0);
  const [dataroleId, setRoleId] = useState("");
  const [shift, setShift] = useState("");

  // * method
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleRegion = (event) => {
    setRegionId(Number(event.target.value));
  };

  const handleZone = (event) => {
    setZoneId(Number(event.target.value));
  };

  const handleRole = (event) => {
    setRoleId(Number(event.target.value));
  };

  const handleShift = (event) => {
    setShift(event.target.value);
  };

  const load = () => {
    window.$("#btn-plis-edit").prop("disabled", true);
    window.$("#btn-submit-employee-modal21").text("loading...");
  };

  const afterLoad = () => {
    window.$("#btn-plis-edit").prop("disabled", false);
    window.$("#btn-submit-employee-modal21").text("Submit");
  };

  const handleEdit = (id) => {
    load();

    let data = {
      regionId: dataRegionId,
      zoneId: datazoneId,
      roleId: dataroleId,
      employeeId: id,
      shift: shift,
    };

    editEmployee(data);
  };
  // * end of method

  useEffect(() => {
    const {
      name,
      regionId,
      zoneId,
      employeeId,
      roleId,
      shift,
    } = dataEmployeeId;

    setName(name);
    setRoleId(roleId);
    setRegionId(regionId);
    setZoneId(zoneId);
    setId(employeeId);
    setShift(shift);
    afterLoad();
  }, [dataEmployeeId]);

  return (
    <div
      className="modal fade"
      id="employeeModal123"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Data Pekerja</h5>
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
              <form id="formEmployee">
                <div className="row">
                  <div className="col-md-12">
                    <label>Nama Pegawai</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nama"
                      value={name}
                      onChange={handleName}
                      readOnly
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-12">
                    <label>Bagian</label>
                    <select
                      className="form-control"
                      onChange={handleRole}
                      value={dataroleId}
                    >
                      <option>Pilih Pekerjaan</option>
                      <option value={4}>Penyapu</option>
                      <option value={5}>Pengangkut Sampah</option>
                      <option value={10}>Drainase</option>
                    </select>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-12">
                    <label>Wilayah</label>
                    <select
                      className="form-control"
                      onChange={handleRegion}
                      value={dataRegionId}
                    >
                      <option value={0}>Pilih Wilayah</option>
                      <option value={3}>Kordon - Gedebage</option>
                      <option value={4}>Bojonagara</option>
                      <option value={5}>Tegalega</option>
                      <option value={6}>Cibeunying</option>
                      <option value={7}>Karees</option>
                      <option value={8}>Arcamanik - Ujung Berung</option>
                    </select>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-12">
                    <label>Zona</label>
                    <select
                      className="form-control"
                      onChange={handleZone}
                      value={datazoneId}
                    >
                      <option>Pilih Zona</option>
                      {dataRegionId === 4 ? (
                        <>
                          <option value={4}>BO-01</option>
                          <option value={5}>BO-02</option>
                          <option value={6}>BO-03</option>
                          <option value={7}>B0-04</option>
                          <option value={9}>BO-05</option>
                          <option value={8}>BO-06</option>
                          <option value={10}>BO-07</option>
                          <option value={12}>BO-08</option>
                          <option value={13}>BO-09</option>
                        </>
                      ) : null}
                      {dataRegionId === 3 ? (
                        <>
                          <option value={46}>KG-01</option>
                          <option value={47}>KG-02</option>
                          <option value={48}>KG-03</option>
                          <option value={49}>KG-04</option>
                        </>
                      ) : null}
                      {dataRegionId === 8 ? (
                        <>
                          <option value={43}>AU-01</option>
                          <option value={44}>AU-02</option>
                          <option value={45}>AU-03</option>
                        </>
                      ) : null}
                      {dataRegionId === 5 ? (
                        <>
                          <option value={14}>TL-01</option>
                          <option value={15}>TL-02</option>
                          <option value={17}>TL-03</option>
                          <option value={18}>TL-04</option>
                          <option value={19}>TL-05</option>
                          <option value={20}>TL-06</option>
                          <option value={21}>TL-07</option>
                        </>
                      ) : null}
                      {dataRegionId === 7 ? (
                        <>
                          <option value={35}>KA-01</option>
                          <option value={36}>KA-02</option>
                          <option value={37}>KA-03</option>
                          <option value={38}>KA-04</option>
                          <option value={39}>KA-05</option>
                          <option value={40}>KA-06</option>
                          <option value={42}>KA-07</option>
                        </>
                      ) : null}
                      {dataRegionId === 6 ? (
                        <>
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
                        </>
                      ) : null}
                    </select>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-12">
                    <label>Shift</label>
                    <select
                      className="form-control"
                      onChange={handleShift}
                      value={shift}
                    >
                      <option value={"1"}>1</option>
                      <option value={"2"}>2</option>
                      <option value={"3"}>3</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button
                id="btn-plis-edit"
                className="btn btn-primary"
                onClick={() => handleEdit(id)}
              >
                <span id="btn-submit-employee-modal21">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeModal;
