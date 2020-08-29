import React, { createContext, useState, useEffect } from 'react';
import {
  GetEmployeeData,
  GetEmployeeDataId,
  AddEmployee,
  DeleteEmployee,
  EditLocationEmployee,
  EditContract,
} from '../Services/EmployeeService';

const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [employee, setEmployee] = useState([]);
  const [dataEmployeeId, setDataEmployeeId] = useState({});
  const [modalStatus, setModalStatus] = useState('');
  const [loading, setLoading] = useState(true);
  const [personId, setPersonId] = useState(0);

  useEffect(() => {
    GetEmployeeData()
      .then((response) => setEmployee(response.data.data))
      .finally(() => setLoading(false));
  }, [employee]);

  // * method for person
  const hideModal = () => window.$('#employeeModal123').modal('hide');
  const showModal = () => window.$('#employeeModal123').modal('toggle');

  const handleAdd = () => {
    setModalStatus('Tambah');
    window.$('#employeeModal1234').modal('toggle');
  };

  const handleEdit = (id) => {
    window.$(`#span-btn-${id}`).text('Load..');
    setModalStatus('Edit');
    GetEmployeeDataId(id)
      .then((response) => setDataEmployeeId(response.data.data))
      .finally(() => {
        window.$(`#span-btn-${id}`).text('Edit');
        showModal();
      });
  };

  const getPersonId = (id) => {
    window.$('#dateContractModal').modal('toggle');
    setPersonId(id);
  };

  // * method interaction with API
  const addEmployee = (data) => {
    window.$('#btn-submit-modal-person-employee').text('loading...');
    window.$('#btn-submit-modal-person-employee-click').prop('disabled', true);

    AddEmployee(data)
      .then(() => alert('data berhasil ditambah'))
      .finally(() => {
        window.$('#employeeModal1234').modal('hide');
        window.$('#btn-submit-modal-person-employee').text('Submit');
        window
          .$('#btn-submit-modal-person-employee-click')
          .prop('disabled', false);
      });
  };

  const editEmployee = (data) => {
    EditLocationEmployee(data)
      .then(() => alert('data berhasil diedit'))
      .finally(() => hideModal());
  };

  const editContract = (data) => {
    EditContract(data)
      .then((response) => alert(response.data.message))
      .then(() => window.$('#dateContractModal').modal('hide'))
      .then(() => (window.location.href = '/#/admin/kontrak-pegawai'))
      .finally(() => setLoading(false));
  };

  const handleDelete = (id) => {
    if (window.confirm('Apakah yakin ingin menghapus data tersebut?')) {
      DeleteEmployee(id).then(() => alert('Data berhasil dihapus'));
    }
  };
  // * end method for person

  const objValue = {
    employee,
    dataEmployeeId,
    personId,
    modalStatus,
    loading,
    getPersonId,
    addEmployee,
    editContract,
    editEmployee,
    handleAdd,
    handleEdit,
    handleDelete,
  };

  return (
    <EmployeeContext.Provider value={objValue}>
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeContext, EmployeeProvider };
