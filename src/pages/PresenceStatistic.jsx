import React, { useState, useEffect, useContext } from "react";
import FadeIn from "react-fade-in";

// * context
import { PresenceContext } from "../providers/PresenceContext";

// * components
import Pagination from "../components/Pagination/Pagination";
import LoadingScreen from "./LoadingScreen";
import PresenceStatisticTable from "../components/Table/PresenceStatisticTable";

const PresenceStatistic = ({ history }) => {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");

  // * variable for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  // * calculate process for pagination
  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;
  const current = data.slice(indexOfFirst, indexOfLast);

  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  // * context
  const { presence, loading, handleFilter } = useContext(PresenceContext);

  useEffect(() => {
    const result = presence.filter((presence) =>
      presence.employeeName.toLowerCase().includes(keyword.toLowerCase())
    );
    setData(result);
  }, [keyword, presence]);

  // * function or method
  const handleChange = (event) => {
    setKeyword(event.target.value);
    setCurrentPage(1);
  };

  const handleStart = (event) => {
    setStart(event.target.value);
  };

  const handleEnd = (event) => {
    setEnd(event.target.value);
  };

  const handleOption = (event) => {
    switch (event.target.value) {
      case "zone":
        history.push("statistik-absensi-zona");
        break;
      case "region":
        history.push("statistik-absensi-wilayah");
        break;
      default:
        break;
    }
  };

  const previous = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const next = () => {
    if (currentPage !== Math.ceil(data.length / postPerPage))
      setCurrentPage(currentPage + 1);
  };
  // * end of method

  return loading ? (
    <LoadingScreen />
  ) : (
    <FadeIn>
      <div className="container-fluid mt-4">
        <h1 className="h3 mb-2 text-gray-800">Statistik Absen</h1>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Tabel Statistik Absen
            </h6>
          </div>
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-3">
                <label>Menu: </label>
                <select className="form-control" onChange={handleOption}>
                  <option value="individu">
                    Tampilkan berdasarkan individu
                  </option>
                  <option value="zone">Tampilkan berdasarkan zona</option>
                  <option value="region">Tampilkan berdasarkan wilayah</option>
                </select>
              </div>
              <div className="col-md-3">
                <form className="mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <label>Cari: </label>
                  <input
                    type="text"
                    value={keyword}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Cari berdasarkan nama..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                </form>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-3">
                <label>From: </label>
                <input
                  type="date"
                  className="form-control"
                  value={start}
                  onChange={handleStart}
                />
              </div>
              <div className="col-md-3">
                <form className="mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <label>To: </label>
                  <input
                    type="date"
                    className="form-control"
                    value={end}
                    onChange={handleEnd}
                  />
                </form>
              </div>
              <div className="col-md-6">
                <br />
                <button
                  className="btn btn-primary mt-2"
                  onClick={() => handleFilter(start, end)}
                >
                  Filter
                </button>
                <button
                  className="btn btn-warning ml-5 mt-2"
                  onClick={() => (window.location.href = "/#/export/presence")}
                >
                  Export
                </button>
              </div>
            </div>
            <PresenceStatisticTable
              response={current}
              currentPage={currentPage}
              postPerPage={postPerPage}
            />
          </div>
          <Pagination
            next={next}
            previous={previous}
            current={current}
            total={data.length}
            currentPage={currentPage}
            postPerPage={postPerPage}
          />
        </div>
      </div>
    </FadeIn>
  );
};

export default PresenceStatistic;
