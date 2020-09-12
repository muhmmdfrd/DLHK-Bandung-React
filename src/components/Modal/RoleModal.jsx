import React, { useState, useEffect, useContext } from "react";
import { RoleContext } from "../../providers/RoleContext";

const RoleModal = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const { dataRoleId, editRole } = useContext(RoleContext);

  const edit = () => {
    window.$("#btnRole").prop("disabled", true).html("loading...");

    const data = {
      roleName: name,
      status: status,
      roleId: id,
    };

    editRole(data);
  };

  useEffect(() => {
    const { roleId, roleName, status } = dataRoleId;
    setName(roleName);
    setStatus(status);
    setId(roleId);
  }, [dataRoleId]);

  return (
    <div
      className="modal fade"
      id="roleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Posisi Pelamar</h5>
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
            <form>
              <div className="row">
                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-12">
                  <select
                    className="form-control"
                    value={status}
                    onChange={(event) => setStatus(event.target.value)}
                  >
                    <option value="true">Aktif</option>
                    <option value="false">Tidak Aktif</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              id="btnRole"
              type="button"
              className="btn btn-primary"
              onClick={() => edit()}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleModal;
