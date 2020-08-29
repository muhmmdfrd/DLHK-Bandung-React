import React, { useState, useContext } from 'react';
import { PersonContext } from '../../providers/PersonContext';
import '../../assets/css/form-step.css';

const SendApplicant = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [placeBirth, setPlaceBirth] = useState('');
  const [dateBirth, setDateBirth] = useState('');
  const [street, setStreet] = useState('');
  const [rt, setRt] = useState('');
  const [rw, setRw] = useState('');
  const [kel, setKel] = useState('');
  const [kec, setKec] = useState('');
  const [city, setCity] = useState('');
  const [school, setSchool] = useState('');
  const [prevJob, setPrevJob] = useState('');
  const [couple, setCouple] = useState('');
  const [jobCouple, setJobCouple] = useState('');
  const [pos, setPos] = useState('');
  const [child, setChild] = useState(0);

  const { addPerson } = useContext(PersonContext);

  const handleNext = () => {
    let listId = ['#first', '#second', '#third'];

    window
      .$('#progressbar li')
      .eq(window.$('fieldset').index(counter))
      .addClass('active');

    setCounter((prev) => prev + 1);
    window.$(listId[counter]).hide();
    window.$(listId[counter + 1]).fadeIn();
  };

  const handlePrev = () => {
    let listId = ['#first', '#second', '#third'];

    window
      .$('#progressbar li')
      .eq(window.$('fieldset').index(counter - 1))
      .removeClass('active');

    setCounter((prev) => prev - 1);
    window.$(listId[counter]).hide();
    window.$(listId[counter - 1]).fadeIn();
  };

  const handleSubmit = () => {
    window.$('#btn-applicant-submit').val('loading....');

    const data = {
      personName: name,
      phone: phone,
      placeOfBirth: placeBirth,
      dateOfBirth: dateBirth,
      lastDegree: school,
      previousJob: prevJob,
      nameOfCouple: couple,
      jobOfCouple: jobCouple,
      jobDesc: pos,
      address: `${street} ${rt} ${rw} ${kel} ${kec} ${city}`,
      email: window.localStorage.getItem('_eml'),
      totalChild: child,
    };

    addPerson(data);
  };

  return window.localStorage.getItem('_eml') === null ? (
    (window.location.href = '/#/pelamar/login')
  ) : (
    <div className='container-fluid'>
      <form id='msform'>
        <ul id='progressbar'>
          <li className='active'>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
        </ul>

        <fieldset id='first'>
          <h2 className='fs-title'>Lengkapi Data Diri</h2>
          <h3 className='fs-subtitle'>Data Diri Pelamar DLHK</h3>
          <input
            type='text'
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder='Nama Lengkap'
          />
          <input
            type='number'
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder='Nomer Telepon'
          />
          <input
            type='text'
            value={placeBirth}
            onChange={(event) => setPlaceBirth(event.target.value)}
            placeholder='Tempat Lahir'
          />
          <input
            type='date'
            value={dateBirth}
            onChange={(event) => setDateBirth(event.target.value)}
            placeholder='Tanggal Lahir'
          />
          <input
            type='button'
            className='next action-button'
            value='Next'
            onClick={() => handleNext()}
          />
        </fieldset>

        <fieldset id='second'>
          <h2 className='fs-title'>Lengkapi Alamat Sesuai KTP</h2>
          <h3 className='fs-subtitle'>Pelamar DLHK</h3>
          <textarea
            value={street}
            onChange={(event) => setStreet(event.target.value)}
            placeholder='Alamat'
          ></textarea>
          <input
            type='text'
            value={rt}
            onChange={(event) => setRt(event.target.value)}
            placeholder='RT'
          />
          <input
            type='text'
            value={rw}
            onChange={(event) => setRw(event.target.value)}
            placeholder='RW'
          />
          <input
            type='text'
            value={kel}
            onChange={(event) => setKel(event.target.value)}
            placeholder='Kelurahan'
          />
          <input
            type='text'
            value={kec}
            onChange={(event) => setKec(event.target.value)}
            placeholder='Kecamatan'
          />
          <input
            type='text'
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder='Kota'
          />
          <input
            type='button'
            className='previous action-button'
            value='Previous'
            onClick={() => handlePrev()}
          />
          <input
            type='button'
            className='next action-button'
            value='Next'
            onClick={() => handleNext()}
          />
        </fieldset>

        <fieldset id='third'>
          <h2 className='fs-title'>Riwayat Pekerjaan</h2>
          <h3 className='fs-subtitle'>Pelamar DLHK</h3>
          <input
            type='text'
            value={school}
            onChange={(event) => setSchool(event.target.value)}
            placeholder='Pendidikan Terakhir'
          />
          <input
            type='text'
            value={prevJob}
            onChange={(event) => setPrevJob(event.target.value)}
            placeholder='Pekerjaan Terakhir'
          />
          <input
            type='text'
            value={couple}
            onChange={(event) => setCouple(event.target.value)}
            placeholder='Nama Pasangan'
          />
          <input
            type='text'
            value={jobCouple}
            onChange={(event) => setJobCouple(event.target.value)}
            placeholder='Pekerjaan Pasangan'
          />
          <input
            type='number'
            value={child}
            onChange={(event) => setChild(event.target.value)}
            placeholder='Jumlah Anak'
          />
          <select onChange={(event) => setPos(event.target.value)}>
            <option value={''}>Pilih Posisi yang Dilamar</option>
            <option value={'Penyapu'}>Penyapu</option>
            <option value={'Drainase'}>Pembersih Drainase</option>
            <option value={'Angkut Sampah'}>Pengepul Sampah</option>
          </select>
          <input
            type='button'
            className='previous action-button'
            value='Previous'
            onClick={() => handlePrev()}
          />
          <input
            id='btn-applicant-submit'
            type='submit'
            className='submit action-button'
            value='Submit'
            onClick={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default SendApplicant;
