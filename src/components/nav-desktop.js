import { routes } from "../routes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./nav-desktop.css";


export default function NavDesktop () {
    return (
        <ul className="hidden gap-5 text-sm desktop_links">
             <h3 className="nav_title">JARNO</h3>
            {routes.map((route, index) => {
                const { Icon, href, title } = route;
                return (
                    <li key={index}>
                        <a href={href} className="gap-1 desktop_navList"
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
