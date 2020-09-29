import React from "react";
import { NavLink } from "react-router-dom";
import LogoDLHK from "./../../assets/img/logo-dlhk-removebg-preview.png";

const Sidebar = () => {
  return (
    <WrapperList>
      <Logo />
      <div className="mb-2">
        <Divider optional={"my-0"} />
      </div>

      {/* smart Presence */}
      {window.localStorage.getItem("_rln") === "Admin Presence" ||
      window.localStorage.getItem("_rln") === "Admin" ? (
        <>
          <SidebarHeading heading={"Smart Presence"} />
          <Menu
            linkTo={"/admin/dashboard"}
            icon={"fa-tachometer-alt"}
            menuTitle={"Dashboard"}
          />
          <Menu
            linkTo={"/admin/pegawai"}
            icon={"fa-users"}
            menuTitle={"Kepegawaian"}
          />
          <NavItem>
            <a
              className="nav-link collapsed"
              href="/#"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <i className="fas fa-fw fa-eye"></i>
              <span>Live Supervisi</span>
            </a>
            <div
              id="collapseOne"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Menu Supervisi Live:</h6>
                <NavLink
                  className="collapse-item"
                  activeClassName="yes-active"
                  to="/admin/absensi-harian-live"
                >
                  Progress Absen Harian
                </NavLink>

                <NavLink
                  className="collapse-item"
                  activeClassName="yes-active"
                  to="/admin/laporan-harian-live"
                >
                  Progress Laporan Harian
                </NavLink>
              </div>
            </div>
          </NavItem>{" "}
          <NavItem>
            <a
              className="nav-link collapsed"
              href="/#"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              <i className="fa fa-fw fa-bars" aria-hidden="true"></i>
              <span>Statistik</span>
            </a>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Menu Statistik:</h6>
                <NavLink
                  className="collapse-item"
                  activeClassName="yes-active"
                  to="/admin/statistik-absensi"
                >
                  Resume Absensi
                </NavLink>
                <NavLink
                  className="collapse-item"
                  activeClassName="yes-active"
                  to="/admin/statistik-performa"
                >
                  Resume Performa
                </NavLink>
              </div>
            </div>
          </NavItem>
          <Divider />
        </>
      ) : null}

      {/* inventory Management */}
      {window.localStorage.getItem("_rln") === "Admin" ||
      window.localStorage.getItem("_rln") === "Admin Inventory" ? (
        <>
          <SidebarHeading heading={"Inventory Management"} />

          {window.localStorage.getItem("_rln") === "Admin" ? null : (
            <Menu
              linkTo={"/admin/dashboard"}
              icon={"fa-tachometer-alt"}
              menuTitle={"Dashboard"}
            />
          )}
          <Menu
            linkTo={"/admin/barang"}
            icon={"fa-archive"}
            menuTitle={"Barang"}
          />
          <NavItem>
            <a
              className="nav-link collapsed"
              href="/#"
              data-toggle="collapse"
              data-target="#collapseTransac"
              aria-expanded="true"
              aria-controls="collapseTransac"
            >
              <i className="fas fa-fw fa-inbox"></i>
              <span>Transaksi Barang</span>
            </a>
            <div
              id="collapseTransac"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Jenis Transaksi Barang:</h6>
                <NavLink
                  className="collapse-item"
                  activeClassName="yes-active"
                  to="/admin/transaksi-barang"
                >
                  Barang Masuk
                </NavLink>

                <NavLink
                  className="collapse-item"
                  activeClassName="yes-active"
                  to="/admin/transaksi-barang-keluar"
                >
                  Barang Keluar
                </NavLink>
              </div>
            </div>
          </NavItem>
          {/* end of inventory Managament */}

          <Divider />
        </>
      ) : null}

      {window.localStorage.getItem("_rln") === "Admin" ||
      window.localStorage.getItem("_rln") === "Admin Contract" ? (
        <>
          <SidebarHeading heading={"Contract Management"} />

          {window.localStorage.getItem("_rln") === "Admin" ? null : (
            <Menu
              linkTo={"/admin/dashboard"}
              icon={"fa-tachometer-alt"}
              menuTitle={"Dashboard"}
            />
          )}

          <Menu
            linkTo={"/admin/kontrak-pegawai"}
            menuTitle={"Pegawai"}
            icon={"fa-file"}
          />
          <Menu
            linkTo={"/admin/pelamar"}
            menuTitle={"Pelamar"}
            icon={"fa-briefcase"}
          />
          <Menu
            linkTo={"/admin/interview"}
            menuTitle={"Jadwal Interview"}
            icon={"fa-calendar"}
          />
          <Menu
            linkTo={"/admin/posisi-pelamar"}
            menuTitle={"Posisi Lamaran"}
            icon={"fa-user"}
          />
          {/* end of contract Management */}

          <Divider optional={"d-none d-md-block"} />
        </>
      ) : null}

      {window.localStorage.getItem("_rln") === "Admin" ? (
        <>
          <SidebarHeading heading={"Account Management"} />

          <Menu
            linkTo={"/admin/user"}
            menuTitle={"Account"}
            icon={"fa-user-friends"}
          />
          <Menu
            linkTo={"/admin/device"}
            menuTitle={"IMEI"}
            icon={"fa-mobile"}
          />
          {/* end of contract Management */}

          <Divider optional={"d-none d-md-block"} />
        </>
      ) : null}
    </WrapperList>
  );
};

const WrapperList = ({ children }) => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {children}
    </ul>
  );
};

const SidebarHeading = ({ heading }) => {
  return <div className="sidebar-heading">{heading}</div>;
};

const Divider = ({ optional }) => {
  return <hr className={`sidebar-divider ${optional}`} />;
};

const NavItem = ({ children }) => {
  return <li className="nav-item">{children}</li>;
};

const Logo = () => {
  return (
    <a
      className="sidebar-brand bg-primary d-flex align-items-center justify-content-center"
      href="/dashboard"
    >
      <div className="sidebar-brand-icon">
        <img src={LogoDLHK} className="img-fluid" alt="logo" />
      </div>
    </a>
  );
};

const Menu = ({ linkTo, icon, menuTitle }) => {
  return (
    <NavItem>
      <NavLink className="nav-link" activeClassName="yes-active" to={linkTo}>
        <i className={`fas fa-fw ${icon}`}></i>
        <span>{menuTitle}</span>
      </NavLink>
    </NavItem>
  );
};

export default Sidebar;
