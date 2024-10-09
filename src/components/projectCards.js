import React from 'react';
import { useState } from 'react';
import '../App.css';
import './projectCards.css';
import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';

// Modals
import ViileeModal from './project_modals/viilee_modal';
import PokerModal from './project_modals/poker_modal';
import SaaModal from './project_modals/saa_modal';
import MatikModal from './project_modals/matik_modal';
import RuokaModal from './project_modals/ruoka_modal';
import ElokModal from './project_modals/elok_modal';
import TurvaModal from './project_modals/turva_modal';
import GrooverModal from './project_modals/groover_modal'

// Top Images
import Viilee from "./project_images/viilee-app/teamViileeThumb.png";
import Poker from "./project_images/poker/pokerThumb.jpg";
import Ruoka from "./project_images/ruokavertailu/crazyeightThumb.jpg";
import Saa from "./project_images/saa-nyt/saaThumb.JPG";
import Matikka from "./project_images/matikka/matikThumb.JPG";
import Turva from "./project_images/turva/TurvThumb.JPG";
import Elokuvat from "./project_images/elokuvat/elokuvatThumb.JPG";
import Groover from "./project_images/groover/GrooverGui.JPG";

// Logos
import Figma from "./logos/figma.png";
import Pyth from "./logos/python-logo.png";
import KivyMd from "./logos/kivymd.png";
import Ux from "./logos/ux-design.png";
import R_React from "./logos/react.png";
import Open_W from "./logos/open_weather.png";
import Html from "./logos/HTML5.png";
import Boots from "./logos/Bootstrap.png";
import CSS from "./logos/CSS.png";
import Javas from "./logos/javascript.png";
import Lua from "./logos/lua.png";



