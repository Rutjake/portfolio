import './menu.css';

export default function Menu() {
    return (
        <nav className="Navi">
            <ul>
               
                <li>
                    <ul>
                        <li className="menu_items">
                            <a href="/home">Koti</a>
                            <a href="/education">Koulutus</a>
                            <a href="/experience">Työkokemus</a>
                            <a href="/projects">Projectit</a>
                            <a href="/contact">Ota Yhteyttä</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}
