import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modals.css';

// Turva Images
import Groover from '../project_images/groover/GrooverGui.JPG';

export default function GrooverModal(props) {
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
                    Groover
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className='modal_p'>
                    Grooverin idea syntyi, kun mietin miten voisin nopeuttaa midi rumpujen editointia sekä miten voisin kontrolloida sitä samalla.
                    Samankaltaisia työkaluja on olemassa, mutta en ole ollut tyytyväinen niiden ominaisuuksiin.
                </p>

                <p className='modal_p'>
                    Groover on skripti, jota ajetaan Reaper DAWissa. Yksinkertaisuudessaan Midi editorista valitaan halutut nuotit ja ajetaan skripti.
                </p>
                <h5 className='modal_subTitle'>
                    Käyttöliittymä
                </h5>
                <img src={Groover} alt="Mobiiliversio" className='project_images' />
                <p className='modal_p'>
                    Vaikka skriptiä voi muokata suoraan LUA tiedostosta, niin tein graafisen käyttöliittymän helpottaakseni asetusten määrittelyä.
                </p>
                <p className='modal_p'>
                    Merkittävimmät erot muihin työkaluihin on "Swing" sekä "kätisyys". 
                    Swing luo groovimaista vaihtelua toisin kuin "Timing Variation", joka vain varioi nuotteja sattumanvaraisiin sijainteihin.
                </p>
                <p className='modal_p'>
                    Kätisyys simuloi rumpalin kätisyyttä, esimerkiksi rumpu filleissä. Kätisyyden lisäksi voidaan säätää käsien voimaakkuus eroa.
                </p>
                <p className='modal_p'>
                    Projekti sisältää myös JSON muodossa "Presettejä", joita voidaan käyttää esiasetuksina tai sellaisenaan käyttöliittymän kautta.
                    Jos käyttöliittymästä tallentaa asetukset, tallentuvat ne skriptin lisäksi erilliseen JSON tiedostoon.
                </p>
                <p className='modal_p'>
                    Lisätietoa löytyy GitHubista:
                </p>
                <p className='modal_p'>
                    Build:
                </p>
                <a href="https://github.com/Rutjake/groover/tree/main/dist" target='_blank' rel="noopener noreferrer" className='modal_link'>Skripti sekä GUI</a>
                <p className='modal_p'>
                    Linkki lähdekoodiin:
                </p>
                <a href="https://github.com/Rutjake/groover" target='_blank' rel="noopener noreferrer" className='modal_link'>Lähdekoodi GitHubissa</a>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Sulje</Button>
            </Modal.Footer>
        </Modal>
    );
}
