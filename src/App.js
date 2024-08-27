import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './components/menu/menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
      <Container>
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
