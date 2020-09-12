import React from "react";
import checkRoleStatus from "../../helpers/checkRoleStatus";

const RoleTable = ({ response, action, currentPage, postPerPage }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-inverse">
        <thead className="thead-inverse">
          <tr className="d-flex">
            <th className="col-1 text-center">#</th>
            <th className="col-4">Nama Posisi</th>
            <th className="col-4">Status</th>
            <th className="col-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {response.map((value, index) => {
            const { roleId, roleName, status } = value;
            const { handleEdit } = action;

            return (
              <tr key={index} className="d-flex">
                <td className="col-1 text-center">
                  {(currentPage - 1) * postPerPage + index + 1}
                </td>
                <td className="col-4">{roleName}</td>
                <td className="col-4">{checkRoleStatus(status)}</td>
                <td className="col-3">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <button
                        className="btn btn-sm btn-primary btn-icon-split"
                        onClick={() => handleEdit(roleId)}
                      >
                        <span className="icon text-white-50">
                          <i className="fa fa-pen" aria-hidden="true"></i>
                        </span>
                        <span
                          id={`span-btn-${roleId}`}
                          className="text mr-4 pl-3"
                        >
                          Edit&nbsp;
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

export default RoleTable;
