import { routes } from "../routes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./nav-desktop.css";
import { motion } from 'framer-motion';
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';


export default function NavDesktop() {
    return (


        <Col className="nav-container">
            <Col sm={2}>
                <h3 className="nav_title">JARNO</h3>
            </Col>
            <Col sm={8}>
                <ul className="hidden desktop_navList">

                    {routes.map((route, index) => {
                        const { Icon, path, title } = route;
                        return (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: '200%' }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Link to={path} className="desktop-links">
                                    <FontAwesomeIcon icon={Icon} className="desktop_icon" />
                                    {title}
                                </Link>
                            </motion.li>
                        );
                    })}
                </ul>
            </Col>
            <Col></Col>
        </Col>
    );
}
