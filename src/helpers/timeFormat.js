const timeFormat = (date) => {
  const time = new Date(date);
  const hour = time.getHours();
  const minute = time.getMinutes();

  return `${hour}:${minute} WIB`;
};

export default timeFormat;
