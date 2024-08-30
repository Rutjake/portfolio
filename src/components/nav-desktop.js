import { routes } from "../routes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./nav-desktop.css";
import { motion } from 'framer-motion';
import { Col } from "react-bootstrap";

export default function NavDesktop() {
    return (


        <Col className="nav-container">
            <Col sm={2}>
                <h3 className="nav_title">JARNO</h3>
            </Col>
            <Col  sm={8}>
                <ul className="hidden desktop_links">

                    {routes.map((route, index) => {
                        const { Icon, href, title } = route;
                        return (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: '200%' }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <a href={href} className="desktop_navList"
                                >
                                    <FontAwesomeIcon icon={Icon} className="desktop_icon" />
                                    {title}
                                </a>
                            </motion.li>
                        );
                    })}
                </ul>
            </Col>
            <Col></Col>
        </Col>
    );
}
