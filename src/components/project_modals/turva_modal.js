import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modals.css';

// Turva Images
import TurvaWeb from './turvaImages/TurvImg.JPG';
import TurvaMob from './turvaImages/TurvMobi.JPG';

export default function TurvaModal(props) {
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
                    Turvallisuus Websivu
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className='modal_p'>
                    Websivun idea tuli Turvallisuuden ja riskienhallinnan oppilaalta joka ehdotti, että tekisin kurssin lopputyönä informaatiosivun urheilutapahtuman turvallisuus suunnitteluun.
                    Sivusta tuli myös osa hänen opinnäytetyötänsä. Sivustoa rupesin hahmottelemaan ennen kuin pidimme palaverin sisällöstä.
                    Palaverissa hahmoteltiin sisältöä sekä esitin ehdotuksia ulkoasulle.
                </p>

                <h5 className='modal_subTitle'>
                    Työpöytäversio
                </h5>
                <img src={TurvaWeb} alt="Websivun työpöytäversio" className='project_images' />
                <p className='modal_p'>
                    Aluksi tein sivusta rautalankamallin ja lähdin toteuttamaan sivua sen pohjalta.
                    Sivun toteutuksessa käytin Bootstrap frameworkiä, joka on tarkoitettu responsiivisille sivuille.
                    Sivua kehittäessä huomioin myös saavutettavuuden.
                </p>
                <p className='modal_p'>
                    Sivun toteutuksessa on käytetty jonkin verran CSS efektejä tuomaan näyttävyyttä, joka olikin minulle uusi asia.
                    Aiempaa websivu kokemusta on minulla vuosilta ennen CSS tyylien yleistymistä.
                    Sivulla on käytetty myös laajasti eri HTML elementtejä.
                    Sivulla on myös hyödynnetty Font Awesome ikoneita.
                </p>
                <h5 className='modal_subTitle'>
                    Mobiiliversio
                </h5>
                <img src={TurvaMob} alt="Mobiiliversio" className='project_images' />
                <p className='modal_p'>
                    Sivua kehittäessä opin paljon uusia asioita saavutettavuudesta, responsiivisuudesta sekä tyylitiedostojen hyödyntämisestä.
                    Suunnittelu oli myös iso osa projektia, jotta sivusta saataisiin miellyttävän näköinen, selkeä sekä helppo käyttöinen niin selaimella kuin mobiililaitteellakin.
                    Projekti oli mielenkiintoinen ja opin sen aikana paljon websivun kehittämisestä.
                </p>
                <p className='modal_p'>
                    Tarkastele sivua:
                </p>
                <a href="https://turvallisuus.github.io/" target='_blank' rel="noopener noreferrer" className='modal_link'>Linkki sivulle turvallisuus.github.io</a>
                <p className='modal_p'>
                    Linkki lähdekoodiin:
                </p>
                <a href="https://github.com/turvallisuus/turvallisuus.github.io" target='_blank' rel="noopener noreferrer" className='modal_link'>Lähdekoodi GitHubissa</a>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Sulje</Button>
            </Modal.Footer>
        </Modal>
    );
}
