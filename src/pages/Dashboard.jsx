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

  return loading ? (
    <LoadingScreen />
  ) : (
    <FadeIn>
      <div className="container-fluid mt-4">
        {window.localStorage.getItem("_rln") === "Admin" ||
        window.localStorage.getItem("_rln") === "Admin Presence" ? (
          <>
            <h4>Smart Presence</h4>
            <div className="row">
              <div className="col-xl-3 col-md-6 mb-4">
                <Card
                  title={"Jumlah Pegawai"}
                  value={employees}
                  icon={"user"}
                  label={"primary"}
                />
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <Card
                  title={"Kehadiran"}
                  value={presences}
                  icon={"clock"}
                  label={"warning"}
                  percent={true}
                />
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <Card
                  title={"Performa"}
                  value={performances}
                  icon={"tachometer-alt"}
                  label={"danger"}
                  percent={true}
                />
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <Card
                  title={"Nilai Keseluruhan"}
                  value={score}
                  icon={"award"}
                  label={"success"}
                  percent={true}
                />
              </div>
            </div>
            <br />
          </>
        ) : null}

        {window.localStorage.getItem("_rln") === "Admin" ||
        window.localStorage.getItem("_rln") === "Admin Inventory" ? (
          <>
            <h4>Inventory App Management</h4>
            <div className="row">
              <div className="col-xl-3 col-md-6 mb-4">
                <Card
                  title={"Jumlah Barang"}
                  value={items}
                  icon={"box"}
                  label={"primary"}
                />
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <Card
                  title={"Barang Masuk"}
                  value={transacIn}
                  icon={"sign-in-alt"}
                  label={"warning"}
                />
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <Card
                  title={"Barang Keluar"}
                  value={out}
                  icon={"sign-out-alt"}
                  label={"danger"}
                />
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <Card
                  title={"Transaksi Keseluruhan"}
                  value={transacIn + out}
                  icon={"calculator"}
                  label={"success"}
                />
              </div>
            </div>

            <br />
          </>
        ) : null}

        {window.localStorage.getItem("_rln") === "Admin" ||
        window.localStorage.getItem("_rln") === "Admin Contract" ? (
          <>
            <h4>Contract App Management</h4>
            <div className="row">
              <div className="col-xl-3 col-md-6 mb-4">
                <Card
                  title={"Jumlah Pelamar"}
                  value={applicants}
                  icon={"file"}
                  label={"primary"}
                />
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <Card
                  title={"Jadwal Interview"}
                  value={interviewers}
                  icon={"pen"}
                  label={"warning"}
                />
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <Card
                  title={"Pegawai Expired"}
                  value={expired}
                  icon={"exclamation-triangle"}
                  label={"danger"}
                />
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <Card
                  title={"Posisi Lamaran"}
                  value={roleActive}
                  icon={"check-square"}
                  label={"success"}
                />
              </div>
            </div>
          </>
        ) : null}
      </div>
    </FadeIn>
  );
};

export default Dashboard;
