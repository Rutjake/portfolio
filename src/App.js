import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './components/menu/menu';

function App() {
  return (
    <Container>
      <div className="App">
        <header className="App-header">
          <Row>
            <Col sm={2}>
              <li>
                <a href="#/home">Jarno</a>
              </li>
            </Col>
            <Col sm={8}>
              <Menu />
            </Col>
          </Row>
        </header>

      </div >
    </Container>
  );
}

export default App;
