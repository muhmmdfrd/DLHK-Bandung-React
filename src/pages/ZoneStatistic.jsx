import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import FadeIn from 'react-fade-in';
import { GetPresenceZone } from '../Services/PresenceService';
import LoadingScreen from './LoadingScreen';

const ZoneStatistic = ({ history }) => {
  const [zone, setZone] = useState([]);
  const [presenceZone, setPresence] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [score, setScore] = useState([]);
  const [title, setTitle] = useState('');
  const [keyword, setKeyword] = useState('Kordon - Gedebage');

  useEffect(() => {
    GetPresenceZone()
        .then((response) => setPresence(response.data.data))
        .finally(() => setLoading(false));
  }, [])

  useEffect(() => {
    // eslint-disable-next-line
    const res = presenceZone.filter((value) => {
      if (value.regionName.toLowerCase().includes(keyword.toLowerCase())) {
        return value;
      }
    });

    setZone(res.map((val) => val.codeZone));
    setScore(res.map((val) => val.percentage));
    setTitle(keyword);
  }, [presenceZone, keyword]);

  // * function or method
  const handleOption = (event) => {
    switch (event.target.value) {
      case 'individu':
        history.push('statistik-absensi');
        break;
      case 'region':
        history.push('statistik-absensi-wilayah');
        break;
      default:
        break;
    }
  };

  const handleZone = (event) => {
    setKeyword(event.target.value);
  };
  // * end of method

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <FadeIn>
      <div className='container-fluid mt-4'>
        <div className='card shadow mb-4'>
          <div className='card-header py-3'>
            <h6 className='m-0 font-weight-bold text-primary'>
              Chart Statistik Kehadiran Pegawai per Zona
            </h6>
          </div>
          <div className='card-body'>
            <div className='row mb-3'>
              <div className='col-md-4'>
                <select className='form-control' onChange={handleOption}>
                  <option value='zone'>Tampilkan berdasarkan zona</option>
                  <option value='individu'>
                    Tampilkan berdasarkan individu
                  </option>
                  <option value='region'>Tampilkan berdasarkan wilayah</option>
                </select>
              </div>
              <div className='col-md-4'>
                <select className='form-control' onChange={handleZone}>
                  <option>Kordon - Gedebage</option>
                  <option>Karees</option>
                  <option>Tegalega</option>
                  <option>Cibeunying</option>
                  <option>Bojonegara</option>
                  <option>Arcamanik - Ujung Berung</option>
                </select>
              </div>
            </div>
            <BarChart labels={zone} values={score} title={title} />
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

const BarChart = ({ labels, values, title }) => {
  const color = (opacity) => {
    return [
      `rgba(154, 13, 163, ${opacity})`,
      `rgba(156, 62, 148, ${opacity})`,
      `rgba(201, 30, 116 ${opacity})`,
      `rgba(174, 20, 97, ${opacity})`,
      `rgba(139, 19, 68, ${opacity})`,
      `rgba(154, 13, 163, ${opacity})`,
      `rgba(156, 62, 148, ${opacity})`,
      `rgba(201, 30, 116 ${opacity})`,
      `rgba(174, 20, 97, ${opacity})`,
      `rgba(139, 19, 68, ${opacity})`,
      `rgba(154, 13, 163, ${opacity})`,
      `rgba(156, 62, 148, ${opacity})`,
      `rgba(201, 30, 116 ${opacity})`,
    ];
  };

  const option = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 100,
          },
        },
      ],
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: title,
        backgroundColor: color(0.5),
        borderColor: color(1),
        borderWidth: 1,
        hoverBackgroundColor: color(0.8),
        hoverBorderColor: color(1),
        data: values,
      },
    ],
  };
  return data.length === 0 ? (
    'tidak ada data'
  ) : (
    <Bar data={data} options={option} />
  );
};

export default ZoneStatistic;
