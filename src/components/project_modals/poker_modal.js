import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modals.css';

// Viilee Images
import viilee_login from './viileeImages/teamViileeLogin.png';
import viilee_urheilija from './viileeImages/urheilijan_nakyma.png';
import viilee_valmentaja from './viileeImages/valmentajan_nakyma.png';
import viilee_ohjelma from './viileeImages/urheilijan_ohjelma.png';
import viilee_harj_kuvaus from './viileeImages/alert_ikkuna.png';
import uusi_ohj from './viileeImages/uusi_ohjelma.png';
import uusi_kuv from './viileeImages/harjoitus_kuvaus.png';
import figma_naky from './viileeImages/figma_nakyma.png';

// Poker Images
import poker_main from './pokerImages/poker_main.jpg';
import poker_valittu from './pokerImages/valittu.jpg';
import poker_tuplaus from './pokerImages/Tuplaus.jpg';
import poker_db_voitit from './pokerImages/TuplausVoitit.jpg';

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
                <img src={poker_main} alt="Pääruutu" className='project_images' />
                <p className='modal_p'>
                    Ensimmäinen haaste oli pakan toteutus sekä se, miten valitaan pakasta näytettävät kortit. Tähän käytin listaa johon luotiin 52 korttia ja Pythonin random -funktio hakee listasta viisi korttia.
                    Listan nimien perusteella haetaan kortteja vastaavat kuvat näytölle.
                    Haetut kortit poistetaan pakasta, koska pakka ”sekoitettaan” ainoastaan pelin alussa. Pelissä on käytetty animaatioita luomaan mielikuva pakan sekoittamisesta sekä korttien jakamisesta.
                </p>
                <h5 className='modal_subTitle'>
                    Valitut kortit
                </h5>
                <img src={poker_valittu} alt="Valitut kortit" className='project_images' />
                <p className='modal_p'>
                    Myös korttien kiinnitys on animoitu, jotta se olisi pelaajalle visuaalisempi kokemus.
                </p>
                <h5 className='modal_subTitle'>
                    Tuplaus
                </h5>
                <img src={poker_tuplaus} alt="Tuplaus" className='project_images' />
                <p className='modal_p'>
                    Tuplaus ominaisuus toimii lähes samalla periaatteella,
                    mutta se hakee vain yhden kortin ja vertailee vain onko kortti pieni vai iso.
                </p>
                <img src={poker_db_voitit} alt="Tuplaus voitto" className='project_images' />
                <p className='modal_p'>
                    Pelilogiikan isoin osa koostuu lukujen pyörittelystä sekä korttien vertailusta,
                    jotta voidaan todeta mahdollinen voitto sekä laskea voitto summa.
                </p>
                <p className='modal_p'>
                    JaggePokka oli projektina todella mielenkiintoinen ja sitä tehdessä oppi paljon koodaamisesta. Pelin toteuttaminen oli hauska projekti sekä sitä tehdessä joutui ratkomaan erinäisiä ongelmia.
                    Vaikka pelin toiminnallisuudet ovatkin valmiit, on projektissa vielä paljon tehtävää.
                </p>
                <h5 className='modal_subTitle'>
                    Mitä tulevaisuudessa? Jatko kehitys
                </h5>
                <ul>
                    <li>
                        Grafiikkojen parantelu
                    </li>
                    <li>
                        Äänet
                    </li>
                    <li>
                        Rahojen tallennus
                    </li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Sulje</Button>
            </Modal.Footer>
        </Modal>
    );
}
