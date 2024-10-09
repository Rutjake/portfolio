import React from 'react';
import '../App.css';
import Sertis from '../components/sertificates';
import Logos from '../components/logos';

import { motion } from 'framer-motion';

export default function EduPage() {

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
                <h3 className='subTitle'>Koulutus</h3>
                <ul>
                    <li>
                        IT-Tradenomi. Digitaalisten palveluiden kehittäjä. Valmistunut Laurea 2024.
                    </li>
                    <li>
                        Opinnäytetyö: Digitaalisen palvelun käyttäjäpolun kehittäminen. Design Sprint.
                    </li>
                    <li>
                        Rakennusalan perustutkinto. Talonrakentaja.
                    </li>
                    <li>
                        Tietokoneasentajan ammattitutkinto.
                    </li>
                </ul>
                <hr className='mobile_hr' />
                <h4 className='subTitle'>Sertifikaatit</h4>
                <Sertis />
                <h4 className='subTitle'>Taidot:</h4>
                <Logos />

            </div>
        </motion.div >
    );
}
