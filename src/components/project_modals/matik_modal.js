import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modals.css';

// Matikka Images
import matikEtusivu from './matikImages/Etusivu.JPG';
import yhteen from './matikImages/Yhteen.JPG';
import vaarin from './matikImages/Vaarin.JPG';
import kerto from './matikImages/Kerto.JPG';

export default function MatikModal(props) {
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
                    MatikkaPeli
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className='modal_p'>
                    Peli sai alkunsa kouluprojektista, jossa oli yhtenä vaihtoehtona tehdä lasten matikkapeli.
                    Idea kuulosti hyvältä ja aloitin pelin suunnittelun ja rakentamisen.
                    Projektissa peli tehtiin alun perin Tkinter frameworkillä, mutta koska lapseni tykkäsi pelata peliä tietokoneella ja Tkinter toimii vain Windows-järjestelmässä niin ajattelin,
                    että hänen olisi mukavampi pelata peliä omalla puhelimellaan paikasta riippumatta.
                    Tämän takia vaihdoin Frameworkin KivyMd:hen.
                </p>
                <h5 className='modal_subTitle'>
                    Aloitussivu
                </h5>
                <img src={matikEtusivu} alt="Aloitussivu" className='project_images' />
                <p className='modal_p'>
                    Aluksi pelissä oli vain yhteen- ja vähennyslaskut rajoitettuna lapseni opiskelun etenemisestä johtuen.
                    Esimerkiksi maksimiluku oli 20 ja negatiiviset tulokset eivät olleet mukana.
                    Myöhemmin peliin lisättiin myös kertolaskut ja niitä rajoitettiin sen perusteella mitä kertotauluja lapseni sillä hetkellä opiskeli.
                    Pelissä on myös äänet, jotka kuuluvat, kun vastaus on oikein tai väärin. Äänet saa etusivulta päälle tai pois.
                    Myöhemmässä kehityksessä on tarkoitus antaa pelin pelaajalle mahdollisuus valita mieleisensä laskut ja laskualueet.
                </p>
                <p className='modal_p'>
                    Peli on jo tässä kohdassa esittänyt uuden laskutehtävän:
                </p>
                <img src={yhteen} alt="Tulos ja uusi laskutehtävä" className='project_images' />
                <p className='modal_p'>
                    Kun pelissä klikkaa Tarkista -painiketta, tarkastaa peli vastauksen sekä esittää uuden laskutehtävän.
                    Vastauksen ollessa väärin tarkistuskenttä muuttuu punaiseksi ja kertoo oikean vastauksen:
                </p>
                <img src={vaarin} alt="Laskutoimitus meni väärin" className='project_images' />
                <p className='modal_p'>
                    Kertolasku:
                </p>
                <img src={kerto} alt="Kertolasku" className='project_images' />
                <p className='modal_p'>
                    Pelin kehittäminen oli mielenkiintoinen projekti.
                    Ennen varsinaista koodaamista sekä koodatessa piti miettiä pelin logiikkaa ja toiminnallisuuksien toteutusta.
                    Myös pelin frameworkin valinnan takia tuli myös opeteltua Kv -kieltä, jolla rakennetaan graafinen käyttöliittymä Kivy Frameworkissä.
                    Kieli on nopea ja helppo omaksua, jos esimerkiksi HTML on ennestään tuttua näiden kielten samankaltaisuuden vuoksi.
                </p>
                <h5 className='modal_subTitle'>
                    Mitä tulevaisuudessa? Jatko kehitys
                </h5>
                <ul>
                    <li>
                        Pelaaja voi itse valita laskutehtävät sekä valita rajauksen
                    </li>
                    <li>
                        Asetukset valikko
                    </li>
                    <li>
                        Käytettävyyden parantelu
                    </li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Sulje</Button>
            </Modal.Footer>
        </Modal>
    );
}
