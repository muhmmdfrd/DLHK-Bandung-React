import React from "react";

const UserTable = ({ response, action, currentPage, postPerPage }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-inverse">
        <thead className="thead-inverse">
          <tr className="d-flex">
            <th className="col-1 text-center">#</th>
            <th className="col-2">Nama</th>
            <th className="col-2">Username</th>
            <th className="col-2">Jabatan</th>
            <th className="col-5 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {response.map((value, index) => {
            const { username, personName, roleName, userId } = value;

            return (
              <tr key={index} className="d-flex">
                <td className="col-1 text-center">
                  {(currentPage - 1) * postPerPage + index + 1}
                </td>
                <td className="col-2">{personName}</td>
                <td className="col-2">{username}</td>
                <td className="col-2">{roleName}</td>
                <td className="col-5 text-center">
                  <div className="row">
                    <div className="col-md-6">
                      <button
                        className="btn btn-sm btn-primary btn-icon-split"
                        onClick={() => alert(userId)}
                      >
                        <span className="icon text-white-50">
                          <i
                            className="fa fa-ellipsis-v"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span
                          id={`span-btn-${userId}`}
                          className="text mr-4 pl-3"
                        >
                          Edit&nbsp;
                        </span>
                      </button>
                    </div>
                    <div className="col-md-6">
                      <button
                        className="btn btn-sm btn-danger btn-icon-split"
                        onClick={() => alert(userId)}
                      >
                        <span className="icon text-white-50">
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </span>
                        <span className="text mr-1 pl-3">Delete</span>
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

export default UserTable;
