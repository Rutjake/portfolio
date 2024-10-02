import React from 'react';
import '../App.css';

import { motion } from 'framer-motion';

export default function MainPage() {

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
                    <h3 className='subTitle'>Moikka!</h3>
                </motion.div>
                <motion.div
                    variants={variantsRight}
                >
                    <p>
                        Tervetuloa portfolio sivulleni.
                    </p>
                    <p>
                        Olen Jarno, IT-Tradenomi Laurea
                        Ammattikorkeakoulusta Tietojenkäsittelyn koulutuslinjalta.
                    </p>
                    <p>
                        Tein tämän sivun, jotta voin
                        esitellä koulu- ja harrasteprojektejani.
                    </p>
                </motion.div>
            </div >
        </motion.div>
    );
}
