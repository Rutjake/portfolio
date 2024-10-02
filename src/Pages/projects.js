import React from 'react';
import '../App.css';

import Cards from '../components/projectCards';

import { motion } from 'framer-motion';

export default function Projects() {

    const variants = {
        hidden: { x: '-100vw', opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1 } }
    };

    return (
        <div className='mainText'>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
            >
                <h3 className='subTitle'>Projektit</h3>
                <p>Lisää projekteja löydät <a href="https://github.com/rutjake" target="_blank">Githubista.</a></p>
                <p>Tällä sivulla kerrotaan myös muista kuin julkisista projekteista.</p>
            </motion.div >
            <Cards />
        </div>

    );
}
