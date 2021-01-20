import React, { useContext, useState, useEffect } from "react";
import FadeIn from "react-fade-in";

// * components
import LoadingScreen from "./LoadingScreen";
import Pagination from "../components/Pagination/Pagination";
import RoleTable from "../components/Table/RoleTable";

// * context
import { RoleContext } from "../providers/RoleContext";
import { GetRoleData } from "../Services/RoleService";

const RolePage = () => {
  const [data, setData] = useState([]);
  const [role, setRole] = useState([]);
  const [loading, setLoading] = useState([]);
  const [keyword, setKeyword] = useState("");

  // * variable for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  // * calculate process for pagination
  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;
  const current = data.slice(indexOfFirst, indexOfLast);

  // * data from context
  const { handleEdit } = useContext(RoleContext);

  // * function or method
  const handleChange = (event) => {
    setKeyword(event.target.value);
    setCurrentPage(1);
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
    GetRoleData()
    .then((response) => setRole(response.data.data)
    )
    .finally(() => setLoading(false)
    );
  }, []);

  useEffect(() => {
    const result = role.filter((val) =>
      val.roleName.toLowerCase().includes(keyword.toLowerCase())
    );
    setData(result);
  }, [role, keyword]);

  // * render the HTML
  return loading ? (
    <LoadingScreen />
  ) : (
    <FadeIn>
      <div className="container-fluid mt-4">
        <h1 className="h3 mb-2 text-gray-800">Posisi Pelamar</h1>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Tabel Posisi Pelamar
            </h6>
          </div>
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-4">
                <form className="mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div className="input-group">
                    <input
                      type="text"
                      value={keyword}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Cari berdasarkan nama..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                </form>
              </div>
            </div>
            <RoleTable
              response={current}
              action={{ handleEdit }}
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

export default RolePage;
