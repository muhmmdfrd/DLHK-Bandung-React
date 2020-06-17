import React, { useState } from 'react';
import Card from './Card';

const CardStistic = () => {
  const [dataCard] = useState([
    {
      color: 'primary',
      title: 'Earning (Monthly)',
      value: '$40,000',
      icon: 'fa-calendar',
    },
    {
      color: 'success',
      title: 'Earning (Annual)',
      value: ' $215,000',
      icon: 'fa-dollar-sign',
    },
    { color: 'info', title: 'Task', value: '50%', icon: 'fa-clipboard-list' },
    {
      color: 'warning',
      title: 'Pending Request',
      value: 18,
      icon: 'fa-comments',
    },
  ]);

  return (
    <div className='row'>
      {dataCard.map((val, index) => {
        return <Card data={val} key={index} />;
      })}
    </div>
  );
};

export default CardStistic;
