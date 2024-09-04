import React from 'react';
import '../App.css';
import { Col, Row } from 'react-bootstrap';
import Logos from '../components/logos';

export default function MainPage() {
    return (
        <div className='mainText'>
            <h3 className='subTitle'>Moikka!</h3>
            <p>
                Tervetuloa portfolio sivulleni.
            </p>
            <p>
                Olen kolmannen vuoden tietojenkäsittelyn opiskelija Laurea
                Ammattikorkeakoulussa IT-Tradenomi koulutuslinjalla.
            </p>
            <p>
                Tein tämän sivun, jotta voin
                esitellä koulu- ja harrasteprojektejani.
            </p>
            <Row className="justify-content-md-center">
                <Col>
                    <h3 className='subTitle'>Taidot:</h3>
                </Col>

                <Logos />

            </Row>
        </div >

    );
}
