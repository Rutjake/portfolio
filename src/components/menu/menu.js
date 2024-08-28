import './menu.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Menu() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand href="#home">JARNO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto menuBar_Content center-navbar">
                    <Nav.Link href="#home">Etusivu</Nav.Link>
                    <Nav.Link href="#link">Koulutus</Nav.Link>
                    <Nav.Link href="#link">Projektit</Nav.Link>
                    <Nav.Link href="#link">Ota Yhteyttä</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}
