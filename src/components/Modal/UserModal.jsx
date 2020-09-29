import React, { useState, useEffect, useContext } from "react";

const UserModal = () => {
  const [username, setUsername] = useState("");
  const [password, setPasword] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleRole = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = () => {
    window.$("#btn-submit-interview-text").text("loading...");
    window.$("#btn-submit-interview").prop("disabled", true);

    const data = {
      dateOfInterview: date,
      place: place,
      email: email,
      phone: phone,
      interviewer: name,
    };

    addInterview(data);
    sendEmail(data);
  };

  return (
    <div
      className="modal fade"
      id="interviewModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Buat Jadwal Interview</h5>
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
                    <label>Jadwal Interview</label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      value={date}
                      onChange={handleDate}
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-12">
                    <label>Tempat</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tempat Wawancara"
                      value={place}
                      onChange={handlePlace}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button
                id="btn-submit-interview"
                className="btn btn-primary"
                onClick={() => handleSubmit()}
              >
                <span id="btn-submit-interview-text">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
