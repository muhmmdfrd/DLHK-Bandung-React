import React, { useContext, useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import { NavLink } from "react-router-dom";

// * page
import LoadingScreen from "./LoadingScreen";

// * context
import { PersonContext } from "../providers/PersonContext";
import { EmployeeContext } from "../providers/EmployeeContext";

const DetailPerson = () => {
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
  const [email, setEmail] = useState("");
  const [child, setChild] = useState(0);
  const [status, setStatus] = useState(true);
  const [nik, setNik] = useState("");

  const {
    dataPersonId,
    loading,
    handleEdit,
    editPerson,
    deletePerson,
  } = useContext(PersonContext);

  const { getPersonId } = useContext(EmployeeContext);

  // * method
  const getIdUri = (url) => {
    return url.substring(url.lastIndexOf("/") + 1);
  };

  const handleNik = (event) => {
    setNik(event.target.value);
  };

  const handleStatus = () => {
    setStatus(false);
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

  const handleChild = (event) => {
    setChild(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const submitEdit = (id) => {
    window.$("#btnDetailEdit").prop("disabled", true);

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
      totalChild: child,
      email: email,
      nik: nik,
    };

    editPerson(data);
  };
  // * end of method

  useEffect(() => {
    if (status) {
      handleEdit(getIdUri(window.location.href));
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
        email,
        totalChild,
        nik,
      } = dataPersonId;

      const dateBirth = new Date(dateOfBirth);
      var justDate = dateBirth.getDate();
      justDate = justDate < 10 ? `0${justDate}` : justDate;
      const year = dateBirth.getFullYear();
      var month = dateBirth.getMonth() + 1;
      month = month < 10 ? `0${month}` : month;
      const resDate = `${year}-${month}-${justDate}`;

      setName(personName);
      setAddress(address);
      setNik(nik);
      setPhone(phone);
      setPBirth(placeOfBirth);
      setDBirth(resDate);
      setLastSchool(lastDegree);
      setLastJob(previousJob);
      setNameCouple(nameOfCouple);
      setJobCouple(jobOfCouple);
      setId(personId);
      setEmail(email);
      setChild(totalChild);
    }
  }, [dataPersonId, status, handleEdit]);

  return loading ? (
    <LoadingScreen />
  ) : (
    <FadeIn>
      <div className="container-fluid mt-4">
        <h1 className="h3 mb-2 text-gray-800">Kepegawaian</h1>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              <NavLink to="/admin/kontrak-pegawai">Kembali</NavLink>
            </h6>
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-md-3">
                  <label>Nama</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={handleName}
                    readOnly={status}
                  />
                </div>
                <div className="col-md-3">
                  <label>Tempat Lahir</label>
                  <input
                    type="text"
                    className="form-control"
                    value={pBirth}
                    onChange={handlePBirth}
                    readOnly={status}
                  />
                </div>
                <div className="col-md-3">
                  <label>Tanggal Lahir</label>
                  <input
                    type="date"
                    className="form-control"
                    value={dBirth}
                    onChange={handleDBirth}
                    readOnly={status}
                  />
                </div>
                <div className="col-md-3">
                  <label>Usia</label>
                  <input
                    type="text"
                    className="form-control"
                    value={
                      new Date().getFullYear() -
                      dBirth.substring(0, dBirth.indexOf("-"))
                    }
                    readOnly
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-3">
                  <label>Pendidikan Terakhir</label>
                  <input
                    type="text"
                    className="form-control"
                    value={lastSchool}
                    onChange={handleLastSchool}
                    readOnly={status}
                  />
                </div>
                <div className="col-md-3">
                  <label>Pengalaman Kerja (Terakhir)</label>
                  <input
                    type="text"
                    className="form-control"
                    value={lastJob}
                    onChange={handleLastJob}
                    readOnly={status}
                  />
                </div>
                <div className="col-md-3">
                  <label>Nama Pasangan</label>
                  <input
                    type="text"
                    className="form-control"
                    value={nameCouple}
                    onChange={handleNameCouple}
                    readOnly={status}
                  />
                </div>
                <div className="col-md-3">
                  <label>Pekerjaan Pasangan</label>
                  <input
                    type="text"
                    className="form-control"
                    value={jobCouple}
                    onChange={handleJobCouple}
                    readOnly={status}
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-3">
                  <label>Nomer Telepon</label>
                  <input
                    type="number"
                    className="form-control"
                    value={dataPhone}
                    onChange={handlePhone}
                    readOnly={status}
                  />
                </div>
                <div className="col-md-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={handleEmail}
                    readOnly={status}
                  />
                </div>
                <div className="col-md-3">
                  <label>Jumlah Anak</label>
                  <input
                    type="number"
                    className="form-control"
                    value={child}
                    onChange={handleChild}
                    readOnly={status}
                  />
                </div>
                <div className="col-md-3">
                  <label>NIK</label>
                  <input
                    type="text"
                    className="form-control"
                    value={nik}
                    onChange={handleNik}
                    readOnly={status}
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-12">
                  <label>Alamat</label>
                  <textarea
                    className="form-control"
                    onChange={handleAddress}
                    value={dataAddress}
                    readOnly={status}
                  ></textarea>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-4">&nbsp;</div>
                <div className="col-md-4">&nbsp;</div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-4">
                      <button
                        id="btnDetailEdit"
                        className="btn btn-primary btn-flat btn-block btn-md"
                        onClick={(event) => {
                          event.preventDefault();
                          status ? handleStatus() : submitEdit(id);
                        }}
                      >
                        {status ? "Edit" : "Submit"}
                      </button>
                    </div>
                    <div className="col-md-4">
                      <button
                        className="btn btn-success btn-flat btn-block btn-md"
                        onClick={(event) => {
                          event.preventDefault();
                          getPersonId(id);
                        }}
                      >
                        Kontrak
                      </button>
                    </div>
                    <div className="col-md-4">
                      <button
                        className="btn btn-danger btn-flat btn-block btn-md"
                        onClick={(event) => {
                          event.preventDefault();
                          deletePerson(id);
                        }}
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default DetailPerson;
