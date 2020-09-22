import React, { useContext } from "react";
import Card from "../components/Card/Card";
import FadeIn from "react-fade-in";

// * components
import LoadingScreen from "./LoadingScreen";
import { DashboardContext } from "../providers/DashboardContext";

const Dashboard = () => {
  const { item, presence, contract, loading } = useContext(DashboardContext);

  const { employees, presences, performances, score } = presence;
  const { items, transacIn, out } = item;
  const { expired, applicants, interviewers, roleActive } = contract;

  const presenceValue = [
    {
      title: "Jumlah Pegawai",
      value: employees,
      icon: "user",
      label: "primary",
      percent: false,
    },
    {
      title: "Kehadiran",
      value: presences,
      icon: "clock",
      label: "warning",
      percent: true,
    },
    {
      title: "Performa",
      value: performances,
      icon: "tachometer-alt",
      label: "danger",
      percent: true,
    },
    {
      title: "Nilai Keseluruhan",
      value: score,
      label: "success",
      icon: "award",
      percent: true,
    },
  ];

  const itemValue = [
    {
      title: "Jumlah Barang",
      value: items,
      icon: "box",
      label: "primary",
      percent: false,
    },
    {
      title: "Barang Masuk",
      value: transacIn,
      icon: "sign-in-alt",
      label: "warning",
      percent: false,
    },
    {
      title: "Barang Keluar",
      value: out,
      icon: "sign-out-alt",
      label: "danger",
      percent: false,
    },
    {
      title: "Transaksi Keseluruhan",
      value: transacIn + out,
      icon: "calculator",
      percent: false,
      label: "success",
    },
  ];

  const contractValue = [
    {
      title: "Jumlah Pelamar",
      value: applicants,
      icon: "file",
      label: "primary",
      percent: false,
    },
    {
      title: "Jadwal Interview",
      value: interviewers,
      icon: "pen",
      label: "warning",
      percent: false,
    },
    {
      title: "Pegawai Expired",
      value: expired,
      icon: "exclamation-triangle",
      label: "danger",
      percent: false,
    },
    {
      title: "Posisi Lamaran",
      value: roleActive,
      icon: "check-square",
      percent: false,
      label: "success",
    },
  ];

  return loading ? (
    <LoadingScreen />
  ) : (
    <FadeIn>
      <div className="container-fluid mt-4">
        {/* presence menu */}
        {window.localStorage.getItem("_rln") === "Admin" ||
        window.localStorage.getItem("_rln") === "Admin Presence" ? (
          <>
            <h4>Smart Presence</h4>
            <div className="row">
              {presenceValue.map((val, index) => {
                const { title, value, icon, label, percent } = val;
                return (
                  <div className="col-xl-3 col-md-6 mb-4" key={index}>
                    <Card
                      title={title}
                      value={value}
                      icon={icon}
                      label={label}
                      percent={percent}
                    />
                  </div>
                );
              })}
            </div>
            <br />
          </>
        ) : null}

        {/*  inventory menu */}
        {window.localStorage.getItem("_rln") === "Admin" ||
        window.localStorage.getItem("_rln") === "Admin Inventory" ? (
          <>
            <h4>Inventory App Management</h4>
            <div className="row">
              {itemValue.map((val, index) => {
                const { title, value, icon, label, percent } = val;
                return (
                  <div className="col-xl-3 col-md-6 mb-4" key={index}>
                    <Card
                      title={title}
                      value={value}
                      icon={icon}
                      label={label}
                      percent={percent}
                    />
                  </div>
                );
              })}
            </div>

            <br />
          </>
        ) : null}

        {/* contract menu */}
        {window.localStorage.getItem("_rln") === "Admin" ||
        window.localStorage.getItem("_rln") === "Admin Contract" ? (
          <>
            <h4>Contract App Management</h4>
            <div className="row">
              {contractValue.map((val, index) => {
                const { title, value, icon, label, percent } = val;
                return (
                  <div className="col-xl-3 col-md-6 mb-4" key={index}>
                    <Card
                      title={title}
                      value={value}
                      icon={icon}
                      label={label}
                      percent={percent}
                    />
                  </div>
                );
              })}
            </div>
          </>
        ) : null}
      </div>
    </FadeIn>
  );
};

export default Dashboard;
