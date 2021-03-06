import React, { useContext, useEffect, useState } from 'react';
import FadeIn from 'react-fade-in';

// * components
import LoadingScreen from './LoadingScreen';
import UserTable from '../components/Table/UserTable';
import Pagination from '../components/Pagination/Pagination';

// * context
import { PersonContext } from '../providers/PersonContext';

const Table = () => {
  // * states
  const [data, setData] = useState([]);
  const [person, setPerson] = useState([]);
  const [loading, setLoading] = useState([]);
  const [keyword, setKeyword] = useState('');

  // * variable for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  // * calculate process for pagination
  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;
  const current = data.slice(indexOfFirst, indexOfLast);

  // * data from context
  const {
    handleAdd,
    handleEdit,
    handleDelete,
    loadMore,
  } = useContext(PersonContext);

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
    GetPersonData()
    .then((response) => setPerson(response.data.data))
    .finally(() => setLoading(false)); 
  }, [])

  useEffect(() => {
    const result = person.filter((person) =>
      person.personName.toLowerCase().includes(keyword)
    );
    setData(result);
  }, [person, keyword]);

  // * render the HTML
  return loading ? (
    <LoadingScreen />
  ) : (
    <FadeIn>
      <div className='container-fluid mt-4'>
        <h1 className='h3 mb-2 text-gray-800'>Kepegawaian</h1>

        <div className='card shadow mb-4'>
          <div className='card-header py-3'>
            <h6 className='m-0 font-weight-bold text-primary'>
              Tabel Daftar Pegawai
            </h6>
          </div>
          <div className='card-body'>
            <div className='row mb-3'>
              <div className='col-md-3'>
                <select className='form-control'>
                  <option>Urutkan berdasarkan...</option>
                  <option>Individu</option>
                  <option>Zona</option>
                  <option>Wilayah</option>
                </select>
              </div>
              <div className='col-md-4'>
                <form className='mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search'>
                  <div className='input-group'>
                    <input
                      type='text'
                      value={keyword}
                      onChange={handleChange}
                      className='form-control'
                      placeholder='Cari berdasarkan nama...'
                      aria-label='Search'
                      aria-describedby='basic-addon2'
                    />
                  </div>
                </form>
              </div>
              <div className='col-md-5'>
                <button
                  className='btn btn-success float-right mr-5'
                  onClick={() => handleAdd()}
                >
                  Tambah Data
                </button>
              </div>
            </div>
            <UserTable
              response={current}
              action={{ handleEdit, handleDelete, loadMore }}
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

export default Table;
