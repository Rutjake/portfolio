import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './components/menu/menu';
import MainPage from './Pages/main_page';
import EduPage from './Pages/education';

function App() {
  return (
      <Container fluid className='App'>
        <header className="App-header">
          <Row>
            <Col sm={2}>
              <p className='titleName'>JARNO</p>
            </Col>
            <Col sm={8}>
              <Menu />
            </Col>
          </Row>
          </header>
          <Row>
            <Col>
              <MainPage />
            </Col>
          </Row>
          <Row>
            <Col>
              <EduPage />
            </Col>
          </Row>    
      </Container>
  );
}

export default App;
