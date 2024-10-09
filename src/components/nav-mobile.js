import React from 'react';
import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";
import { routes } from "../routes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./nav-mobile.css";
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavMobile() {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => setOpen(false));

    return (
        <Row>
            <Col ref={ref}>
                <Col className='burger_div'>
                    <h3 className="mobile_title">JARNO</h3>
                    <Hamburger label="Valikko" color="rgb(45, 93, 121)" rounded toggled={isOpen} size={20} toggle={setOpen} />
                </Col>
                <hr className='menu_underline'/>
                <Col className='nav_content'>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="mobile_link_div">
                                <ul className="">
                                    {routes.map((route, idx) => {
                                        const { Icon, path, title } = route;

                                        return (
                                            <motion.li
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 250,
                                                    damping: 20,
                                                    delay: 0.1 + idx / 10,
                                                }}
                                                key={title}
                                                className="mobile_navList"
                                            >
                                                <Link to={path} onClick={() => setOpen((prev) => !prev)} className="mobile_link">

                                                    <span className="">{title}</span>

                                                    <FontAwesomeIcon icon={Icon} className='mobile_icon' />
                                                </Link>
                                            </motion.li>
                                        );
                                    })}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Col>
            </Col>
        </Row>
    );
};
