import React, { useContext } from 'react';
import Card from '../components/Card/Card';
import FadeIn from "react-fade-in";

// * components
import LoadingScreen from "./LoadingScreen";
import { DashboardContext } from '../providers/DashboardContext';

const Dashboard = () => {
  const num = [1, 2, 3, 4];

  const { presence, loading } = useContext(DashboardContext);

  return loading ? <LoadingScreen />
    : (
      <FadeIn>
        <div className='container-fluid mt-4'>

          <div className="row">
            <div className="col-xl-3 col-md-6 mb-4">
              <Card title={'Jumlah Pegawai'} value={presence.employees} icon={'user'} label={'primary'} />
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <Card title={'Kehadiran'} value={presence.presences} icon={'clock'} label={'warning'} />
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <Card title={'Performa'} value={presence.performances} icon={'dashboard'} label={'danger'} />
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <Card title={'Nilai Keseluruhan'} value={presence.score} icon={'award'} label={'success'} />
            </div>
          </div>

          <br />

          <div className="row">
            {num.map((value) => {
              return (
                <div key={value} className="col-xl-3 col-md-6 mb-4">
                  <Card />
                </div>)
            })}
          </div>

          <br />

          <div className="row">
            {num.map((value) => {
              return (
                <div key={value} className="col-xl-3 col-md-6 mb-4">
                  <Card />
                </div>)
            })}
          </div>

        </div>
      </FadeIn>
    );
};

export default Dashboard;
