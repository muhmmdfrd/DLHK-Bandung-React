import React, { createContext, useState, useEffect } from 'react';
import { GetTransac } from '../Services/TransacService';
import {
  GetItemData,
  GetItemDataId,
  AddItem,
  EditItem,
  DeleteItem,
} from '../Services/ItemService';

const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  const [item, setItem] = useState([]);
  const [dataItemId, setDataItemId] = useState({});
  const [transac, setTransac] = useState([]);
  const [modalStatus, setModalStatus] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      GetItemData()
        .then((response) => setItem(response.data.data))
        .finally(() => setLoading(false));
    }, 10000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      GetTransac()
        .then((response) => setTransac(response.data.data))
        .finally(() => setLoading(false));
    }, 10000);
  }, []);

  // * method for person
  const hideModal = () => window.$('#itemModal').modal('hide');
  const showModal = () => window.$('#itemModal').modal('toggle');
  const textButton = () => window.$('#btn-submit-modal-item').text('Submit');

  const handleAdd = () => {
    setModalStatus('Tambah');
    showModal();
  };

  const handleEdit = (id) => {
    window.$(`#span-btn-${id}`).text('Load..');
    setModalStatus('Edit');
    GetItemDataId(id)
      .then((response) => setDataItemId(response.data.data))
      .finally(() => {
        window.$(`#span-btn-${id}`).text('Edit');
        showModal();
      });
  };

  // * method interaction with API
  const addItem = (data) => {
    AddItem(data)
      .then(() => textButton())
      .then(() => alert('data berhasil ditambah'))
      .then(() => hideModal())
      .finally(() => {
        GetItemData()
          .then((response) => setItem(response.data.data))
          .finally(() => setLoading(false));
      })
  };

  const editItem = (data) => {
    EditItem(data)
      .then((response) => console.log(response))
      .then(() => textButton())
      .then(() => alert('data berhasil diedit'))
      .then(() => hideModal())
      .finally(() => {
        GetItemData()
          .then((response) => setItem(response.data.data))
          .finally(() => setLoading(false));
      })
  };

  const handleDelete = (id) => {
    if (window.confirm('Apakah yakin ingin menghapus data tersebut?')) {
      DeleteItem(id)
        .then(() => alert('Data berhasil dihapus'))
        .finally(() => {
          GetItemData()
          .then((response) => setItem(response.data.data))
          .finally(() => setLoading(false));
        });
    }
  };
  // * end method for person

  const objValue = {
    item,
    dataItemId,
    modalStatus,
    transac,
    addItem,
    editItem,
    loading,
    handleAdd,
    handleEdit,
    handleDelete,
  };

  return (
    <ItemContext.Provider value={objValue}>{children}</ItemContext.Provider>
  );
};

export { ItemContext, ItemProvider };
