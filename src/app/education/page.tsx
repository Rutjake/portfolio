'use client';

import { motion } from 'framer-motion';
import Sertis from '@/components/Sertificates/sertificates';
import Logos from '@/components/Logos/logos';

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
                        Liiketalouden ammattikorkeakoulututkinto, tietojenkäsittely. IT-Tradenomi. Valmistunut Laurea 2024.
                    </li>
                    <li>
                        Opinnäytetyö: Digitaalisen palvelun käyttäjäpolun kehittäminen. Design Sprint.
                    </li>
                </ul>
                <hr className='mobile_hr' />
                <h4 className='subTitle'>Sertifikaatit</h4>
                <Sertis />
                <h4 className='subTitle'>Taidot:</h4>
                <Logos />
            </div>
        </motion.div>
    );
}
