import React, { useEffect } from 'react';
import AppNavbar from './components/layout/navbar'
import Routes from './components/router/routes'
import { BrowserRouter as Router } from 'react-router-dom';
import PageFooter from './components/layout/footer';
import { useLocation } from "react-router-dom";


const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const App: React.FC = () => {

  const name = 'William'
  document.title = name + " Astatine";

  return (
    <React.Fragment>
      <Router>
        <ScrollToTop />
        <AppNavbar name={name} />
        <Routes name={name} />
        <PageFooter name={name} />
      </Router>
    </React.Fragment>
  );
}

export default App;
