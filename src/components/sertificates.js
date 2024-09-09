import React from "react";
import { Row, Col } from "react-bootstrap";
import "./logos.css";

import { motion } from 'framer-motion';

import Hacker from "./logos/ethical-hacker.png";
import Robo from "./logos/robocorp.png";
import Googl from "./logos/coursera.png";




export default function Sertis() {

    const variants = {
        hidden: { x: '100vw', opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.6 } }
    };

    return (

        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
        >
            <div>
                <Row>
                    <Col xs={12} md={6} className="center-text">
                        <p>
                            <img src={Hacker} alt="Ethical Hacker" className='logo' />
                            Cisco verified Ethical Hacker
                        </p>
                        <p>
                            <img src={Robo} alt="Robocorp Automation Developer" className='logo' />
                            Robocorp Automation Developer
                        </p>
                    </Col>
                    <Col xs={12} md={6} className="center-text">
                        <p>
                            <img src={Googl} alt="Google Coursera" className='logo' />
                            Google Coursera: UX Design Process
                        </p>
                    </Col>
                </Row>
            </div>
        </motion.div>

    );
}
