import React from 'react';
import '../App.css';

import Cards from '../components/projectCards';

export default function Projects() {
    return (
        <div className='mainText'>
            <h3 className='subTitle'>Projektit</h3>
            <Cards />
        </div>
    );
}
