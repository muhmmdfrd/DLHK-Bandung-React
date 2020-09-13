const checkExpiredDate = (data) => {
  const date = new Date(data);
  const currentDate = new Date();

  return (date.getMonth() + 1 === currentDate.getMonth() &&
    date.getFullYear() <= currentDate.getFullYear()) ||
    date.getMonth() === currentDate.getMonth() ||
    (date.getMonth() <= currentDate.getMonth() &&
      date.getFullYear() <= currentDate.getFullYear())
    ? { status: "Warning", label: "warning" }
    : { status: "Aktif", label: "success" };
};

export default checkExpiredDate;
