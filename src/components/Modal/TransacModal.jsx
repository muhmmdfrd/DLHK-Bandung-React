import React, { useState, useContext } from 'react';
import { ItemContext } from '../../providers/ItemContext';

const TransacModal = () => {
  const [itemId, setItemId] = useState('Pilih Barang');
  const [qty, setQty] = useState(0);
  const [note, setNote] = useState('');

  const { item, addTransac } = useContext(ItemContext);

  const handleItemId = (event) => {
    setItemId(event.target.value);
  };

  const handleQty = (event) => {
    setQty(event.target.value);
  };

  const handleNote = (event) => {
    setNote(event.target.value);
  };

  const handleSubmit = () => {
    const data = {
      itemName: itemId,
      qty: qty,
      note: note,
    };

    addTransac(data);
  };

  return (
    <div
      className='modal fade'
      id='transacModal'
      tabIndex='-1'
      role='dialog'
      aria-labelledby='modelTitleId'
      aria-hidden='true'
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Tambah Transaksi Barang</h5>
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
              <div className='row'>
                <div className='col-md-12'>
                  <label>Pilih Barang</label>
                  <select
                    className='form-control'
                    value={itemId}
                    onChange={handleItemId}
                  >
                    <option value='Pilih Barang'>Pilih Barang</option>
                    {item.map((value, index) => {
                      const { itemName } = value;
                      return (
                        <option value={itemName} key={index}>
                          {itemName}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <br />
              <div className='row'>
                <div className='col-md-12'>
                  <label>Banyak</label>
                  <input
                    type='number'
                    className='form-control'
                    min={0}
                    value={qty}
                    onChange={handleQty}
                  />
                </div>
              </div>
              <br />
              <div className='row'>
                <div className='col-md-12'>
                  <label>Keterangan</label>
                  <input
                    type='text'
                    className='form-control'
                    value={note}
                    onChange={handleNote}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-dismiss='modal'
            >
              Close
            </button>
            <button
              id='transacOutSubmit'
              type='button'
              className='btn btn-primary'
              onClick={() => handleSubmit()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransacModal;
