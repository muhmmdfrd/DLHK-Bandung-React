import React, { useState } from 'react';
import DoughnutChart from './DoughnutChart';
import LineChart from './LineChart';

const ChartDashboard = () => {
  const [CardData] = useState([
    {
      size: 'col-xl-8 col-lg-7',
      title: 'Earning Overview',
      type: 'chart-area',
      component: <LineChart />,
    },
    {
      size: 'col-xl-4 col-lg-5',
      title: 'Revenue Resource',
      type: 'chart-pie',
      component: <DoughnutChart />,
    },
  ]);

  return (
    <div className='row'>
      {CardData.map((value, index) => {
        const { size, title, type, component } = value;

        return (
          <div className={size} key={index}>
            <div className='card shadow mb-4'>
              <div className='card-header py-3 d-flex flex-row align-items-center justify-content-between'>
                <h6 className='m-0 font-weight-bold text-primary'>{title}</h6>
                <div className='dropdown no-arrow'>
                  <a
                    className='dropdown-toggle'
                    href='/#'
                    role='button'
                    id='dropdownMenuLink'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <i className='fas fa-ellipsis-v fa-sm fa-fw text-gray-400'></i>
                  </a>
                  <div
                    className='dropdown-menu dropdown-menu-right shadow animated--fade-in'
                    aria-labelledby='dropdownMenuLink'
                  >
                    <div className='dropdown-header'>Dropdown Header:</div>
                    <a className='dropdown-item' href='/#'>
                      Action
                    </a>
                    <a className='dropdown-item' href='/#'>
                      Another action
                    </a>
                    <div className='dropdown-divider'></div>
                    <a className='dropdown-item' href='/#'>
                      Something else here
                    </a>
                  </div>
                </div>
              </div>

              <div className='card-body'>
                <div className={type}>{component}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChartDashboard;
