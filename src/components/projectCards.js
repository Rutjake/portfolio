import React from 'react';
import '../App.css';
import './projectCards.css';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import { motion } from 'framer-motion';

export default function Cards() {

    const variants = {
        hidden: { x: '100vw', opacity: 0 },
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
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Team Viilee App</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
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
                            <Card.Link href="#">Card Link</Card.Link>
                        </Card.Body>
                    </Card>

                </Col>
                <Col xs={12} md={6}>
                    <Card className='card-style'>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>JaggePokka</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
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
                            <Card.Link href="#">Card Link</Card.Link>
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
                            <Card.Link href="#">Card Link</Card.Link>
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
                            <Card.Link href="#">Card Link</Card.Link>
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
                            <Card.Link href="#">Card Link</Card.Link>
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
                            <Card.Link href="#">Card Link</Card.Link>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </div>
        </motion.div>
    )
}
