const checkExpiredDate = (data) => {
  const date = new Date(data);
  const currentDate = new Date();

  return (
      date.getMonth() === currentDate.getMonth() + 1 &&
      date.getFullYear() <= currentDate.getFullYear()) ||
    (date.getMonth() <= currentDate.getMonth() &&
      date.getFullYear() <= currentDate.getFullYear()) ? {
      status: "Warning",
      label: "warning"
    } : {
      status: "Aktif",
      label: "success"
    };
};

export default checkExpiredDate;