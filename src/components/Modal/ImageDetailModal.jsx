import React, { useContext, useEffect, useState } from "react";
import { PresenceContext } from "../../providers/PresenceContext";

const ImageDetailModal = () => {
  const [data, setData] = useState("");

  const { file } = useContext(PresenceContext);

  useEffect(() => {
    setData(file);
  }, [file]);
  return (
    <div
      className="modal fade"
      id="imageModalDetail"
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
              <form>
                <div className="row">
                  <div className="col-md-12">
                    <img
                      className="img-fluid"
                      src={`data:image/*;base64, ${data}`}
                      alt={`presence detail`}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetailModal;
