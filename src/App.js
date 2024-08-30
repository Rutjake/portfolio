import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MediaQuery from 'react-responsive';
import MainPage from './Pages/main_page';
import NavDesktop from './components/nav-desktop';
import NavMobile from './components/nav-mobile';

function App() {
  return (
    <Container fluid className='App'>
      <Row>
        
          <nav className="navigation ">
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
      <Row>
        <Col>
          <MainPage />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
