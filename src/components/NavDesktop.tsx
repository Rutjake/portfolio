'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { routes } from '../routes';
import cls from './NavDesktop.module.scss';

export default function NavDesktop() {
  return (
    <div className={cls.navContainer}>
      <div className={cls.navColTitle}>
        <h3 className={cls.navTitle}>JARNO</h3>
      </div>
      <div className={cls.navColList}>
        <div className={cls.desktopNavList}>
          {routes.map((route, index) => {
            const { Icon, path, title } = route;
            return (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: '200%' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <Link href={path} className={cls.desktopLinks}>
                  <FontAwesomeIcon icon={Icon} className={cls.desktopIcon} />
                  {title}
                </Link>
              </motion.li>
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
}
