import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { ItemContext } from '../../providers/ItemContext';

const ItemModal = () => {
  const { modalStatus, addItem, editItem, dataItemId, item } = useContext(
    ItemContext
  );

  const [id, setId] = useState('');
  const [itemName, setItemName] = useState('');
  const [qty, setQty] = useState(0);
  const [cond, setCond] = useState('');
  const [file, setFile] = useState('');
  const [status, setStatus] = useState('');
  const [statusInput, setStatusInput] = useState('');
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState('');
  const [suplier, setSuplier] = useState('');

  useEffect(() => {
    if (status === 'Edit') {
      const { itemName, note, qty, itemPhoto, itemId } = dataItemId;
      setItemName(itemName);
      setQty(qty);
      setCond(note);
      setFile(itemPhoto);
      setId(itemId);
    } else if (status === 'Tambah') {
      setItemName('');
      setQty('');
      setFile('');
      setCond('Baru');
    }
  }, [dataItemId, status]);

  useEffect(() => {
    setStatus(modalStatus);
  }, [modalStatus]);

  useEffect(() => {
    axios
      .get('http://api.dlhk.local/api/category')
      .then((response) => setCategory(response.data.data));
  }, []);

  // * method
  const loadButton = () => {
    window.$('#btn-submit-modal-item').text('Load...');
    window.$('#btn-submit-modal-item').prop('disabled', true);
  };

  const handleItemName = (event) => {
    setItemName(event.target.value);
  };

  const handleQty = (event) => {
    setQty(event.target.value);
  };

  const handleCond = (event) => {
    setCond(event.target.value);
  };

  const handleFile = (event) => {
    setFile(event.target.files[0]);
  };

  const handleInputStatus = (event) => {
    setStatusInput(event.target.value);
  };

  const handleCategory = (event) => {
    setCategoryId(event.target.value);
  };

  const handleSuplier = (event) => {
    setSuplier(event.target.value);
  };

  const handleAdd = () => {
    let formData = new FormData();

    formData.append('itemName', itemName);
    formData.append('itemQty', qty);
    formData.append('itemPhoto', file);
    formData.append('note', cond);
    formData.append('categoryId', categoryId);
    formData.append('suplierName', suplier);

    addItem(formData);
    loadButton();
  };

  const handleEdit = (id) => {
    let formData = new FormData();

    formData.append('itemName', itemName);
    formData.append('itemQty', qty);
    formData.append('note', cond);
    formData.append('itemId', id);
    formData.append('itemPhoto', new File([file], 'my-image.png'));
    formData.append('categoryId', categoryId);

    editItem(formData);
    loadButton();
  };
  // * end of method

  return (
    <div
      className='modal fade'
      id='itemModal'
      tabIndex='-1'
      role='dialog'
      aria-labelledby='modelTitleId'
      aria-hidden='true'
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{status} Data Barang</h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <div className='container-fluid'>
              <form>
                {status === 'Tambah' ? (
                  <>
                    <div className='row'>
                      <label>Status Barang</label>
                      <select
                        className='form-control'
                        onChange={handleInputStatus}
                      >
                        <option value='Baru'>Barang Baru</option>
                        <option value='Lama'>Barang Sudah Ada</option>
                      </select>
                    </div>
                    <br />
                    <div className='row'>
                      <label>Tambah Barang yang Sudah Ada</label>
                      <select
                        className='form-control'
                        disabled={statusInput !== 'Lama'}
                        onChange={handleItemName}
                      >
                        <option>Pilih Barang</option>
                        {item.map((value, index) => {
                          const { itemName } = value;
                          return (
                            <option key={index} value={itemName}>
                              {itemName}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <br />
                  </>
                ) : null}
                <div className='row'>
                  <div className='col-md-5'>
                    <label>Nama Barang</label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Nama Barang'
                      value={itemName}
                      onChange={handleItemName}
                      readOnly={statusInput === 'Lama' && status === 'Tambah'}
                    />
                  </div>
                  <div className='col-md-7'>
                    <label>Banyak Barang</label>
                    <input
                      type='number'
                      className='form-control'
                      min={1}
                      placeholder='Qty'
                      value={qty}
                      onChange={handleQty}
                      readOnly={status !== 'Tambah'}
                    />
                  </div>
                </div>
                <br />
                {statusInput !== 'Lama' ? (
                  <>
                    <div className='row'>
                      <div className='col-md-12'>
                        <label>Nama Kategori</label>
                        <select
                          className='form-control'
                          value={categoryId}
                          onChange={handleCategory}
                        >
                          <option value=''>Pilih Kategori</option>
                          {category.map((value, index) => {
                            return (
                              <option key={index} value={value.categoryId}>
                                {value.categoryName}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <br />
                  </>
                ) : null}

                {status === 'Tambah' ? (
                  <>
                    <div className='row'>
                      <div className='col-md-12'>
                        <label>Nama Suplier</label>
                        <input
                          type='text'
                          className='form-control'
                          value={suplier}
                          onChange={handleSuplier}
                          placeholder='Nama Suplier'
                        />
                      </div>
                    </div>
                    <br />
                  </>
                ) : null}

                {statusInput === 'Lama' ? null : (
                  <>
                    <div className='row'>
                      <div className='col-md-5'>
                        <label>Kondisi</label>
                        <select
                          className='form-control'
                          onChange={handleCond}
                          value={cond}
                        >
                          <option value='Baru'>Baru</option>
                          <option value='Rusak'>Rusak</option>
                        </select>
                      </div>
                      <div className='col-md-7'>
                        <label>Foto Barang</label>
                        <input
                          id='inputFile'
                          type='file'
                          className='form-control-file'
                          accept={'image/*'}
                          onChange={handleFile}
                          readOnly={statusInput === 'Lama'}
                        />
                      </div>
                    </div>
                    <br />
                  </>
                )}
                <br />
                <ImageEdit status={status} file={file} />
              </form>
            </div>
            <div className='modal-footer'>
              <button className='btn btn-secondary' data-dismiss='modal'>
                Close
              </button>
              <button
                className='btn btn-primary'
                onClick={() =>
                  status !== 'Edit' ? handleAdd() : handleEdit(id)
                }
              >
                <span id='btn-submit-modal-item'>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageEdit = ({ status, file }) => {
  return status === 'Edit' ? (
    <div className='row'>
      <div className='col-md-12'>
        <img
          className='img-fluid img-thumbnail'
          src={`data:image/*;base64, ${file}`}
          alt='thumbnail from database'
        />
      </div>
    </div>
  ) : null;
};

export default ItemModal;
