import React, { useState, useEffect, useContext } from "react";
import { ApplicantContext } from "../../providers/ApplicantContext";

const ApplicantModal = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [dataPhone, setPhone] = useState("");
  const [lastJob, setLastJob] = useState("");
  const [lastSchool, setLastSchool] = useState("");
  const [job, setJob] = useState("");
  const [ktp, setKtp] = useState("");
  const [photo, setPhoto] = useState();
  const [letterApp, setLetterApp] = useState("");
  const [sertificate, setSertificate] = useState("");
  const [nik, setNik] = useState("");

  // * context
  const { appId, interview } = useContext(ApplicantContext);

  useEffect(() => {
    const {
      personId,
      personName,
      phone,
      lastDegree,
      previousJob,
      ktp,
      photo,
      sertificate,
      appLetter,
      jobDesc,
      nik,
    } = appId;

    setId(personId);
    setName(personName);
    setPhone(phone);
    setLastJob(previousJob);
    setLastSchool(lastDegree);
    setKtp(ktp);
    setSertificate(sertificate);
    setLetterApp(appLetter);
    setPhoto(photo);
    setJob(jobDesc);
    setNik(nik);
  }, [appId]);

  return (
    <div
      className="modal fade"
      id="addEmployeeModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Data Pelamar</h5>
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
              <form id="formApplicant">
                <div className="row">
                  <div className="col-md-6">
                    <label>Nama Pelamar</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={name}
                      readOnly
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Nomer Telepon</label>
                    <input
                      type="number"
                      className="form-control"
                      defaultValue={dataPhone}
                      readOnly
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
                      defaultValue={lastSchool}
                      readOnly
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Pekerjaan Terakhir</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={lastJob}
                      readOnly
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <label>Posisi yang Dilamar</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={job}
                      readOnly
                    />
                  </div>
                  <div className="col-md-6">
                    <label>NIK</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={nik}
                      readOnly
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <label>KTP</label>
                    <ImageDocument file={ktp} />
                  </div>
                  <div className="col-md-6">
                    <label>Pass Foto</label>
                    <ImageDocument file={photo} />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <label>Ijazah</label>
                    <ImageDocument file={sertificate} />
                  </div>
                  <div className="col-md-6">
                    <label>Surat Lamaran</label>
                    <ImageDocument file={letterApp} />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button className="btn btn-primary" onClick={() => interview(id)}>
                <span id="btn-submit-modal">Jadwalkan Interview</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageDocument = ({ file }) => {
  const { zoomImage } = useContext(ApplicantContext);

  return file == null ? (
    <p>tidak ada file</p>
  ) : (
    <img
      onClick={() => zoomImage(file)}
      style={{ cursor: "zoom-in" }}
      className="img-fluid img-thumbnail"
      src={`data:image/*;base64, ${file}`}
      alt={`applicant's document`}
    />
  );
};

export default ApplicantModal;
