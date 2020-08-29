const dateFormat = (date) => {
  const format = new Date(date);

  const ListOfMonth = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const dateResult = format.getDay();
  const month = format.getMonth();
  const year = format.getFullYear();

  return `${dateResult} ${ListOfMonth[month]} ${year}`;
};

export default dateFormat;
