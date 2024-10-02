import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modals.css';

// Images
import viilee_login from './viileeImages/teamViileeLogin.png';
import viilee_urheilija from './viileeImages/urheilijan_nakyma.png';
import viilee_valmentaja from './viileeImages/valmentajan_nakyma.png';
import viilee_ohjelma from './viileeImages/urheilijan_ohjelma.png';
import viilee_harj_kuvaus from './viileeImages/alert_ikkuna.png';
import uusi_ohj from './viileeImages/uusi_ohjelma.png';
import uusi_kuv from './viileeImages/harjoitus_kuvaus.png';
import figma_naky from './viileeImages/figma_nakyma.png';

export default function Viilee_modal(props) {
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
                    JaggePokka
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className='modal_p'>
                    Idea tähän projektiin tuli, kun halusin harjoitella Pythonia enemmän kuin mitä kouluprojekteissa on tullut tehtyä.
                    Lähdin toteuttamaan projektia ihan nollasta miettimällä, miten peli voisi toimia ja miten se kannattaisi toteuttaa. Mielessä oli, että Pokeri pelistä tulisi tulevaisuudessa fyysinen laite, jossa on näyttö sekä fyysiset painikkeet.
                    Ehkä jopa kosketusnäyttö, tämän vuoksi frameworkiksi valikoitui KivyMd.
                </p>
                <h5 className='modal_subTitle'>
                    Pääruutu
                </h5>
                <img src={viilee_login} alt="Login" className='project_images' />
                <p className='modal_p'>
                    Sovelluksen kirjautuminen on tärkeä ominaisuus, jotta voidaan osoittaa käyttäjälle oikea tietokanta sekä ohjata käyttäjä joko urheilija tai valmentaja näkymään. Myös tunnuksen luominen onnistuu ennen sisäänkirjautumista, jolloin uuden urheilijan on helppo aloittaa sovelluksen käyttö.
                </p>
                <h5 className='modal_subTitle'>
                    Urheilijan näkymä
                </h5>
                <img src={viilee_urheilija} alt="Urheilijan näkymä" className='project_images' />
                <p className='modal_p'>
                    Urheilijan näkymä on hyvin yksinkertainen. Näkymässä pääsee vaihtamaan salasanan (rataskuvake yläkulmassa) sekä tarkastelemaan harjoitusohjelmaa. Halutessaan urheilija voi kirjautua ulos sovelluksesta.
                </p>
                <h5 className='modal_subTitle'>
                    Valmentajan näkymä
                </h5>
                <img src={viilee_valmentaja} alt="Valmentajan näkymä" className='project_images' />
                <p className='modal_p'>
                    Valmentajan näkymä on lähes samanlainen kuin urheilijan, mutta valmentaja tarvitsee muutaman ominaisuuden enemmän.
                    Valmentaja voi luoda urheilijalle joko uuden tai muokata olemassa olevaa harjoitusohjelmaa.
                    Kun valmentaja haluaa tehdä uuden harjoitusohjelman, niin hän valitsee alasvetovalikosta urheilijan jolle kyseinen harjoitusohjelma tehdään.
                    Samoin menetellään myös kun halutaan tarkastella olemassa olevaa ohjelmaa.
                </p>
                <h5 className='modal_subTitle'>
                    Urheilijan harjoitusohjelma
                </h5>
                <img src={viilee_ohjelma} alt="Urheilijan harjoitusohjelma" className='project_images' />
                <p className='modal_p'>
                    Urheilijan harjoitusohjelma tulostuu taulukkona, jolloin se on hyvin selkeä ja helppo tulkita.
                    Urheilija voi lisätä kuvauksen kullekkin päivälle "Tehty" sarakkeeseen, jolloin valmentajan,
                    kuin myös urheilijan on helppo seurata ohjelmaa.
                </p>
                <h5 className='modal_subTitle'>
                    Harjoituksen kuvaus
                </h5>
                <img src={viilee_harj_kuvaus} alt="Harjoituksen kuvaus" className='project_images' />
                <p className='modal_p'>
                    Jos harjoituksen kuvaus ei mahdu kokonaisena taulukko näkymään, voi urheilija klikata sitä,
                    jolloin aukeaa uusi ikkuna josta urheilija näkee harjoituksen kuvauksen kokonaisuudessaan.
                    Myös valmentaja voi avata urheilijan kommentit uuteen ikkunaan.
                </p>
                <h5 className='modal_subTitle'>
                    Uuden harjoitusohjelman luominen
                </h5>
                <img src={uusi_ohj} alt="Harjoitusohjelman luominen" className='project_images' />
                <p className='modal_p'>
                    Valmentaja voi luoda uuden harjoitusohjelman lisäämällä ensin päivämäärät,
                    sen jälkeen klikkaamalla päivämäärää pääsee valmentaja lisäämään harjoituksen kuvauksen taulukkoon.
                </p>
                <img src={uusi_kuv} alt="Harjoitusohjelman luominen" className='project_images' />
                <h5 className='modal_subTitle'>
                    Figman näkymä prototyypistä
                </h5>
                <img src={figma_naky} alt="Harjoitusohjelman luominen" className='project_images' />
                <p className='modal_p'>
                    Projekti oli erittäin mielenkiintoinen ja sitä tehdessä oppi paljon uusia asioita UX-Designistä.
                    Vaikka Figma oli minulle tuttu koulun kursseilta sekä opinäytetyöstäni, oli sen käyttäminen projektin toteutuksessa hauskaa ja samalla siitä oppi paljon uusia ominaisuuksia.
                    Yhteistyökumppani oli tyytyväinen projektin loppu tulokseen, jolloin projektia voidaan pitää onnistuneena.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Sulje</Button>
            </Modal.Footer>
        </Modal>
    );
}
