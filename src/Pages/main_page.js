import React from 'react';
import '../App.css';

import { motion } from 'framer-motion';

export default function MainPage() {

    const variants = {
        hidden: { x: '-100vw', opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1 } }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
        >
            <div className='mainText'>
                <h3 className='subTitle'>Moikka!</h3>
                <p>
                    Tervetuloa portfolio sivulleni.
                </p>
                <p>
                    Olen kolmannen vuoden tietojenkäsittelyn opiskelija Laurea
                    Ammattikorkeakoulussa IT-Tradenomi koulutuslinjalla.
                </p>
                <p>
                    Tein tämän sivun, jotta voin
                    esitellä koulu- ja harrasteprojektejani.
                </p>
            </div >
        </motion.div>
    );
}
