import React, { useState, useEffect, useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import FadeIn from 'react-fade-in';
import { PresenceContext } from '../providers/PresenceContext';
import LoadingScreen from './LoadingScreen';

const RegionPerform = ({ history }) => {
  const [region, setRegion] = useState([]);
  const [score, setScore] = useState([]);

  // * context
  const { performRegion, loading } = useContext(PresenceContext);

  useEffect(() => {
    setScore(performRegion.map((val) => val.percentage));
    setRegion(performRegion.map((val) => val.regionName));
  }, [performRegion]);

  // * function or method
  const handleOption = (event) => {
    switch (event.target.value) {
      case 'individu':
        history.push('statistik-performa');
        break;
      case 'zone':
        history.push('statistik-performa-zona');
        break;
      default:
        break;
    }
  };
  // * end of method

  return loading ? (
    <LoadingScreen />
  ) : (
    <FadeIn>
      <div className='container-fluid mt-4'>
        <div className='card shadow mb-4'>
          <div className='card-header py-3'>
            <h6 className='m-0 font-weight-bold text-primary'>
              Tabel Statistik Performa Pegawai per Wilayah
            </h6>
          </div>
          <div className='card-body'>
            <div className='row mb-3'>
              <div className='col-md-4'>
                <select className='form-control' onChange={handleOption}>
                  <option value='region'>Tampilkan berdasarkan wilayah</option>
                  <option value='individu'>
                    Tampilkan berdasarkan individu
                  </option>
                  <option value='zone'>Tampilkan berdasarkan zona</option>
                </select>
              </div>
            </div>
            <BarChart values={score} labels={region} />
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

const BarChart = ({ labels, values }) => {
  const color = (opacity) => {
    return [
      `rgba(154, 13, 163, ${opacity})`,
      `rgba(156, 62, 148, ${opacity})`,
      `rgba(201, 30, 116 ${opacity})`,
      `rgba(174, 20, 97, ${opacity})`,
      `rgba(139, 19, 68, ${opacity})`,
      `rgba(156, 13, 133, ${opacity})`,
    ];
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Wilayah Pengawasan',
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
    <Bar
      data={data}
      options={{
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
      }}
    />
  );
};

export default RegionPerform;
