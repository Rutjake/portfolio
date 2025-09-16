'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import cls from './sertificates.module.scss';
import Hacker from '@/assets/logos/ethical-hacker.png';
import Robo from '@/assets/logos/robocorp.png';
import Googl from '@/assets/logos/coursera.png';

export default function Sertis() {
  const variants = {
    hidden: { x: '100vw', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.6 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      <div className={cls.sertificateRow}>
        <div className={cls.sertificateCol}>
          <p>
            <Image src={Hacker} alt="Ethical Hacker" className={cls.logo} width={50} height={50} />
            Cisco verified Ethical Hacker
          </p>
          <p>
            <Image src={Robo} alt="Robocorp Automation Developer" className={cls.logo} width={50} height={50} />
            Robocorp Automation Developer
          </p>
        </div>
        <div className={cls.sertificateCol}>
          <p>
            <Image src={Googl} alt="Google Coursera" className={cls.logo} width={50} height={50} />
            Google Coursera: UX Design Process
          </p>
        </div>
      </div>
      <hr className={cls.mobileHr} />
    </motion.div>
  );
}
