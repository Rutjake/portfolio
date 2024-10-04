import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modals.css';

// Saa Images
import mobiili_etusivu from './saaImages/saaEtusivu.JPG';
import saa_hel from './saaImages/saaHel.JPG';
import saa_desktop from './saaImages/saaHel_Desktop.JPG';
import saa_rov from './saaImages/saaRov.JPG';

export default function SaaModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            scrollable={true}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className='modal_title'>
                    Sää Nyt
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className='modal_p'>
                    React.js fundamentals -kurssin suoritettuani jatkoin Reactin opiskelua itsenäisesti
                    ja päätin toteuttaa pienen sovelluksen.
                    Tarkoitus oli harjoitella React.js:ää sekä tiedon hakua API rajapinnasta.
                    Rajapinnaksi valikoitui OpenWeather, koska se on yleisesti käytetty ja juolahti mieleeni esimmäisenä. OpenWeather tarjoaa tietoa JSON ja XML muodossa. Tässä soveluksessa käytetään JSON muotoista dataa.
                    Aiemmissa koulun Javascript projekteissa olen käyttänyt myös XML muotoa tiedon hakuun.
                </p>
                <h5 className='modal_subTitle'>
                    Mobiiliversion etusivu
                </h5>
                <img src={mobiili_etusivu} alt="Mobiiliversion etusivu" className='project_images' />
                <h5 className='modal_subTitle'>
                    Säätiedot mobiili näkymässä
                </h5>
                <img src={saa_hel} alt="Säätiedot mobiili näkymässä" className='project_images' />
                <p className='modal_p'>
                    Sovellukseen haettavat säätiedot valikoituivat sen perusteella, mitkä minusta ovat mielenkiintoisia ja relevantteja.
                    Sovellus kertoo haetun kaupungin tai kunnan nimen ja päivämäärän ennen haettuja säätietoja.
                    Haettavat säätiedot ovat keli, lämpötila, myös miltä lämpötila tuntuu, kosteus prosentti ja tuulen nopeus.
                </p>
                <h5 className='modal_subTitle'>
                    Säätiedot web näkymässä
                </h5>
                <img src={saa_desktop} alt="Säätiedot web näkymässä" className='project_images' />
                <p className='modal_p'>
                    Webversio sovelluksesta on lähes samanlainen kuin mobiiliversio.
                </p>
                <h5 className='modal_subTitle'>
                    Taustakuva viileällä ilmalla
                </h5>
                <img src={saa_rov} alt="Taustakuva viileällä ilmalla" className='project_images' />
                <p className='modal_p'>
                    Sovelluksessa on dynaaminen taustakuva, joka vaihtuu kun sää on lämpimämpi kuin 12 astetta.
                    Muuten sovellus käyttää taustakuvaa, joka havainnoillistaa kylmää ilmaa.
                </p>
                <p className='modal_p'>
                    Projekti oli hyvää harjoitusta sekä taidon ylläpitoa.
                    Vaikka sovellus on yksinkertainen, se oli mielenkiintoinen toteuttaa.
                    Varsinaisen React sovelluksen kirjoittamisen lisäksi tutustuin syvemmin OpenWeatherin toimintaan sekä dokumentaatioon.
                </p>
                <p className='modal_p'>
                    Sovellusta voit kokeilla täällä:
                </p>
                <a href="https://rutjake.github.io/weather_app_build/" target='_blank' rel="noopener noreferrer" className='modal_link'>Sää Nyt</a>
                <p className='modal_p'>
                    Linkki lähdekoodiin:
                </p>
                <a href="https://github.com/Rutjake/weather_app" target='_blank' rel="noopener noreferrer" className='modal_link'>Lähdekoodi GitHubissa</a>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Sulje</Button>
            </Modal.Footer>
        </Modal>
    );
}
