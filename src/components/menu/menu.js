import './menu.css';

export default function Menu() {
    return (
        <nav className="Navi">
            <ul>
                <ul>
                    <ul>
                        <ul className="menu_items">
                            <a href="/home" className='menulink'>Etusivu</a>
                            <a href="/education" className='menulink'>Koulutus</a>
                            <a href="/projects" className='menulink'>Projektit</a>
                            <a href="/contact" className='menulink'>Ota Yhteyttä</a>
                        </ul>
                    </ul>
                </ul>
            </ul>
        </nav>
    );
}
