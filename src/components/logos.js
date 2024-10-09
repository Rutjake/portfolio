import React from 'react';
import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import "./logos.css";

import { motion } from 'framer-motion';

/* Logo Images */
import Kali from "./logos/kali-dragon.png";
import Hacker from "./logos/ethical-hacker.png";
import Pyth from "./logos/python-logo.png";
import JavaS from "./logos/javascript.png";
import Thec from "./logos/The-C.png";
import CplusPlus from "./logos/Cplus.png";
import Html from "./logos/HTML5.png";
import Css from "./logos/CSS.png";
import Sele from "./logos/selenium.png";
import Robot from "./logos/Robot-framework.png";
import Ux from "./logos/ux-design.png";
import Figma from "./logos/figma.png";
import Git from "./logos/Git-Black.png";
import GitHub from "./logos/GitHub.png";
import R_react from "./logos/react.png";
import B_boost from "./logos/Bootstrap.png";
import K_kivy from "./logos/Kivy.png";
import Sql from "./logos/mysql.png";
import Miro from "./logos/miro.png";
import Jira from "./logos/jira.png";
import DevOps from "./logos/devops.png";
import Scrum from "./logos/scrum.png";
import m365 from "./logos/m365.png";
import DS from "./logos/ds.png";



export default function Logos() {
  /* Animation Container */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  /* First Animation Variable */
  const variantsLeft = {
    hidden: { x: '-100vw' },
    visible: { x: 0, transition: { duration: 1.5, delay: 0.6 } }
  };
  /* Second Animation Variable */
  const variantsRight = {
    hidden: { x: '100vw', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.5, delay: 1 } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        variants={variantsLeft}
      >
        <div>
          <Row>
            <Col className="text-center">
              <h5 className="smallTitle">Cyber Security:</h5>
              <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">Kali Linux</Tooltip>}>
                <img src={Kali} alt="Kali Linux" className='logo' />
              </OverlayTrigger>
              <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">Ethical Hacker</Tooltip>}>
                <img src={Hacker} alt="Ethical Hacker" className='logo' />
              </OverlayTrigger>
              <p className='smallText'>Kali Linux / Ethical Hacker</p>
            </Col>
            <Col className="text-center">
              <h5 className="smallTitle">Developing:</h5>
              <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">Python</Tooltip>}>
                <img src={Pyth} alt="Python" className='logo' />
              </OverlayTrigger>
              <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">JavaScript</Tooltip>}>
                <img src={JavaS} alt="Javascript" className='logo' />
              </OverlayTrigger>
              <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">C</Tooltip>}>
                <img src={Thec} alt="The C" className='logo' />
              </OverlayTrigger>
              <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">C++</Tooltip>}>
                <img src={CplusPlus} alt="C ++" className='logo' />
              </OverlayTrigger>
              <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">HTML5</Tooltip>}>
                <img src={Html} alt="HTML5" className='logo' />
              </OverlayTrigger>
              <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">CSS</Tooltip>}>
                <img src={Css} alt="CSS" className='logo' />
              </OverlayTrigger>
              <p>Python, Javascript, C, C++, HTML5, CSS</p>
            </Col>
          </Row>
          <hr className='mobile_hr'/>
          <Row>
            <Col className="text-center">

              <h5 className="smallTitle">UX Design:</h5>
              <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">UX-Design Process</Tooltip>}>
                <img src={Ux} alt="UX Design Process: Empathize, Define,
 and Ideate" className='logo' />
              </OverlayTrigger>
              <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">Design Sprint</Tooltip>}>
                <img src={DS} alt="Design Sprint" className='logo' />
              </OverlayTrigger>
              <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">Figma</Tooltip>}>
                <img src={Figma} alt="Figma" className='logo' />
              </OverlayTrigger>
              <p>UX Design Process, Design Sprint, Figma</p>
            </Col>
            <Col className="text-center">
              <h5 className="smallTitle">Automaatio/ Ohjelmistotestaus</h5>
              <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">Selenium</Tooltip>}>
                <img src={Sele} alt="Selenium" className='logo' />
              </OverlayTrigger>
              <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">Robot Framework</Tooltip>}>
                <img src={Robot} alt="Robot Framework" className='logo' />
              </OverlayTrigger>
              <p>Selenium, Robot Framework</p>
            </Col>
          </Row>
        </div>
      </motion.div>
      <motion.div
        variants={variantsRight}
      >
        <div>
          <Row>
            <hr className='mobile_hr'/>
            <Col className="text-center">
              <h5 className="smallTitle">Muut taidot:</h5>
              <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">Git</Tooltip>}>
                <img src={Git} alt="Git" className='logo' />
              </OverlayTrigger>
              <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">GitHub</Tooltip>}>
                <img src={GitHub} alt="GitHub" className='logo' />
              </OverlayTrigger>
              <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">React</Tooltip>}>
                <img src={R_react} alt="Rect" className='logo' />
              </OverlayTrigger>
              <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">Bootstrap</Tooltip>}>
                <img src={B_boost} alt="Bootstrap" className='logo' />
              </OverlayTrigger>
              <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">Kivy</Tooltip>}>
                <img src={K_kivy} alt="Kivy" className='logo' />
              </OverlayTrigger>
              <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">MySQL</Tooltip>}>
                <img src={Sql} alt="MySQL" className='logo' />
              </OverlayTrigger>
              <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">Miro</Tooltip>}>
                <img src={Miro} alt="Miro" className='logo' />
              </OverlayTrigger>
              <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">Jira</Tooltip>}>
                <img src={Jira} alt="Jira" className='logo' />
              </OverlayTrigger>
              <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">DevOps</Tooltip>}>
                <img src={DevOps} alt="DevOps" className='logo' />
              </OverlayTrigger>
              <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">Scrum</Tooltip>}>
                <img src={Scrum} alt="Scrum" className='logo' />
              </OverlayTrigger>
              <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip">m365</Tooltip>}>
                <img src={m365} alt="Microsoft 365" className='logo' />
              </OverlayTrigger>
              <p>Git/GitHub, React, Bootstrap, Kivy, MySQL, Miro/Jira, DevOps, Scrum, m365
              </p>
            </Col>
          </Row>
        </div>
      </motion.div>
    </motion.div>
  );
}