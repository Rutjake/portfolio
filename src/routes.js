import { faHouse, faMortarBoard, faDisplay, faEnvelope } from '@fortawesome/free-solid-svg-icons';



export const routes = [
    {
        title: "ETUSIVU",
        path: "/",
        Icon: faHouse,
    },
    {
        title: "KOULUTUS",
        path: "/education",
        Icon: faMortarBoard,
    },
    {
        title: "PROJEKTIT",
        path: "/projects",
        Icon: faDisplay,
    },
    {
        title: "OTA YHTEYTTÄ",
        href: "#",
        Icon: faEnvelope,
    },
]