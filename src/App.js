import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './components/menu/menu';
import MainPage from './Pages/main_page';

function App() {
  return (
      <Container fluid className='App'>
          <Row>
            <Col>
              <Menu />
            </Col>
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
