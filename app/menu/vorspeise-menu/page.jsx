import Image from "next/image";
// import menu1 from "../../../public/images/Vorspeise1.jpg";
import kaschkbademjun from "../../../public/images/foods/Kaschk bademjan.jpg";
import dolme from "../../../public/images/foods/Dolme.jpg";
import homus from "../../../public/images/foods/Humus.jpg";
import olowiye from "../../../public/images/foods/Olowiye.jpg";
import zeytunparvarde from "../../../public/images/foods/Zeytunparvarde.jpg";
import mastokhiar from "../../../public/images/foods/mastokhiar.jpg";
import mastomusir from "../../../public/images/foods/mastomusir.jpg";
import kukusabzi from "../../../public/images/foods/kukusapzi.jpg";
import buranibademjan from "../../../public/images/foods/buranibademjan.jpg";
import buraniesfenaj from "../../../public/images/foods/boraniesfenaj.jpg";

export const VorspeiseMenu = () => {
  return (
    <section className="section">
        <h1 className="head">Vorspeise Menu</h1>
        <div className="container">
          <div className="div">
            <Image alt="Kaschke Bademjan" className="image" src={kaschkbademjun} />
            <div className="div2">
              <h2 className="h2"> Kaschke Bademjan <br /><span className="span">Aubergine, Rostzwibeln, Minz, Spezielsauce</span></h2>  
              <h2 className="price">8.00 CHF</h2>
            </div>
          </div>
          <div className="div">
            <Image alt="Dolme" className="image" src={dolme} />
            <div className="div2">
              <h2 className="h2">Dolme <br /><span className="span">Trabenblätter, Reis, Kräuter</span></h2>  
              <h2 className="price">8.00 CHF</h2>
            </div>
          </div>
          <div className="div">
            <Image alt="Homus" className="image" src={homus} />
            <div className="div2">
              <h2 className="h2">Homus <br /><span className="span">Kichererbsen, Knoblauch, Oliven Öl, Zitronensaft</span></h2>  
              <h2 className="price">8.00 CHF</h2>
            </div>
          </div>
          <div className="div">
            <Image alt="Olowiye" className="image" src={olowiye} />
            <div className="div2">
              <h2 className="h2">Olowiye <br /><span className="span">Hänchenbuerst, Kartofeln, Grünerbsen, Karotte, Gewürzgurken, Ei, Mayonnaise</span></h2>  
              <h2 className="price">8.00 CHF</h2>
            </div>
          </div>
          <div className="div">
            <Image alt="Zeytun Parwarde" className="image" src={zeytunparvarde} />
            <div className="div2">

              <h2 className="h2"> Zeytun Parwarde <br /><span className="span">Oliven, Knoblauch, Oliven Öl, gemahlene Walnüsse, Granatapfelsause, Getroknete Kräuter,  Saurer Granatapfel</span></h2>  
              <h2 className="price">8.00 CHF</h2>
            </div>
          </div>
          <div className="div">
            <Image alt="Mast o Khiyar" className="image" src={mastokhiar} />
            <div className="div2">
              <h2 className="h2">Mast o Khiyar <br /><span className="span">Jogurt, Gurken, Walnuss, Minz</span></h2>  
              <h2 className="price">6.00 CHF</h2>
            </div>
          </div>
          <div className="div">
            <Image alt="Mast o Musir" className="image" src={mastomusir} />
            <div className="div2">
              <h2 className="h2">Mast o Musir <br /><span className="span">Jogurt, Schalotten</span></h2>  
              <h2 className="price">5.00 CHF</h2>
            </div>
          </div>
          <div className="div">
            <Image alt="Kuku Sabzi" className="image" src={kukusabzi} />
            <div className="div2">
              <h2 className="h2">Kuku Sabzi <br /><span className="span">Petersilie, Koriander, Schnittlauch, Ei</span></h2>  
              <h2 className="price">8.00 CHF</h2>
            </div>
          </div>
          <div className="div">
            <Image alt="Burani Bademjan" className="image" src={buranibademjan} />
            <div className="div2">
              <h2 className="h2">Burani Bademjan <br /><span className="span">Gegrillte, Aubergine, Knoblauch, Jogurt</span></h2>  
              <h2 className="price">5.00 CHF</h2>
            </div>
          </div>
          <div className="div">
            <Image alt="Burani Esfenaj" className="image" src={buraniesfenaj} />
            <div className="div2">
              <h2 className="h2">Burani Esfenaj <br /><span className="span">Spinat, Knoblauch, Jogurt</span></h2>  
              <h2 className="price">5.00 CHF</h2>
            </div>
          </div>
        </div>
    </section>
  )
}

export default VorspeiseMenu;
