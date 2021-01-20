import React, { useState, useEffect, useContext } from "react";
import FadeIn from "react-fade-in";

// * components
import LoadingScreen from "./LoadingScreen";
import Pagination from "../components/Pagination/Pagination";

// * context
import { ItemContext } from "../providers/ItemContext";
import TransacOutTable from "../components/Table/TransacOut";
import { GetTransacOut } from "../Services/TransacService";

const ListTransacOut = () => {
  const [data, setData] = useState([]);
  const [transacOut, setTransac] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  // * variable for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  // * calculate process for pagination
  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;
  const current = data.slice(indexOfFirst, indexOfLast);

  // * data from context
  const { filterDateOut } = useContext(ItemContext);

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

  const handleFilter = () => {
    const data = {
      start: start,
      end: end,
    };

    filterDateOut(data);
  };

  const previous = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const next = () => {
    if (currentPage !== Math.ceil(data.length / postPerPage))
      setCurrentPage(currentPage + 1);
  };
  // * end of method

  useEffect(() => {
    const result = transacOut.filter((item) =>
      item.itemName.toLowerCase().includes(keyword.toLowerCase())
    );
    setData(result);
  }, [transacOut, keyword]);

  useEffect(() => {
    GetTransacOut()
      .then((response) => setTransac(response.data.data))
      .finally(() => setLoading(false));
  }, [])

  // * render the HTML
  return loading ? (
    <LoadingScreen />
  ) : (
    <FadeIn>
      <div className="container-fluid mt-4">
        <h1 className="h3 mb-2 text-gray-800">Data Keluar Barang</h1>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Tabel Transaksi Barang
            </h6>
          </div>
          <div className="card-body">
            <div className="row mb-3">
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
              <div className="col-md-2">
                <label>From: </label>
                <input
                  type="date"
                  className="form-control"
                  value={start}
                  onChange={handleStart}
                />
              </div>
              <div className="col-md-2">
                <label>To: </label>
                <input
                  type="date"
                  className="form-control"
                  value={end}
                  onChange={handleEnd}
                />
              </div>
              <div className="col-md-1">
                <br />
                <button
                  className="btn btn-primary mt-2"
                  onClick={() => handleFilter()}
                >
                  Filter
                </button>
              </div>
              <div className="col-md-1">
                <br />
                <button
                  className="btn btn-warning mt-2"
                  onClick={() =>
                    (window.location.href = "/#/export/transac-out")
                  }
                >
                  Export
                </button>
              </div>
              <div className="col-md-2">
                <br />
                <button
                  className="btn btn-success float-right mr-5 mt-2"
                  onClick={() => window.$("#transacModal").modal("toggle")}
                >
                  Transaksi
                </button>
              </div>
            </div>
            <TransacOutTable
              response={current}
              currentPage={currentPage}
              postPerPage={postPerPage}
            />
          </div>
          <Pagination
            currentPage={currentPage}
            postPerPage={postPerPage}
            current={current}
            previous={previous}
            next={next}
            total={data.length}
          />
        </div>
      </div>
    </FadeIn>
  );
};

export default ListTransacOut;
