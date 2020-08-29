import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ presence, leave, absence, late }) => {
  const option = {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: 'rgb(255,255,255)',
      bodyFontColor: '#858796',
      borderColor: '#DDDFEB',
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
  };

  const data = {
    labels: ['Hadir', 'Izin', 'Alfa', 'Terlambat'],
    datasets: [
      {
        data: [presence, leave, absence, late],
        backgroundColor: ['#5CB85C', '#FFCC2F', '#D9534F', '#999999'],
        hoverBackgroundColor: ['#5CB85C', '#FFCC2F', '#D9534F', '#999999'],
        hoverBorderColor: 'rgba(234, 236, 244, 1)',
      },
    ],
  };

  return <Doughnut data={data} options={option} />;
};

export default DoughnutChart;
