import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { PresenceContext } from "../../providers/PresenceContext";

const DoughnutChart = ({ presence, leave, absence, late, position }) => {
  const { handleDetail } = useContext(PresenceContext);

  const option = {
    onClick: (event, element) => {
      if (element.length > 0) {
        let status = "";
        switch (element[0]._index) {
          case 0:
            status = "1";
            break;
          case 1:
            status = "2";
            break;
          case 2:
            status = "0";
            break;
          default:
            status = "undefined";
            break;
        }
        handleDetail(status, position);
      }
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: "#DDDFEB",
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
    labels: ["Hadir", "Izin", "Alfa", "Terlambat"],
    datasets: [
      {
        data: [presence, leave, absence, late],
        backgroundColor: ["#5CB85C", "#FFCC2F", "#D9534F", "#999999"],
        hoverBackgroundColor: ["#5CB85C", "#FFCC2F", "#D9534F", "#999999"],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
      },
    ],
  };

  return <Doughnut data={data} options={option} />;
};

export default DoughnutChart;
