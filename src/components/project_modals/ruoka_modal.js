import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modals.css';

// Ruoka Images
import summary from './ruokaImages/SummaryEdited.jpg';
import persona_mia from './ruokaImages/User_Mia_Persona.jpg';
import persona_eeva from './ruokaImages/User_Eeva_Persona.jpg';
import persona_tarja from './ruokaImages/User_Tarja_Persona.jpg';
import crazy_eight from './ruokaImages/crazyeight.jpg';

export default function RuokaModal(props) {
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
                    Ruokaostosten hintavertailusivusto
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5 className='modal_subTitle'>
                    Projektin tausta
                </h5>
                <p className='modal_p'>
                    Tämä idea syntyi sen jälkeen, kun havaitsimme, ettei tällaista palvelua ole ruokaostoksille.
                    Sivusto toimii työkaluna ruokaostosten hintavertailuun eri kauppojen ja ketjujen välillä.
                    Tutkimuksen kohteena oli sivuston hyödyllisyys käyttäjälle sekä sivusto-ominaisuudet.
                    Tulokset auttavat toteuttamaan palvelun, jonka käyttäjät kokevat hyödylliseksi.
                    Henkilökohtaisesti olen kiinnostunut työkalusta, jolla olisi helppo vertailla pääosin ruokatuotteiden hintoja.
                </p>

                <p className='modal_p'>
                    Ruokaostokset kattavat suuren osan perheellisen kuukausittaisesta budjetista.
                    Tämän takia tutkimuksen kohteena olivat palvelun loppukäyttäjät, jotka ovat perheellisiä ja miettivät perheen ruokatarpeita pidemmäksi ajaksi kerrallaan.
                    Tutkimukseen otettiin mukaan myös perhe, jossa lapset ovat jo aikuisia, tämän tarkoitus oli kartoittaa tuotteen hyödyllisyyttä myös pienemmille talouksille.
                </p>
                <h5 className='modal_subTitle'>
                    Käyttäjätutkimus
                </h5>
                <p className='modal_p'>
                    Haastatteluun valittiin perheellisiä henkilöitä, jotka käyttävät kaupan palveluja viikoittain. Osallistujat ovat perheellisiä, jotka ostavat verrattain suuria määriä ruokaa kuukausittain.
                    Haastatteluun otettiin mukaan myös vanhemman ikäryhmän jäseniä, joilla ei enää ole taloudessa lapsia. Tämän tarkoitus on kartoittaa myös heidän tarpeensa ruokahinta vertailulle.
                    Käyttäjiä haastateltiin selvittääksemme, millaisia ongelmia ja haasteita palveluun liittyy ja varmistaaksemme, että tämän kaltaisesta palvelusta olisi hyötyä ruokakauppojen asiakkaille.
                    Haastattelut toteutettiin käyttäjien kodeissa, jotta se olisi haastateltavalle vaivatonta, eikä näin ollen haastateltavan tarvinnut siirtyä kodistaan muualle.
                </p>
                <img src={summary} alt="Yhteenveto" className='project_images' />
                <p className='modal_p'>
                    Haastattelujen jälkeen haastattelut litteroitiin ja analysoitiin temaattisesti.
                    Koska haastattelut nauhoitettiin matkapuhelimella, ne oli helppo litteroida,
                    kuunnella uudelleen tietokoneella ja analysoida sekä kerätä mahdollisten käyttäjien mainitsemia yhtäläisyyksiä.
                </p>
                <h5 className='modal_subTitle'>
                    Kuka, mitä ja miksi:
                </h5>
                <p className='modal_p'>
                    Mahdolliset käyttäjät, heidän ongelmansa ja käyttäjätarinat.
                    Käyttäjiä kuvaillaan käyttäjäpersoonalla, jossa on eritelty tavoitteet, turhautumiset ja ongelmat.
                    Myös käyttäjätarinat ovat listattuna alapuolella.
                </p>
                <h5 className='modal_subTitle'>
                    Potentiaalinen käyttäjä 1: Mia
                </h5>

                <img src={persona_mia} alt="Potentiaalinen käyttäjä Mia" className='project_images' />

                <h5 className='modal_subTitle'>
                    Mian käyttäjätarinat:
                </h5>
                <ol type='1'>
                    <li>
                        Neljän lapsen äitinä haluan löytää ruoan hinnat yhdestä paikasta, jotta minun ei tarvitse käyttää aikaa hintojen etsimiseen.
                    </li>
                    <li>
                        Isohkon perheen äitinä haluan löytää edullisimmat hinnat, jotta voin tehdä ostokset mahdollisimman taloudellisesti.
                    </li>
                    <li>
                        Isojen ruokaostosten suunnittelijana haluan tietää ostosteni kokonaishinnan, jotta voin valita kaupan sen perusteella ja saada bonukset yhdestä ketjusta.
                    </li>
                    <li>
                        Hintatietoisena haluan löytää myös ketjujen omien tuotteiden hinnat, jotta voin vertailla myös niitä.
                    </li>
                    <li>
                        Puhelimen tehokäyttäjänä haluan myös käyttää tietokoneen selainta, jotta voin välttyä puhelimeni muistin täyttymiseltä.
                    </li>
                    <li>
                        Käyttäjänä haluan listata kaupat, joissa käyn, jotta voin päättää kuinka kaukana olevat kaupat näkyvät.
                    </li>
                    <li>
                        Käyttäjänä haluan selata tuotteita kategorian mukaan, jotta palvelua ja tuotteita ei tarvitsisi selata loputtomiin.
                    </li>
                    <li>
                        Käyttäjänä haluan tietoa eduista ja tarjouksista, jotta tiedän mitä on tarjolla, milloinkin.
                    </li>
                    <li>
                        Kaupan asiakkaana haluan tietoa tuotteista, jotta en maksa huonolaatuisista tuotteista.
                    </li>
                </ol>
                <h5 className='modal_subTitle'>
                    Potentiaalinen käyttäjä 2: Eeva
                </h5>
                <img src={persona_eeva} alt="Potentiaalinen käyttäjä Eeva" className='project_images' />
                <h5 className='modal_subTitle'>
                    Eevan käyttäjätarinat:
                </h5>
                <ol type='1'>
                    <li>
                        Kaupan asiakkaana haluan löytää hinnat ja tuotteet yhdestä paikasta, jotta minun ei tarvitse etsiä niitä.
                    </li>
                    <li>
                        Kaupan asiakkaana haluan tietää hinnat etukäteen, jotta voisin arvioida, paljonko kauppaan kuluu rahaa.
                    </li>
                    <li>
                        Kaupan asiakkaana haluan vertailla yhden tuotteen hintoja, jotta löytäisin edullisimman vaihtoehdon.
                    </li>
                    <li>
                        Käyttäjänä haluan tietoa tarjouksista, jotta voin suunnitella kaupassa käynnin niiden perusteella.
                    </li>
                    <li>
                        Käyttäjänä haluan tietoa hinnoista myös pienten ostosten osalta, jotta voisin valita edullisimman kaupan.
                    </li>
                    <li>
                        Käyttäjänä haluan palvelun puhelin appina, jotta minun ei tarvitse käynnistää tietokonetta sen takia.
                    </li>
                    <li>
                        Käyttäjänä haluan palveluun ostoslistan, jotta minun ei tarvitse aina kirjoittaa käsin tuotteita.
                    </li>
                </ol>

                <h5 className='modal_subTitle'>
                    Potentiaalinen käyttäjä 3: Tarja
                </h5>
                <img src={persona_tarja} alt="Potentiaalinen käyttäjä Tarja" className='project_images' />
                <h5 className='modal_subTitle'>
                    Tarjan käyttäjätarinat:
                </h5>
                <ol type='1'>
                    <li>
                        Kahden lapsen äitinä haluan tietoa hinnoista ennen, kun menen kauppaan, jotta minun ei tarvitse miettiä kaupassa onko jokin tuote toisaalla edullisempi.
                    </li>
                    <li>
                        Kahden lapsen äitinä haluan vertailla hintoja etukäteen, jotta kaupassa käynti olisi tehokkaampaa.
                    </li>
                    <li>
                        Kaupan asiakkaana haluan vertailla hintoja, jotta voin tehdä kauppalistan sen perusteella.
                    </li>
                    <li>
                        Käyttäjänä haluan, että palvelu toimii useammassa alustassa, jotta voin vertailla hintoja sekä puhelimella, että tietokoneen selaimella.
                    </li>
                    <li>
                        Käyttäjänä haluan ajankohtaista tietoa tarjouksista, jotta pysyn ajan tasalla hyvistä tarjouksista.
                    </li>
                </ol>


                <h5 className='modal_subTitle'>
                    Tutkimuksen yhteenveto
                </h5>
                <p className='modal_p'>
                    Tutkimuksessa havaittiin, että haastateltavat kokevat ruoka hintavertailun hankalaksi sekä aikaa vieväksi.
                    Tällä hetkellä olevat palvelut ovat hajanaisia sekä hankalia ja hitaita käyttää. Haastateltavat kokivat turhauttavaksi sen,
                    että he voivat vertailla ruokaostosten hintaa vasta kaupassa, tai muistelemalla mitä tuote maksoi edellisellä kauppareissulla.
                    Haastateltavista oli myös turhauttavaa se, että hintatietojen etsimiseen ennen kaupassa käyntiä menee paljon aikaa sekä sen, että hintatietoja on vaikea löytää.
                    Isojen ruokaostosten suunnitteleminen taloudellisesta näkökulmasta on haastavaa,
                    koska hintatietoja on vaikea vertailla etukäteen. Haastateltavien mielestä on myös merkittävää, että tuotetarjoukset olisivat ajan tasalla ja helposti löydettävissä.
                    Suuri merkitys haastateltaville on myös, millä alustoilla palvelun tulisi toimia.
                </p>
                <h5 className='modal_subTitle'>
                    Mahdolliset ratkaisut
                </h5>
                <p className='modal_p'>
                    Käyttäjätarinoiden ja -ongelmien määrittelyn jälkeen ratkaisuja pohdittiin kirjoittamalla mahdolliset ratkaisut ja sitten piirtämällä ne.
                    Luonnokset edustavat erilaisia käyttötapauksia, jotka ratkaisevat käyttäjien ongelmia ja myöhemmin nämä käyttötapaukset muodostaisivat pohjan ruokahinta vertailu palvelulle.
                </p>
                <ol type='1'>
                    <li>
                        Käyttäjä tarkistaa tietyn tuotteen hinnan ennen kauppaan lähtöä.
                    </li>
                    <li>
                        Käyttäjä vertailee hintoja, koska suunnittelee ruokaostokset pidemmälle ajalle.
                    </li>
                    <li>
                        Käyttäjä valitsee mieleisen kaupan hintavertailun perusteella.
                    </li>
                    <li>
                        Käyttäjä tarkistaa ajan kohtaiset tarjoukset ennen kauppaan lähtöä, jonka perusteella valitsee kaupan, jossa tekee ruokaostokset.
                    </li>
                    <li>
                        Käyttäjä valitsee kaupan sen tuotteen hinnan perusteella mitä tarvitsee suuren määrän.
                    </li>
                </ol>
                <h5 className='modal_subTitle'>
                    Crazy eight
                </h5>
                <img src={crazy_eight} alt="Crazy Eight" className='project_images' />
                <p className='modal_p'>
                    Crazy eight on nopea luonnosteluharjoitus, joka haastaa suunnittelijan luonnostelemaan kahdeksan erillistä ideaa kahdeksassa minuutissa.
                    Tavoitteena on luoda laaja valikoima ratkaisuja haasteeseen.
                </p>
                <p className='modal_p'>
                    Projekti oli mielenkiintoinen ja sitä tehdessä oppi paljon erilaisten ihmisten suhtautumisesta, odotuksista sekä näkökulmista samaan aiheeseen.
                    Tutkimuksen avulla sain uusia näkökulmia mitä käyttäjät odottavat sovellukselta sekä minkälaisia ominaisuuksia siihen tulisi sisällyttää.
                    Tutkimus auttoi myös havaitsemaan mitkä olisivat sovelluksen tärkeimmät ominaisuudet.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Sulje</Button>
            </Modal.Footer>
        </Modal>
    );
}
