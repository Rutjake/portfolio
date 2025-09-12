'use client';
import { motion, Variants } from 'framer-motion';

interface PageVariants {
  containerVariants: Variants;
  variantsLeft: Variants;
  variantsRight: Variants;
}

export default function MainPage() {

    const pageVariants: PageVariants = {
        containerVariants: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
    },
      variantsLeft: {
      hidden: { x: '-100vw' },
      visible: { x: 0, transition: { duration: 1.5, delay: 0 } }
    },
    variantsRight: {
      hidden: { x: '100vw', opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 1.5, delay: 0.6 } }
    }
  };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={pageVariants.containerVariants}
        >
            <div className='mainText'>
                <motion.div
                    variants={pageVariants.variantsLeft}
                >
                    <h3 className='subTitle'>Moikka!</h3>
                </motion.div>
                <motion.div
                    variants={pageVariants.variantsRight}
                >
                    <p>
                        Tervetuloa portfolio sivulleni.
                    </p>
                    <p>
                        Olen Jarno, Ohjelmistokehittäjä sekä eettinen hakkeri.
                    </p>
                    <p>
                        Tein tämän sivun, jotta voin
                        esitellä projekteja joissa olen mukana.
                    </p>
                </motion.div>
            </div >
        </motion.div>
    );
}
