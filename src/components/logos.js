import React from 'react';
import "./logos.css";
import { Row, Col } from 'react-bootstrap';

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
import m365 from "./logos/m365.png"




export default function Logos() {
  const variants = {
    hidden: { x: '-100vw', opacity: 0},
    visible: {x: 0, opacity: 1, transition: { duration: 1.5, delay: 0.6 }}
  };

  return (
    <motion.div
    initial="hidden"
    animate="visible"
    variants={variants}
    >
    <div>
      <Row>
        <Col className="text-center">
          <h4 className="smallTitle">Cyber Security:</h4>
          <img src={Kali} alt="Kali Linux" className='logo' />
          <img src={Hacker} alt="Ethical Hacker" className='logo' />
          <p className='smallText'>Kali Linux / Ethical Hacker</p>
        </Col>
        <Col className="text-center">
          <h4 className="smallTitle">Developing:</h4>
          <img src={Pyth} alt="Python" className='logo' />
          <img src={JavaS} alt="Javascript" className='logo' />
          <img src={Thec} alt="The C" className='logo' />
          <img src={CplusPlus} alt="C ++" className='logo' />
          <img src={Html} alt="HTML5" className='logo' />
          <img src={Css} alt="CSS" className='logo' />
          <p>Python, Javascript, C, C++, HTML5, CSS</p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h4 className="smallTitle">Automaatio/ Ohjelmistotestaus</h4>
          <img src={Sele} alt="Selenium" className='logo' />
          <img src={Robot} alt="Robot Framework" className='logo' />
          <p>Selenium, RPA, Robot Framework</p>
        </Col>
        <Col className="text-center">
          <h4 className="smallTitle">UX Design:</h4>
          <img src={Ux} alt="UX Design Process: Empathize, Define,
 and Ideate" className='logo' />
          <img src={Figma} alt="Figma" className='logo' />
          <p>UX Design Process, Figma</p>
          
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <h4 className="smallTitle">Muut taidot:</h4>
          <img src={Git} alt="Git" className='logo' />
          <img src={GitHub} alt="GitHub" className='logo' />
          <img src={R_react} alt="Rect" className='logo' />
          <img src={B_boost} alt="Bootstrap" className='logo' />
          <img src={K_kivy} alt="Kivy" className='logo' />
          <img src={Sql} alt="MySQL" className='logo' />
          <img src={Miro} alt="Miro" className='logo' />
          <img src={Jira} alt="Jira" className='logo' />
          <img src={DevOps} alt="DevOps" className='logo' />
          <img src={Scrum} alt="Scrum" className='logo' />
          <img src={m365} alt="Microsoft 365" className='logo' />
          <p>Git/GitHub, React, Bootstrap, Kivy, MySQL, Miro/Jira, DevOps, Scrum, m365
          </p>
        </Col>
      </Row>
    </div>
    </motion.div>
  );
}