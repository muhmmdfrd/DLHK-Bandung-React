import React, { useContext, useState, useEffect } from "react";
import FadeIn from "react-fade-in";
import s from "file-saver";
import { baseurl } from "../constant/constact";

// * components
import LoadingScreen from "./LoadingScreen";
import ApplicantTable from "../components/Table/ApplicantTable";
import Pagination from "../components/Pagination/Pagination";

// * context
import { ApplicantContext } from "../providers/ApplicantContext";
import Axios from "axios";
import { GetApplicant } from "../Services/PersonService";

const ListApplicant = () => {
  const [keyword, setKeyword] = useState("");
  const [applicant, setApplicant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [len, setTotal] = useState(0);

  // * variable for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  // * data from context
  const { detail, deletePerson } = useContext(ApplicantContext);

  // * function or method
  const handleChange = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setCurrentPage(1);
      fetchData(currentPage - 1, keyword);
    }
  };

  const previous = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      fetchData(currentPage - 1);
    }
  };

  const next = () => {
    if (
      currentPage !== Math.ceil(len / postPerPage) &&
      Math.ceil(len / postPerPage) !== 0
    ) {
      setCurrentPage(currentPage + 1);
      fetchData(currentPage + 1);
    }
  };

  const base64ToFile = (dataurl, filename) => {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, {
      type: mime,
    });
  };

  const exportExcel = () => {
    const url = baseurl + "person/applicant/export";
    Axios.post(url).then((response) => {
      const result = response.data.data;
      const mime = "data:application/application/vnd.ms-excel;base64," + result;
      const filename = "Applicant.xlsx";
      const file = base64ToFile(mime, filename);
      s.saveAs(file);
    });
  };
  // * end of method

  const fetchData = (page, key = "") => {
    setLoading(true);
    GetApplicant(page, key)
      .then((response) => {
        const data =
          response.data.data.data === undefined
            ? alert("data tidak ditemukan")
            : response.data.data.data;
        setApplicant(data);
        const length =
          key === ""
            ? response.data.data.recordsTotal
            : response.data.data.recordsFilterred;
        setTotal(length);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  // * render the HTML
  return loading ? (
    <LoadingScreen />
  ) : (
    <FadeIn>
      <div className="container-fluid mt-4">
        <h1 className="h3 mb-2 text-gray-800">Pelamar Kerja DLHK</h1>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Tabel Pelamar</h6>
          </div>
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-4">
                <form className="mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div className="input-group">
                    <input
                      type="text"
                      value={keyword}
                      onKeyDown={handleChange}
                      onChange={(e) => setKeyword(e.target.value)}
                      className="form-control"
                      placeholder="Cari berdasarkan nama..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                </form>
              </div>
              <div className="col-md-3">
                <button
                  className="btn btn-success"
                  onClick={() => exportExcel()}
                >
                  Export Excel
                </button>
              </div>
            </div>
            <ApplicantTable
              postPerPage={postPerPage}
              currentPage={currentPage}
              response={applicant}
              detail={detail}
              deletePerson={deletePerson}
            />
          </div>
          <Pagination
            currentPage={currentPage}
            postPerPage={postPerPage}
            current={applicant}
            previous={previous}
            next={next}
            total={len}
          />
        </div>
      </div>
    </FadeIn>
  );
};

export default ListApplicant;
