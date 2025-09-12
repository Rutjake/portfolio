'use client';

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useClickAway } from "react-use";
import cls from './NavDesktop.module.scss';

import { routes } from "../routes";

export default function NavMobile() {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => setOpen(false));

    return (
        <div className={cls.navContent} ref={ref}>
            <div className={cls.burgerDiv}>
                <h3 className={cls.mobileTitle}>JARNO</h3>
                <Hamburger 
                    label="Valikko" 
                    color="rgb(45, 93, 121)" 
                    rounded 
                    toggled={isOpen} 
                    size={20} 
                    toggle={setOpen} 
                />
            </div>
            <div className={cls.navContent}>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className={cls.mobileLinkDiv}>
                            <ul className="">
                                {routes.map((route, idx) => {
                                    const { Icon, path, title } = route;

                                    return (
                                        <motion.li
                                            key={idx}
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 250,
                                                damping: 20,
                                                delay: 0.1 + idx / 10,
                                            }}
                                            className={cls.mobileNavList}
                                        >
                                            <Link href={path} onClick={() => setOpen((prev) => !prev)} className={cls.mobileLink}>
                                                <span className="">{title}</span>
                                                <FontAwesomeIcon icon={Icon} />
                                            </Link>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};