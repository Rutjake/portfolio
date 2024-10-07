import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modals.css';

// Saa Images
import esitykset from './elokuvatImages/Esitykset.JPG';
import haku from './elokuvatImages/TeatteritHaku.JPG';
import vaarin from './matikImages/Vaarin.JPG';
import kerto from './matikImages/Kerto.JPG';

export default function ElokModal(props) {
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
                    Elokuvat pääkaupunkiseudulla tänään
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className='modal_p'>
                    Projekti oli osa Web-sovellusten kehittäminen JavaScriptillä kurssia.
                    Teimme parityönä verkkosivun, joka hakee tietoa XML- rajapinnasta.
                    Valitsimme Finnkinon toteutukseen, koska ajattelimme,
                    että siitä on hyötyä työkaluna ihmisille, jotka ovat menossa katsomaan elokuvaa hetken mielijohteesta.
                    Sovelluksesta on helppo hakea nykyisestä hetkestä alkaen alkavat näytökset.
                    Projektin toteutimme parikoodauksena.
                </p>

                <h5 className='modal_subTitle'>
                    Näytökset teatteri kohtaisesti listattuna
                </h5>
                <img src={esitykset} alt="Esitykset" className='project_images' />
                <p className='modal_p'>
                    Sovelluksella voi hakea näytökset teatteri kohtaisesti tai käyttämällä hakusanaa.
                    Sovellus lajittelee tiedot joko elokuvan tai teatterin perusteella riippuen haku tavasta.
                </p>
                <h5 className='modal_subTitle'>
                    Näytökset haettuna hakusanalla
                </h5>

                <img src={haku} alt="Esitykset hakusanalla" className='project_images' />
                <p className='modal_p'>
                    Sovellus hakee näytösen esittelykuvan, nimen, ikärajan, elokuvan kuvauksen, näytösajan sekä genren.
                    Elokuvan nimen ja Teatterin nimen kohdalle tulee linkki Finnkinon sivuille, jonka kautta pystyy varaamaan liput näytökseen.
                </p>
                <p className='modal_p'>
                    Projektin aikana sai hyvää kokemusta XML- tiedonkäsittelystä sekä JavaScriptistä.
                    Parikoodaus oli hyvin opettavaista, koska toinen pääsi katselemaan kun toinen koodaa ja vaihtelemaan erilaisia ajatuksia koodaamisesta sekä tiedonkäsittelystä.
                    Vuorotellessa roolejen kanssa, pääsivät molemmat kokeilemaan eri rooleja, joka lisäsi luovuutta. Työtapana parikodaus on tehokasta, koska koodia katsotaan kaksin silmin ja katselija voi saada sellasia ideoita, joita ei välttämättä koodia kirjoittaessa tule.
                    Pääsimme myös tutustumaan toistemme työtapoihin.
                </p>
                <p className='modal_p'>
                    Linkki lähdekoodiin:
                </p>
                <a href="https://github.com/DIYMaintenance/project2" target='_blank' rel="noopener noreferrer" className='modal_link'>Lähdekoodi GitHubissa</a>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Sulje</Button>
            </Modal.Footer>
        </Modal>
    );
}
