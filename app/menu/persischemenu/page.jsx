import Image from "next/image";
import joojeh from "../../../public/images/foods/joojeh.jpg";
import kubide from "../../../public/images/foods/koobideh.jpg";
import beryani from "../../../public/images/foods/beryaniesfahan.jpg";
import ghaliye from "../../../public/images/foods/ghaliyemahi.jpg";
import ghormesabzi from "../../../public/images/foods/ghormesabzi.jpg";
import fesenjan from "../../../public/images/foods/fesenjan.jpg";
import khoreshtkarafs from "../../../public/images/foods/khoreshtkarafs.jpg";
import aschreschte from "../../../public/images/foods/aschreschte.jpg";
import zereschkpolo from "../../../public/images/foods/zereshkpolo.jpg";
import vaziri from "../../../public/images/foods/vaziri.jpg";
import chenje from "../../../public/images/foods/chenje.jpg";


export const Persisch = () => {
  return (
    <section className="section">
      <h1 className="head">Persische Menu</h1>
      <div className="container">

        <div className="div">
          <Image alt="Djuje Kabab" src={joojeh} className="image" />
          <div className="div2">
            <h2 className="h2">Djuje Kabab <br /><span className="span">Grillte Hänchen Brust in Spezialsause mit Safran, Reis, Grillte Tomate</span></h2>
            <h2 className="price">22.00 CHF</h2>
          </div>
        </div>

        <div className="div">
          <Image alt="Kabab Kubide" src={kubide} className="image" />
          <div className="div2">
            <h2 className="h2">Kabab Kubide <br /><span className="span">Grillte Hackfleisch 2, Reis, Grillte Tomate</span></h2>
            <h2 className="price">28.00 CHF</h2>
          </div>
        </div>

        <div className="div">
          <Image alt="Kabab Kubide" src={vaziri} className="image" />
          <div className="div2">
            <h2 className="h2">Vaziri <br /><span className="span">Grillte Hackfleisch 1, Grillte Hänchen Brust in Spezialsause mit Safran 1, Reis, Grillte Tomate</span></h2>
            <h2 className="price">34.00 CHF</h2>
          </div>
        </div>

        <div className="div">
          <Image alt="Kabab Kubide" src={chenje} className="image" />
          <div className="div2">
            <h2 className="h2">Kabab Chendje <br /><span className="span">Grillte Kalbsfleisch, Reis, Grillte Tomate</span></h2>
            <h2 className="price">25.00 CHF</h2>
          </div>
        </div>

        <div className="div">
          <Image alt="Beryani Esfahan" src={beryani} className="image" />
          <div className="div2">
            <h2 className="h2">Beryani Esfahan</h2>
              <h2 className="price">18.00 CHF</h2>
          </div>
        </div>

        <div className="div">
          <Image alt="Ghaliye Mahi" src={ghaliye} className="image" />
          <div className="div2">
            <h2 className="h2">Ghaliye Mahi <br /><span className="span">Lachsfilet, Koriander, Knoblauch, Bockshornklee, Tamarind, Pfeffer, Reis</span></h2>
            <h2 className="price">20.00 CHF</h2>
          </div>
        </div>

        <div className="div">
          <Image alt="Ghormesabzi" src={ghormesabzi} className="image" />
          <div className="div2">
            <h2 className="h2">Ghormesabzi <br /><span className="span"> Kalbsfleisch, Koriander, Petersilie, Bockshornklee, Schnittlauch, Rote Bohnne, Getrocknete Zitrone, Reis</span></h2>
            <div className="price-div">

              <h2 className="price">20.00 CHF</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image alt="Asch Reschte" src={zereschkpolo} className="image" />
          <div className="div2">
            <h2 className="h2">Zereschk Polo ba Morq <br /><span className="span">Hänchen, Reis mit Safran und Berberitze</span></h2>
            <div className="price-div">
              <h2 className="price">20.00 CHF</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image alt="Fesenjan" src={fesenjan} className="image" />
          <div className="div2">
            <h2 className="h2">Fesenjan <br /><span className="span">Hähnchenbrust, Granatapfelsause, Gemahlene Walnüsse, Reis</span></h2>
            <h2 className="price">20.00 CHF</h2>
          </div>
        </div>

        <div className="div">
          <Image alt="Khoresch karafs" src={khoreshtkarafs} className="image" />
          <div className="div2">
            <h2 className="h2">Khoresch Karafs <br /><span className="span">Lachsfleisch, Kalbsfleisch, Sellerie, Petersilie, Getrocknete Zitrone, Minze, Reis</span></h2>
            <h2 className="price">20.00 CHF</h2>
          </div>
        </div>

        <div className="div">
          <Image alt="Asch Reschte" src={aschreschte} className="image" />
          <div className="div2">
            <h2 className="h2">Asch Reschte <br /><span className="span">Petersilie, Koriander, Lauch, Nudel, Kichererbsen, Rote Bohnen, Linsen, Rostzwibeln, Minz, Spezialsause </span></h2>
            <div className="price-div">
              <h2 className="price">12.00 CHF</h2>
            </div>
          </div>
        </div>

        <div className="div">
          {/* <Image alt="Asch Reschte" className="image" /> */}
          <div className="div2">
            <h2 className="h2">Seven Teller für 2 Personen <br /><span className="span">Djuje 1, Chendje 1, Kubide 2, Reis 2, Grillte Tomate </span></h2>
            <div className="price-div">
              <h2 className="price">65.00 CHF</h2>
            </div>
          </div>
        </div>

        <div className="div">
          {/* <Image alt="Asch Reschte" className="image" /> */}
          <div className="div2">
            <h2 className="h2">Seven Teller für 4 Personen <br /><span className="span">Djuje 2, Chendje 2, Kubide 2, Reis 3, Grillte Tomate </span></h2>
            <div className="price-div">
              <h2 className="price">110.00 CHF</h2>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}


export default Persisch;
