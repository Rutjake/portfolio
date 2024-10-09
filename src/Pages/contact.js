import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { motion } from 'framer-motion';

export default function ContactPage() {

    /* Animation Container */
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    /* First Animation Variable */
    const variantsLeft = {
        hidden: { x: '-100vw' },
        visible: { x: 0, transition: { duration: 1.5, delay: 0 } }
    };

    /* Second Animation Variable */
    const variantsRight = {
        hidden: { x: '100vw', opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1.5, delay: 0.6 } }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className='mainText'>
                <motion.div
                    variants={variantsLeft}
                >
                    <h3 className='subTitle'>Ota yhteyttä:</h3>
                </motion.div>
                <motion.div
                    variants={variantsRight}
                >
                    <p>
                        Tällä hetkellä minuun voi olla yhteydessä Linkedinin kautta:
                    </p>
                    <p>
                        <a href="https://linkedin.com/in/jarno-seppanen" target='_blank' rel="noopener noreferrer" style={{color: '#0077B5', fontSize: '1.1rem'}}>Linked<FontAwesomeIcon icon={faLinkedin} /></a>
                        <br />(Linkki aukeaa uuteen välilehteen)
                    </p>
                </motion.div>
            </div >
        </motion.div>
    );
}
