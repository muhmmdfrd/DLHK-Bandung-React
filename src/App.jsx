import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

// containers
import Wrapper from "./containers/Wrapper";
import ContentWrapper from "./containers/ContentWrapper";
import MainContent from "./containers/MainContent";

// components
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import AllModal from "./components/Modal/AllModal";

// page or routes
import Routes from "./routes/Routes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/External Pages/Home";
import Applicant from "./pages/External Pages/Applicant";
import NotFound from "./pages/404";
import SendApplicant from "./pages/External Pages/SendApplicant";
import SendDocument from "./pages/External Pages/SendDocument";
import ExportEmployee from "./pages/Export Pages/ExportEmployee";
import ExportPresence from "./pages/Export Pages/ExportPresence";
import ExportPerform from "./pages/Export Pages/ExportPerform";
import ExportPerson from "./pages/Export Pages/ExportPerson";
import ExportItem from "./pages/Export Pages/ExportItem";
import ExportTransacIn from "./pages/Export Pages/ExportTransacIn";
import ExportTransacOut from "./pages/Export Pages/ExportTransacOut";
import ExportContract from "./pages/Export Pages/ExportContract";
import PresenceLive from "./pages/PresenceLive";
import PerformLive from "./pages/PerformLive";

const App = () => {
  let outputRender = [
    { path: "/admin/login", render: Login },
    { path: "/pelamar/register", render: Register },
    { path: "/", render: Home },
    { path: "/pelamar/login", render: Applicant },
    { path: "/not-found", render: NotFound },
    { path: "/pelamar/kirim-lamaran", render: SendApplicant },
    { path: "/pelamar/kirim-dokumen", render: SendDocument },
    { path: "/export/employee", render: ExportEmployee },
    { path: "/export/presence", render: ExportPresence },
    { path: "/export/perform", render: ExportPerform },
    { path: "/export/person", render: ExportPerson },
    { path: "/export/item", render: ExportItem },
    { path: "/export/transac-in", render: ExportTransacIn },
    { path: "/export/transac-out", render: ExportTransacOut },
    { path: "/export/contract/:id", render: ExportContract },
    { path: "/live-supervisi/presence", render: PresenceLive },
    { path: "/live-supervisi/perform", render: PerformLive },
    { path: "/admin/*", render: WrapAllApp },
  ];

  return (
    <HashRouter>
      <Switch>
        {outputRender.map((value, index) => {
          const { path, render } = value;
          return (
            <Route key={index} path={path} exact component={render}></Route>
          );
        })}
      </Switch>
    </HashRouter>
  );
};

const WrapAllApp = () => {
  if (window.localStorage.length === 0) {
    window.location.href = "/not-found";
  }
  return (
    <HashRouter>
      <Wrapper>
        <Sidebar />
        <ContentWrapper>
          <MainContent>
            <Topbar />
            <Routes />
          </MainContent>
          <Footer />
        </ContentWrapper>
      </Wrapper>
      <ScrollUp />
      <AllModal />
    </HashRouter>
  );
};

export default App;
