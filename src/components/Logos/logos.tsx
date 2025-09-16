'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import cls from './logos.module.scss';

// Logo Images
import Kali from '@/assets/logos/kali-dragon.png';
import Hacker from '@/assets/logos/ethical-hacker.png';
import Pyth from '@/assets/logos/python-logo.png';
import JavaS from '@/assets/logos/javascript.png';
import Thec from '@/assets/logos/The-C.png';
import CplusPlus from '@/assets/logos/Cplus.png';
import Html from '@/assets/logos/HTML5.png';
import Css from '@/assets/logos/CSS.png';
import Sele from '@/assets/logos/selenium.png';
import Robot from '@/assets/logos/Robot-framework.png';
import Ux from '@/assets/logos/ux-design.png';
import Figma from '@/assets/logos/figma.png';
import Git from '@/assets/logos/Git-Black.png';
import GitHub from '@/assets/logos/GitHub.png';
import R_react from '@/assets/logos/react.png';
import B_boost from '@/assets/logos/Bootstrap.png';
import K_kivy from '@/assets/logos/Kivy.png';
import Sql from '@/assets/logos/mysql.png';
import Miro from '@/assets/logos/miro.png';
import Jira from '@/assets/logos/jira.png';
import DevOps from '@/assets/logos/devops.png';
import Scrum from '@/assets/logos/scrum.png';
import m365 from '@/assets/logos/m365.png';
import DS from '@/assets/logos/ds.png';

const logoData = [
  { category: 'Cyber Security', logos: [{ src: Kali, alt: 'Kali Linux' }, { src: Hacker, alt: 'Ethical Hacker' }] },
  { category: 'Developing', logos: [{ src: Pyth, alt: 'Python' }, { src: JavaS, alt: 'JavaScript' }, { src: Thec, alt: 'C' }, { src: CplusPlus, alt: 'C++' }, { src: Html, alt: 'HTML5' }, { src: Css, alt: 'CSS' }] },
  { category: 'UX Design', logos: [{ src: Ux, alt: 'UX-Design Process' }, { src: DS, alt: 'Design Sprint' }, { src: Figma, alt: 'Figma' }] },
  { category: 'Automaatio/Ohjelmistotestaus', logos: [{ src: Sele, alt: 'Selenium' }, { src: Robot, alt: 'Robot Framework' }] },
  { category: 'Muut taidot', logos: [{ src: Git, alt: 'Git' }, { src: GitHub, alt: 'GitHub' }, { src: R_react, alt: 'React' }, { src: B_boost, alt: 'Bootstrap' }, { src: K_kivy, alt: 'Kivy' }, { src: Sql, alt: 'MySQL' }, { src: Miro, alt: 'Miro' }, { src: Jira, alt: 'Jira' }, { src: DevOps, alt: 'DevOps' }, { src: Scrum, alt: 'Scrum' }, { src: m365, alt: 'Microsoft 365' }] },
];

export default function Logos() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationVariants = {
    hidden: { x: '-100vw', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.5, delay: 0.6 } },
  };

  const [tooltipText, setTooltipText] = useState('');

  const handleMouseEnter = (text: string) => {
    setTooltipText(text);
  };

  const handleMouseLeave = () => {
    setTooltipText('');
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      {logoData.map((section, index) => (
        <motion.div key={section.category} variants={animationVariants} className={cls.logosSection}>
          <div className={cls.logosCol}>
            <h5 className={cls.smallTitle}>{section.category}:</h5>
            <div className={cls.logoRow}>
              {section.logos.map((logo) => (
                <div
                  key={logo.alt}
                  className={cls.logoItem}
                  onMouseEnter={() => handleMouseEnter(logo.alt)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image src={logo.src} alt={logo.alt} className={cls.logo} width={50} height={50} />
                  {tooltipText === logo.alt && <span className={cls.tooltip}>{logo.alt}</span>}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}