import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MediaQuery from 'react-responsive';

import { motion } from 'framer-motion';

import MainPage from './Pages/main_page';
import NavDesktop from './components/nav-desktop';
import NavMobile from './components/nav-mobile';
import EduPage from './Pages/education';

function App() {
  return (
    <Router>
      <Container fluid className='App'>
          <nav className="navigation">
            <MediaQuery query="(min-width: 700px)">
              <NavDesktop />
            </MediaQuery>
            <MediaQuery query="(max-width: 700px)">
              <NavMobile />
            </MediaQuery>
          </nav>
        <Row>
          <Col>
            <h3 className='underText'>Ethical Hacker & Developer</h3>
          </Col>
        </Row>
        <Routes>
        <Route path="/" element={<motion.div
            initial={{ x: '-100vw', opacity: 0}}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100vw', opacity:0 }}
            transition={{ duration: 1.5 }}
          >
            <MainPage />
          </motion.div>} />
          <Route path="/education" element={<motion.div
            initial={{ x: '-100vw', opacity: 0}}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100vw', opacity:0 }}
            transition={{ duration: 1.5 }}
          >
            <EduPage />
          </motion.div>} />
          
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
