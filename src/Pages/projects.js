import React from 'react';
import '../App.css';

import Cards from '../components/projectCards';

export default function Projects() {
    return (
        <div className='mainText'>
            <h3 className='subTitle'>Projektit</h3>
            <p>Lisää projekteja löydät <a href="https://github.com/rutjake" target="_blank">Githubista.</a></p>
            <p>Tällä sivulla kerrotaan myös muista kuin julkisista projekteista.</p>

            <Cards />
        </div>
    );
}
