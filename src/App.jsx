import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// containers
import Wrapper from './containers/Wrapper';
import ContentWrapper from './containers/ContentWrapper';
import MainContent from './containers/MainContent';

// components
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/ScrollUp/ScrollUp';

// page or routes
import Routes from './routes/Routes';
import LogoutModal from './components/Modal/LogoutModal';
import Login from './pages/Login';

const App = () => {
  return window.location.pathname === '/login' ? (
    <Login />
  ) : (
    <BrowserRouter>
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
      <LogoutModal />
    </BrowserRouter>
  );
};

export default App;
