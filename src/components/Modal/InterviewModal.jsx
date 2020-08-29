import React, { useState, useContext, useEffect } from 'react';
import { InterviewContext } from '../../providers/InterviewContext';
import { ApplicantContext } from '../../providers/ApplicantContext';
import { PersonContext } from '../../providers/PersonContext';

const InterviewModal = () => {
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const { addInterview } = useContext(InterviewContext);
  const { appId } = useContext(ApplicantContext);
  const { sendEmail } = useContext(PersonContext);

  useEffect(() => {
    const { personName, phone, email } = appId;

    setName(personName);
    setPhone(phone);
    setEmail(email);
  }, [appId]);

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handlePlace = (event) => {
    setPlace(event.target.value);
  };

  const handleSubmit = () => {
    window.$('#btn-submit-interview-text').text('loading...');
    window.$('#btn-submit-interview').prop('disabled', true);

    const data = {
      dateOfInterview: date,
      place: place,
      email: email,
      phone: phone,
      interviewer: name,
    };

    addInterview(data);
    sendEmail(data);
  };

  return (
    <div
      className='modal fade'
      id='interviewModal'
      tabIndex='-1'
      role='dialog'
      aria-labelledby='modelTitleId'
      aria-hidden='true'
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Buat Jadwal Interview</h5>
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
                <div className='row'>
                  <div className='col-md-12'>
                    <label>Jadwal Interview</label>
                    <input
                      type='datetime-local'
                      className='form-control'
                      value={date}
                      onChange={handleDate}
                    />
                  </div>
                </div>
                <br />
                <div className='row'>
                  <div className='col-md-12'>
                    <label>Tempat</label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Tempat Wawancara'
                      value={place}
                      onChange={handlePlace}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button className='btn btn-secondary' data-dismiss='modal'>
                Close
              </button>
              <button
                id='btn-submit-interview'
                className='btn btn-primary'
                onClick={() => handleSubmit()}
              >
                <span id='btn-submit-interview-text'>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewModal;
