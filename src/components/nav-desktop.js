import { routes } from "../routes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./nav-desktop.css";


export default function NavDesktop () {
    return (
        <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
             <h3 className="nav-title">JARNO</h3>
            {routes.map((route, index) => {
                const { Icon, href, title } = route;
                return (
                    <li key={index}>
                        <a href={href} className="flex items-center gap-1 hover:text-neutral-400 transition-all"
                        >
                               <FontAwesomeIcon icon={Icon} className="desktop_icon" />
                            {title}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};
