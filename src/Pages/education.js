import React from 'react';
import '../App.css';
import Sertis from '../components/sertificates';
import Logos from '../components/logos';



export default function EduPage() {
    return (

        <div className='mainText'>
            <h3 className='subTitle'>Koulutus</h3>
            <p>
                - Tietojenkäsittelyn IT-Tradenomi. Digitaalisten palveluiden kehittäjä. 2021 alkaen.
                Arvioitu valmistuminen 2025.
            </p>
            <p>
                - Rakennusalan perustutkinto. Talonrakentaja 2009.
            </p>
            <p>
                - Tietokoneasentajan ammattitutkinto 2003.
            </p>
            <h4 className='subTitle'>Sertifikaatit</h4>
            <Sertis />

            <h3 className='subTitle'>Taidot:</h3>

            <Logos />

        </div>
    );
}
