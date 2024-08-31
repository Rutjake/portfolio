import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MediaQuery from 'react-responsive';

import MainPage from './Pages/main_page';
import NavDesktop from './components/nav-desktop';
import NavMobile from './components/nav-mobile';
import EduPage from './Pages/education';

function App() {
  return (
    <Router>
      <Container fluid className='App'>
        <Row>
          <nav className="navigation">
            <MediaQuery query="(min-width: 700px)">
              <NavDesktop />
            </MediaQuery>
            <MediaQuery query="(max-width: 700px)">
              <NavMobile />
            </MediaQuery>
          </nav>
        </Row>
        <Row>
          <Col>
            <h3 className='underText'>Ethical Hacker & Developer</h3>
          </Col>
        </Row>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/education" element={<EduPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