export default function Cards() {
    /* Modal State */
    const [modalViilee, setModalViilee] = useState(false);
    const [modalPoker, setModalPoker] = useState(false);
    const [modalSaa, setModalSaa] = useState(false);
    const [modalMatik, setModalMatik] = useState(false);
    const [modalRuoka, setModalRuoka] = useState(false);
    const [modalElok, setModalElok] = useState(false);
    const [modalTurva, setModalTurva] = useState(false);
    const [modalGroove, setModalGroove] = useState(false);

    /* Animation Container */
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    /* First Animation Variable */
    const variantsLeft1 = {
        hidden: { x: '-100vw' },
        visible: { x: 0, transition: { duration: 1.5, delay: 0.6 } }
    };

    /* Second Animation Variable */
    const variantsRight1 = {
        hidden: { x: '100vw', opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1.5, delay: 1 } }
    };

    const variantsLeft2 = {
        hidden: { x: '-100vw' },
        visible: { x: 0, transition: { duration: 1.5, delay: 1.4 } }
    };

    const variantsRight2 = {
        hidden: { x: '100vw', opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1.5, delay: 1.8 } }
    };

    return (

        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div
                variants={variantsLeft1}
            >
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <Card className='card-style'>
                            <Col className='d-flex justify-content-center'>
                                <Card.Img variant="top" src={Viilee} className='topImage' alt="Team Viilee App" />
                            </Col>
                            <Card.Body>
                                <Card.Title className='cardTitle'>Team Viilee App</Card.Title>
                                <Card.Text>
                                    Projektin tavoitteena oli toteuttaa toiminnallinen prototyyppi harjoitusohjelma -sovelluksesta.
                                    Sovelluksella hallinoidaan harjoitusryhmän urheilijoiden harjoitusohjelmia ja pidetään harjoituspäiväkirjaa.
                                    Projekti toteutettiin yhteistyössä Team Viilee yleisurheilu harjoitusryhmän kanssa.
                                </Card.Text>
                                <Row>
                                    <Col>
                                        <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">UX-Design Process</Tooltip>}>
                                            <img className="logo" src={Ux} alt="UX-Design Process" />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">Figma</Tooltip>}>
                                            <img className="logo" src={Figma} alt="Figma" />
                                        </OverlayTrigger>
                                    </Col>
                                    <Col xs lg={4} className="cardButtonDiv">
                                        <Button className="cardButton" size="sm" variant="success" onClick={() => setModalViilee(true)}>
                                            Lue lisää
                                        </Button>
                                        <ViileeModal
                                            show={modalViilee}
                                            onHide={() => setModalViilee(false)}
                                        />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card className='card-style'>
                            <Col className='d-flex justify-content-center'>
                                <Card.Img variant="top" src={Poker} className='topImage' alt="JaggePokka" />
                            </Col>
                            <Card.Body>
                                <Card.Title className='cardTitle'>JaggePokka</Card.Title>
                                <Card.Text>
                                    JaggePokan esikuvana toimii RAY:n 80 -luvun lopulla kehitetty ensimmäinen video pokerikone.
                                    JaggePokka on toteutettu Pythonilla ja siinä on käytetty KivyMd frameworkia. Projektin tavoitteena oli harjotella ohjelmointia itsenäisesti dokumentaatiota hyödyntäen.
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
                                    <Col xs lg={4} className="cardButtonDiv">
                                        <Button className="cardButton" size="sm" variant="success" onClick={() => setModalPoker(true)}>
                                            Lue lisää
                                        </Button>
                                        <PokerModal
                                            show={modalPoker}
                                            onHide={() => setModalPoker(false)}
                                        />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </motion.div>
            <motion.div
                variants={variantsRight1}
            >
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <Card className='card-style'>
                            <Col className='d-flex justify-content-center'>
                                <Card.Img variant="top" src={Saa} className='topImage' alt="Sää Nyt" />
                            </Col>
                            <Card.Body>
                                <Card.Title className='cardTitle'>Sää Nyt</Card.Title>
                                <Card.Text>
                                    Sää Nyt on web-sovellus, josta näkee ajankohtaisen sään eripuolilla maailmaa.
                                    Sovellus hyödyntää OpenWeatherin ilmaista API rajapintaa.
                                </Card.Text>
                                <Row>
                                    <Col>
                                        <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">React</Tooltip>}>
                                            <img className="logo" src={R_React} alt="React" />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">CSS</Tooltip>}>
                                            <img className="logo" src={CSS} alt="CSS" />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">Open Weather</Tooltip>}>
                                            <img className="logo" src={Open_W} alt="Open Weather" />
                                        </OverlayTrigger>
                                    </Col>
                                    <Col xs lg={4} className="cardButtonDiv">
                                        <Button className="cardButton" size="sm" variant="success" onClick={() => setModalSaa(true)}>
                                            Lue lisää
                                        </Button>
                                        <SaaModal
                                            show={modalSaa}
                                            onHide={() => setModalSaa(false)}
                                        />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card className='card-style'>
                            <Col className='d-flex justify-content-center'>
                                <Card.Img variant="top" src={Groover} className='topImage' alt="Groover" />
                            </Col>
                            <Card.Body>
                                <Card.Title className='cardTitle'>Groover</Card.Title>
                                <Card.Text>
                                    Groover on avoimen lähdekoodin skripti, jolla voi humanisoida midi rumpuja Reaperin Midi Editorissa.
                                    Skriptin tarkoitus on nopeuttaa editointi prosessia.
                                </Card.Text>
                                <Row>
                                    <Col>
                                        <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">Lua</Tooltip>}>
                                            <img className="logo" src={Lua} alt="Lua" />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">Python</Tooltip>}>
                                            <img className="logo" src={Pyth} alt="Python" />
                                        </OverlayTrigger>

                                    </Col>
                                    <Col xs lg={4} className="cardButtonDiv">
                                        <Button className="cardButton" size="sm" variant="success" onClick={() => setModalGroove(true)}>
                                            Lue lisää
                                        </Button>
                                        <GrooverModal
                                            show={modalGroove}
                                            onHide={() => setModalGroove(false)}
                                        />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </motion.div>
            <motion.div
                variants={variantsLeft2}
            >
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <Card className='card-style'>
                            <Col className='d-flex justify-content-center'>
                                <Card.Img variant="top" src={Ruoka} className='topImage' alt="Ruokaostosten hintavertailusivusto" />
                            </Col>
                            <Card.Body>
                                <Card.Title className='cardTitle'>Ruokaostosten hintavertailusivusto</Card.Title>
                                <Card.Text>
                                    Projekti oli osa koulun Digitaalisten palvelujen käyttäjäkeskeinen suunnittelu -kurssia.
                                    Projektin tarkoitus oli kerätä tietoa sivuston hyödyllisyydestä sekä tarvittavista ominaisuuksista.
                                    Tulokset auttavat toteuttamaan palvelun, jonka asiakkaat kokevat hyödylliseksi.
                                </Card.Text>
                                <Row>
                                    <Col>
                                        <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">UX-Design Process</Tooltip>}>
                                            <img className="logo" src={Ux} alt="UX-Design Process" />
                                        </OverlayTrigger>
                                    </Col>
                                    <Col xs lg={4} className="cardButtonDiv">
                                        <Button className="cardButton" size="sm" variant="success" onClick={() => setModalRuoka(true)}>
                                            Lue lisää
                                        </Button>
                                        <RuokaModal
                                            show={modalRuoka}
                                            onHide={() => setModalRuoka(false)}
                                        />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card className='card-style'>
                            <Col className='d-flex justify-content-center'>
                                <Card.Img variant="top" src={Matikka} className='topImage' alt="MatikkaPeli" />
                            </Col>
                            <Card.Body>
                                <Card.Title className='cardTitle'>MatikkaPeli</Card.Title>
                                <Card.Text>
                                    MatikkaPeli perustuu koulun kurssitehtävään, jonka pohjalta kehitin puhelin-sovelluksen lapseni pyynnöstä.
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
                                    <Col xs lg={4} className="cardButtonDiv">
                                        <Button className="cardButton" size="sm" variant="success" onClick={() => setModalMatik(true)}>
                                            Lue lisää
                                        </Button>
                                        <MatikModal
                                            show={modalMatik}
                                            onHide={() => setModalMatik(false)}
                                        />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </motion.div>
            <motion.div
                variants={variantsRight2}
            >
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <Card className='card-style'>
                            <Col className='d-flex justify-content-center'>
                                <Card.Img variant="top" src={Turva} className='topImage' alt="Turvallisuus Websivu" />
                            </Col>
                            <Card.Body>
                                <Card.Title className='cardTitle'>Turvallisuus Websivu</Card.Title>
                                <Card.Text>
                                    Turvallisuus websivun tein kouluprojektina Verkkosivujen kehittäminen kurssin lopputyönä.
                                    Sivuston sisältö tehtiin yhteistyönä Turvallisuuden ja riskienhallinnan opiskelijan kanssa ja siitä tuli osa hänen opinnäytetyötä.
                                </Card.Text>
                                <Row>
                                    <Col>
                                        <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">HTML5</Tooltip>}>
                                            <img className="logo" src={Html} alt="HTML5" />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">CSS</Tooltip>}>
                                            <img className="logo" src={CSS} alt="CSS" />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">Bootstrap</Tooltip>}>
                                            <img className="logo" src={Boots} alt="Bootstrap" />
                                        </OverlayTrigger>
                                    </Col>
                                    <Col xs lg={4} className="cardButtonDiv">
                                        <Button className="cardButton" size="sm" variant="success" onClick={() => setModalTurva(true)}>
                                            Lue lisää
                                        </Button>
                                        <TurvaModal
                                            show={modalTurva}
                                            onHide={() => setModalTurva(false)}
                                        />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card className='card-style'>
                            <Col className='d-flex justify-content-center'>
                                <Card.Img variant="top" src={Elokuvat} className='topImage' alt="Elokuvat pääkaupunkiseudulla tänään" />
                            </Col>
                            <Card.Body>
                                <Card.Title className='cardTitle'>Elokuvat pääkaupunkiseudulla tänään</Card.Title>
                                <Card.Text>
                                    "Elokuvat pääkaupunkiseudulla tänään" web-sovellus on toteutettu osana koulun kurssia.
                                    Web-sovellus hakee Finnkinon alkavat näytökset nykyisestä hetkestä alkaen.
                                    Projekti tehtiin parityönä.
                                </Card.Text>
                                <Row>
                                    <Col>
                                        <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">Javascript</Tooltip>}>
                                            <img className="logo" src={Javas} alt="Javascript" />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">HTML5</Tooltip>}>
                                            <img className="logo" src={Html} alt="HTML5" />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">CSS</Tooltip>}>
                                            <img className="logo" src={CSS} alt="CSS" />
                                        </OverlayTrigger>

                                    </Col>
                                    <Col xs lg={4} className="cardButtonDiv">
                                        <Button className="cardButton" size="sm" variant="success" onClick={() => setModalElok(true)}>
                                            Lue lisää
                                        </Button>
                                        <ElokModal
                                            show={modalElok}
                                            onHide={() => setModalElok(false)}
                                        />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </motion.div>
        </motion.div >

    )
}
