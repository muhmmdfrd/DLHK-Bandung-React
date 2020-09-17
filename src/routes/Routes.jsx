import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// page component
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import PresenceStatistic from "../pages/PresenceStatistic";
import ZoneStatistic from "../pages/ZoneStatistic";
import RegionStatistic from "../pages/RegionStatistic";
import PresenceLive from "../pages/PresenceLive";
import Items from "../pages/Items";
import Employee from "../pages/Employee";
import Contract from "../pages/Contract";
import DetailPerson from "../pages/DetailPerson";
import ListApplicant from "../pages/ListApplicant";
import PerformStatistic from "../pages/PerformStatistic";
import RegionPerform from "../pages/RegionPerform";
import ZonePerform from "../pages/ZonePerform";
import PerformLive from "../pages/PerformLive";
import ListInterview from "../pages/ListInterview";
import ListTransac from "../pages/ListTransac";
import ListTransacOut from "../pages/ListTransacOut";
import RolePage from "../pages/Role";
import ItemQR from "../pages/ItemQR";

const Routes = () => {
  // * provide a path and which component will be rendered
  const listOfRoute = [
    { path: "/admin/dashboard", render: Dashboard },
    { path: "/admin/pegawai", render: Employee },
    { path: "/register", render: Register },
    { path: "/admin/statistik-absensi", render: PresenceStatistic },
    { path: "/admin/statistik-absensi-zona", render: ZoneStatistic },
    { path: "/admin/statistik-absensi-wilayah", render: RegionStatistic },
    { path: "/admin/absensi-harian-live", render: PresenceLive },
    { path: "/admin/laporan-harian-live", render: PerformLive },
    { path: "/admin/barang", render: Items },
    { path: "/admin/barang/:id", render: ItemQR },
    { path: "/admin/kontrak-pegawai", render: Contract },
    { path: "/admin/detail-pegawai/:id", render: DetailPerson },
    { path: "/admin/pelamar", render: ListApplicant },
    { path: "/admin/statistik-performa", render: PerformStatistic },
    { path: "/admin/interview", render: ListInterview },
    { path: "/admin/transaksi-barang", render: ListTransac },
    { path: "/admin/transaksi-barang-keluar", render: ListTransacOut },
    {
      path: "/admin/statistik-performa-zona",
      render: ZonePerform,
    },
    {
      path: "/admin/statistik-performa-wilayah",
      render: RegionPerform,
    },
    {
      path: "/admin/posisi-pelamar",
      render: RolePage,
    },
  ];

  return (
    <Switch>
      {listOfRoute.map((value, index) => {
        const { path, render } = value;
        return <Route key={index} path={path} exact component={render}></Route>;
      })}
      <Route
        path={"*"}
        exact
        render={() => {
          return <Redirect to="/not-found" />;
        }}
      />
    </Switch>
  );
};

export default Routes;
