import React, { useState, useContext, useEffect } from "react";
import capitalize from "../../helpers/capitalize";
import { ImeiContext } from "../../providers/ImeiContext";

const ImeiModal = () => {
  const [imei, setImei] = useState("");
  const [deviceData, setDevice] = useState("");

  const { statusModal, imeiId, addImei, updateImei } = useContext(ImeiContext);

  useEffect(() => {
    if (statusModal === "edit") {
      const { imeiName, device } = imeiId;
      setImei(imeiName);
      setDevice(device);
    } else {
      setImei("");
      setDevice("");
    }
  }, [imeiId, statusModal]);

  const handleImei = (event) => {
    setImei(event.target.value);
  };

  const handleDevice = (event) => {
    setDevice(event.target.value);
  };

  const handleSubmit = () => {
    window.$("#btn-submit-imei").prop("disabled", true);
    window.$("#btn-submit-imei-text").text("loading...");

    const data = {
      imeiName: imei,
      device: deviceData,
      imeiId: imeiId.imeiId,
    };

    statusModal === "edit" ? updateImei(data) : addImei(data);
  };

  return (
    <div
      className="modal fade"
      id="imeiModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {capitalize(statusModal)} IMEI dan Device ID
            </h5>
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
                    <label>IMEI</label>
                    <input
                      type="text"
                      placeholder="IMEI"
                      className="form-control"
                      value={imei}
                      onChange={handleImei}
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-12">
                    <label>Device ID</label>
                    <input
                      type="TEXT"
                      className="form-control"
                      placeholder="Device ID"
                      value={deviceData}
                      onChange={handleDevice}
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
                id="btn-submit-imei"
                className="btn btn-primary"
                onClick={() => handleSubmit()}
              >
                <span id="btn-submit-imei-text">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImeiModal;
