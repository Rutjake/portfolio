import React from 'react';
import '../App.css';
import './projectCards.css';
import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import { motion } from 'framer-motion';

import Viilee from "./project_images/viilee-app/teamViileeThumb.png";
import Poker from "./project_images/poker/pokerThumb.jpg";

import Figma from "./logos/figma.png";
import Pyth from "./logos/python-logo.png";
import KivyMd from "./logos/kivymd.png";

export default function Cards() {

    const variants = {
        hidden: { x: '-100vw', opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1 } }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
        >
            <div>
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <Card className='card-style'>
                            <Col className='d-flex justify-content-center'>
                                <Card.Img variant="top" src={Viilee} className='topImage' />
                            </Col>
                            <Card.Body>
                                <Card.Title>Team Viilee App</Card.Title>
                                <Card.Text>
                                    Projektin tavoitteena oli toteuttaa toiminnallinen prototyyppi harjoitusohjelma -sovelluksesta.
                                    Sovelluksella hallinoidaan harjoitusryhmän urheilijoiden harjoitusohjelmia ja pidetään harjoituspäiväkirjaa.
                                    Projekti toteutettiin yhteistyössä Team Viilee yleisurheilu harjoitusryhmän kanssa.
                                </Card.Text>
                                <Row>
                                    <Col>
                                        <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">Figma</Tooltip>}>
                                            <img className="logo" src={Figma} alt="Figma" />
                                        </OverlayTrigger>
                                    </Col>
                                    <Col sm={{offset: 10}}>
                                        <Card.Link href="#">Lue lisää</Card.Link>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <Card className='card-style'>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Ruokaostosten hintavertailusivusto</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Lue lisää</Card.Link>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col xs={12} md={6}>
                    <Card className='card-style'>
                            <Col className='d-flex justify-content-center'>
                                <Card.Img variant="top" src={Poker} className='topImage' />
                            </Col>
                            <Card.Body>
                                <Card.Title>JaggePokka</Card.Title>
                                <Card.Text>
                                JaggePokan esikuvana toimii RAY:n 80 -luvun lopulla kehitetty ensimmäinen video pokerikone. 
                                JaggePokka on toteutettu Pythonilla ja siinä on käytetty KivyMd frameworkia.
                                </Card.Text>
                                <Row>
                                    <Col>
                                        <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">Python</Tooltip>}>
                                            <img className="logo" src={Pyth} alt="Python" />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">KivyMD</Tooltip>}>
                                            <img className="logo" src={KivyMd} alt="KivyMd" />
                                        </OverlayTrigger>
                                    </Col>
                                    <Col sm={{offset: 10}}>
                                        <Card.Link href="#">Lue lisää</Card.Link>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card className='card-style'>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Sää Nyt</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Lue lisää</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card className='card-style'>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>MatikkaPeli</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Lue lisää</Card.Link>
                            </Card.Body>
                        </Card>

                        <Card className='card-style'>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Turvallisuus websivu</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Lue lisää</Card.Link>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col xs={12} md={6}>
                        <Card className='card-style'>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Elokuvat pääkaupunkiseudulla tänään</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Lue lisää</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card className='card-style'>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Tämä Verkkosivu</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Lue lisää</Card.Link>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </div>
        </motion.div>
    )
}
