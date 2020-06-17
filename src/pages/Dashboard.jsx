import React from 'react';
import CardStistic from '../components/CardStatistic/CardStatistic';
import ChartDashboard from '../components/Chart/ChartDashboard';
// import ProgressDashboard from '../components/ProgressBar/ProgressDashboard';
// import IllustrationsImg from '../assets/img/undraw_posting_photo.svg';

const ButtonReport = () => {
  return (
    <a
      href='/#'
      className='d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm'
    >
      <i className='fas fa-download fa-sm text-white-50'></i> Generate Report
    </a>
  );
};

const Dashboard = () => {
  return (
    <div className='container-fluid'>
      <div className='d-sm-flex align-items-center justify-content-between mb-4'>
        <h1 className='h3 mb-0 text-gray-800'>Dashboard</h1>
        <ButtonReport />
      </div>

      <CardStistic />
      <ChartDashboard />

      {/* <ProgressDashboard />

      <div className='row'>
        <div className='col-lg-6 mb-4'>
          <div className='card bg-primary text-white shadow'>
            <div className='card-body'>
              Primary
              <div className='text-white-50 small'>#4e73df</div>
            </div>
          </div>
        </div>
        <div className='col-lg-6 mb-4'>
          <div className='card bg-success text-white shadow'>
            <div className='card-body'>
              Success
              <div className='text-white-50 small'>#1cc88a</div>
            </div>
          </div>
        </div>
        <div className='col-lg-6 mb-4'>
          <div className='card bg-info text-white shadow'>
            <div className='card-body'>
              Info
              <div className='text-white-50 small'>#36b9cc</div>
            </div>
          </div>
        </div>
        <div className='col-lg-6 mb-4'>
          <div className='card bg-warning text-white shadow'>
            <div className='card-body'>
              Warning
              <div className='text-white-50 small'>#f6c23e</div>
            </div>
          </div>
        </div>
        <div className='col-lg-6 mb-4'>
          <div className='card bg-danger text-white shadow'>
            <div className='card-body'>
              Danger
              <div className='text-white-50 small'>#e74a3b</div>
            </div>
          </div>
        </div>
        <div className='col-lg-6 mb-4'>
          <div className='card bg-secondary text-white shadow'>
            <div className='card-body'>
              Secondary
              <div className='text-white-50 small'>#858796</div>
            </div>
          </div>
        </div>
        <div className='col-lg-6 mb-4'>
          <div className='card bg-light text-black shadow'>
            <div className='card-body'>
              Light
              <div className='text-black-50 small'>#f8f9fc</div>
            </div>
          </div>
        </div>
        <div className='col-lg-6 mb-4'>
          <div className='card bg-dark text-white shadow'>
            <div className='card-body'>
              Dark
              <div className='text-white-50 small'>#5a5c69</div>
            </div>
          </div>
        </div>
      </div>

      <div className='col-lg-6 mb-4'>
        <div className='card shadow mb-4'>
          <div className='card-header py-3'>
            <h6 className='m-0 font-weight-bold text-primary'>Illustrations</h6>
          </div>
          <div className='card-body'>
            <div className='text-center'>
              <img
                className='img-fluid px-3 px-sm-4 mt-3 mb-4'
                style={{ width: 25 + 'rem' }}
                src={IllustrationsImg}
                alt=''
              />
            </div>
            <p>
              Add some quality, svg illustrations to your project courtesy of{' '}
              <a
                target='_blank'
                rel='nofollow noopener noreferrer'
                href='https://undraw.co/'
              >
                unDraw
              </a>
              , a constantly updated collection of beautiful svg images that you
              can use completely free and without attribution!
            </p>
            <a
              target='_blank'
              rel='nofollow  noopener noreferrer'
              href='https://undraw.co/'
            >
              Browse Illustrations on unDraw &rarr;
            </a>
          </div>
        </div>

        <div className='card shadow mb-4'>
          <div className='card-header py-3'>
            <h6 className='m-0 font-weight-bold text-primary'>
              Development Approach
            </h6>
          </div>
          <div className='card-body'>
            <p>
              SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees
              in order to reduce CSS bloat and poor page performance. Custom CSS
              classNamees are used to create custom components and custom
              utility classNamees.
            </p>
            <p className='mb-0'>
              Before working with this theme, you should become familiar with
              the Bootstrap framework, especially the utility classNamees.
            </p> */}
      {/* </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Dashboard;
