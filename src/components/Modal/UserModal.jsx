import React, { useState, useEffect, useContext } from "react";
import capitalize from "../../helpers/capitalize";
import { EmployeeContext } from "../../providers/EmployeeContext";
import { UserContext } from "../../providers/UserContext";

const UserModal = () => {
  const [username, setUsername] = useState("");
  const [password, setPasword] = useState("");
  const [id, setId] = useState("");
  const [employeeDataId, setEmployeeId] = useState("");

  const { userId, updateUser, statusModal, addUser } = useContext(UserContext);
  const { employeeUser } = useContext(EmployeeContext);

  useEffect(() => {
    if (statusModal === "edit") {
      const { username, employeeId } = userId;
      setUsername(username);
      setId(userId.userId);
      setEmployeeId(employeeId);
    } else {
      setUsername("");
      setId("");
      setEmployeeId("");
    }
    setPasword("");
  }, [userId, statusModal]);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPasword(event.target.value);
  };

  const handleEmployeeId = (event) => {
    setEmployeeId(event.target.value);
  };

  const handleSubmit = () => {
    window.$("#btn-submit-user-account").prop("disabled", true);
    window.$("#btn-submit-user-text").text("loading...");

    const data = {
      username: username,
      password: password,
      userId: id,
      employeeId: employeeDataId,
    };

    statusModal === "edit" ? updateUser(data) : addUser(data);
  };

  return (
    <div
      className="modal fade"
      id="userModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{capitalize(statusModal)} User</h5>
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
                    <label>username</label>
                    <input
                      type="text"
                      placeholder="Username"
                      className="form-control"
                      value={username}
                      onChange={handleUsername}
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-12">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={handlePassword}
                    />
                    {statusModal === "edit" ? (
                      <small>Biarkan jika tidak ingin mengganti password</small>
                    ) : null}
                  </div>
                </div>
                <br />
                {statusModal === "edit" ? null : (
                  <>
                    <div className="row">
                      <div className="col-md-12">
                        <label>Nama Pegawai</label>
                        <select
                          className="form-control"
                          disabled={statusModal === "edit"}
                          onChange={handleEmployeeId}
                          value={Number(employeeDataId)}
                        >
                          <option>Pilih Pegawai</option>
                          {employeeUser.map((value, index) => {
                            return (
                              <option
                                key={index}
                                value={value.employeeId.toString()}
                              >
                                {value.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <br />
                  </>
                )}
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button
                id="btn-submit-user-account"
                className="btn btn-primary"
                onClick={() => handleSubmit()}
              >
                <span id="btn-submit-user-text">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
