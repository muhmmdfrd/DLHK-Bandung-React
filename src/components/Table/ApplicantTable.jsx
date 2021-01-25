import React from "react";

const ApplicantTable = ({
  response,
  currentPage,
  postPerPage,
  detail,
  deletePerson,
}) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-inverse">
        <thead className="thead-inverse">
          <tr className="d-flex">
            <th className="col-1 text-center">#</th>
            <th className="col-3">Nama</th>
            <th className="col-3">Posisi yang Dilamar</th>
            <th className="col-5 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {response === undefined
            ? null
            : response.map((value, index) => {
                const { personId, personName, jobDesc } = value;

                return (
                  <tr key={index} className="d-flex">
                    <td className="col-1 text-center">
                      {(currentPage - 1) * postPerPage + index + 1}
                    </td>
                    <td className="col-3">{personName}</td>
                    <td className="col-3">{jobDesc}</td>
                    <td className="col-5 text-center">
                      <div className="row">
                        <div className="col-md-6">
                          <button
                            className="btn btn-sm btn-primary btn-icon-split"
                            onClick={() => detail(personId)}
                          >
                            <span className="icon text-white-50">
                              <i
                                className="fa fa-ellipsis-v"
                                aria-hidden="true"
                              ></i>
                            </span>
                            <span
                              id={`span-btns-${personId}`}
                              className="text mr-4 pl-3"
                            >
                              Detail
                            </span>
                          </button>
                        </div>
                        <div className="col-md-6">
                          <button
                            className="btn btn-sm btn-danger btn-icon-split"
                            onClick={() => deletePerson(personId)}
                          >
                            <span className="icon text-white-50">
                              <i className="fa fa-trash" aria-hidden="true"></i>
                            </span>
                            <span className="text mr-1 pl-3">
                              Tolak&nbsp;&nbsp;&nbsp;&nbsp;
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

export default ApplicantTable;
