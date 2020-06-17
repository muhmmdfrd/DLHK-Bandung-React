import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
  const [data] = useState({
    labels: ['Direct', 'Referral', 'Social'],
    datasets: [
      {
        data: [55, 30, 15],
        backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
        hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
        hoverBorderColor: 'rgba(234, 236, 244, 1)',
      },
    ],
  });

  const [option] = useState({
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: 'rgb(255,255,255)',
      bodyFontColor: '#858796',
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  });

  return <Doughnut data={data} options={option} />;
};

export default DoughnutChart;
