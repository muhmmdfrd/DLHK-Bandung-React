import React from "react";

// * helpers
import dateFormat from "../../helpers/dateFormat";
import timeFormat from "../../helpers/timeFormat";

const InterviewTable = ({ response, currentPage, postPerPage }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-inverse">
        <thead className="thead-inverse">
          <tr className="d-flex">
            <th className="col-1 text-center">#</th>
            <th className="col-2">Nama</th>
            <th className="col-3">Tanggal Wawancara</th>
            <th className="col-2">Tempat</th>
            <th className="col-2">Nomer Telepon</th>
            <th className="col-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {response.map((value, index) => {
            const { interviewer, dateOfInterview, place, phone } = value;

            return (
              <tr key={index} className="d-flex">
                <td className="col-1 text-center">
                  {(currentPage - 1) * postPerPage + index + 1}
                </td>
                <td className="col-2">{interviewer}</td>
                <td className="col-3">{`${dateFormat(
                  dateOfInterview
                )} ${timeFormat(dateOfInterview)}`}</td>
                <td className="col-2">{place}</td>
                <td className="col-2">{phone}</td>
                <td className="col-2 text-center">
                  <button
                    className="btn btn-success btn-block btn-flat"
                    onClick={() =>
                      (window.location.href = "/#/export/contract")
                    }
                  >
                    Surat Kontrak
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InterviewTable;
