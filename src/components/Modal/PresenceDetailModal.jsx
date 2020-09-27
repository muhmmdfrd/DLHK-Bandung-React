import React, { useContext, useState } from "react";
import { PresenceContext } from "../../providers/PresenceContext";

const PresenceDetailModal = () => {
  const { detail, loc, stat, handleFile } = useContext(PresenceContext);

  return (
    <div
      className="modal fade"
      id="detailModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Detail Keterangan {loc} {convertPresenceStatus(stat)}
            </h5>
            <button
              className="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="table-responsive">
              <table className="table table-striped table-inverse">
                <thead className="thead-inverse">
                  <tr className="d-flex">
                    <th className="col-1 text-center">#</th>
                    <th className="col-2">Nama</th>
                    <th className="col-2">Jabatan</th>
                    <th className="col-2">Waktu</th>
                    <th className="col-2">Jalan</th>
                    <th className="col-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {detail.map((value, index) => {
                    const {
                      timeOfPresence,
                      employeeName,
                      location,
                      roleName,
                      livePhoto,
                    } = value;

                    return (
                      <tr key={index} className="d-flex">
                        <td className="col-1 text-center">{index + 1}</td>
                        <td className="col-2">{employeeName}</td>
                        <td className="col-2">{roleName}</td>
                        <td className="col-2">{timeOfPresence} WIB</td>
                        <td className="col-2">
                          {location == null ? "-" : location}
                        </td>
                        <td className="col-3 text-center">
                          <div className="row">
                            <div className="col-md-12">
                              <button
                                className="btn btn-sm btn-success btn-icon-split"
                                onClick={() => {
                                  handleFile(livePhoto);
                                  window.$("#imageModalDetail").modal("toggle");
                                }}
                              >
                                <span className="icon text-white-50">
                                  <i
                                    className="fa fa-eye"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                <span className="text mr-1 pl-3">
                                  Lihat Foto
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
          </div>
          <div className="modal-footer">
            <button className="btn btn-success" data-dismiss="modal">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const convertPresenceStatus = (status) => {
  let result = "";
  switch (status) {
    case "0":
      result = "Alfa";
      break;
    case "1":
      result = "Hadir";
      break;
    case "2":
      result = "Izin";
      break;
    default:
      break;
  }

  return result;
};

export default PresenceDetailModal;
