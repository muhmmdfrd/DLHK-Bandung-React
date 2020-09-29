import React from "react";

const ImeiTable = ({ response, action, currentPage, postPerPage }) => {
  const { deleteImei, handleEdit } = action;

  const handleDelete = (id) => {
    const anwser = window.confirm(
      "apakah yakin ingin menghapus data tersebut?"
    );

    if (anwser) {
      deleteImei(id);
    }
  };
  return (
    <div className="table-responsive">
      <table className="table table-striped table-inverse">
        <thead className="thead-inverse">
          <tr className="d-flex">
            <th className="col-1 text-center">#</th>
            <th className="col-3">IMEI</th>
            <th className="col-3">Device ID</th>
            <th className="col-5 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {response.map((value, index) => {
            const { imeiName, device, imeiId } = value;

            return (
              <tr key={index} className="d-flex">
                <td className="col-1 text-center">
                  {(currentPage - 1) * postPerPage + index + 1}
                </td>
                <td className="col-3">{imeiName}</td>
                <td className="col-3">{device}</td>
                <td className="col-5 text-center">
                  <div className="row">
                    <div className="col-md-5">
                      <button
                        id={`btn-edit-imei-${imeiId}`}
                        className="btn btn-sm btn-primary btn-icon-split"
                        onClick={() => handleEdit(device)}
                      >
                        <span className="icon text-white-50">
                          <i
                            className="fa fa-ellipsis-v"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span
                          id={`span-btn-${imeiId}`}
                          className="text mr-4 pl-3"
                        >
                          Edit&nbsp;
                        </span>
                      </button>
                    </div>
                    <div className="col-md-6">
                      <button
                        id={`btn-submit-user-${imeiId}`}
                        className="btn btn-sm btn-danger btn-icon-split"
                        onClick={() => handleDelete(imeiId)}
                      >
                        <span className="icon text-white-50">
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </span>
                        <span
                          id={`text-btn-${imeiId}`}
                          className="text mr-1 pl-3"
                        >
                          Delete
                        </span>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ImeiTable;
