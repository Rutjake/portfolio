import React from 'react';
import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";
import { routes } from "../routes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./nav-mobile.css";

export default function NavMobile() {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => setOpen(false));

    return (
        <div ref={ref} className="lg:hidden">
            <Hamburger label="Valikko" color="rgb(45, 93, 121)" rounded toggled={isOpen} size={20} toggle={setOpen} />
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20">
                        <ul className="grid gap-2">
                            {routes.map((route, idx) => {
                                const { Icon, href, title } = route;

                                return (
                                    <motion.li
                                        initial={{ opacity: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ 
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                            delay: 0.1 + idx / 10,
                                         }}
                                        key={title}
                                        className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700 mobile_navList"
                                    >
                                        <a
                                            onClick={() => setOpen((prev) => !prev)}
                                            className={
                                                "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                                            }
                                            href={href}
                                        >
                                            <span className="flex gap-1 text-lg">{title}</span>
                                            <FontAwesomeIcon icon={Icon} className='text-xl' />
                                        </a>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
