import React, { useState, useContext } from 'react';
import { EmployeeContext } from '../../providers/EmployeeContext';

const DateContractModal = () => {
  const [date, setDate] = useState('');

  const { editContract, personId } = useContext(EmployeeContext);

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const buttonSubmit = () => {
    window.$('#btn-contract').prop('disabled', true);
    window.$('#btn-contract').text('loading...');
  };

  const handleContract = () => {
    buttonSubmit();

    const data = {
      personId: personId,
      firstContract: date,
    };

    editContract(data);
  };

  return (
    <div
      className='modal fade'
      id='dateContractModal'
      tabIndex='-1'
      role='dialog'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Perpanjang Kontrak
            </h5>
            <button
              className='close'
              type='button'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>×</span>
            </button>
          </div>
          <div className='modal-body'>
            <form className='form'>
              <div className='row'>
                <div className='col-md-12'>
                  <input
                    type='date'
                    className='form-control'
                    value={date}
                    onChange={handleDate}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className='modal-footer'>
            <button
              className='btn btn-secondary'
              type='button'
              data-dismiss='modal'
            >
              Cancel
            </button>
            <button
              id='btn-contract'
              className='btn btn-primary'
              onClick={() => handleContract()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateContractModal;
