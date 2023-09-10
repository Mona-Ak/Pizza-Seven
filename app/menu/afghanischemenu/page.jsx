import Image from "next/image";
import menu from "../../../public/images/Afghanisch-Menue.jpg";
import mantu from "../../../public/images/foods/mento.jpg";
import ghaboli from "../../../public/images/foods/khabolipolo.jpg";
import kebab from "../../../public/images/foods/kababteke.jpg";
import bolani from "../../../public/images/foods/bulani.jpg";
import afganischebolani from "../../../public/images/foods/afghanischeboranibadenjan.jpg";
import afghanischesambosa from "../../../public/images/foods/afghanischesambosa.jpg";
import koftachallaw from "../../../public/images/foods/koftachallaw.jpg";



export const Afghanische = () => {
  return (
    <section className="section">
      <h1 className="head">Afghanische Menu</h1>
      <div className="container">

        <div className="div">
        <Image src={ghaboli} className="image"  />
          <div className="div2"  >
            <h2 className="h2">Qabli Polo <br /><span className="span">Kalbfleisch, Tomate, Reis, Rosine, Zwibel, Kreuzkümmel, Karotte</span></h2>
            <h2 className="price">25.00 CHF</h2>
          </div>
        </div>
      
        <div className="div">
          <Image src={mantu} className="image"  />
  
            <div className="div2">
              <h2 className="h2">Mantu <br /><span className="span">Mehl, Hackfleisch, Zwibbel, Kirchererbsen, Tomate, Linsen</span></h2>
              <h2 className="price">22.00 CHF</h2>
          </div>
        </div>
      
        <div className="div">
          <Image src={kebab} className="image"  />
          <div className="div2">
            <h2 className="h2">Kebab <br /><span className="span">Grilltefleisch, Salat, Brot</span></h2>
            <h2 className="price">25.00 CHF</h2>
          </div>
        </div>
      
        <div className="div">
          <Image src={bolani} className="image"  />
          <div className="div2">
          <h2 className="h2">Bolani <br /><span className="span">Teig Gemüse</span></h2>
          <h2 className="price">5.00 CHF</h2>
          </div>
        </div>

        <div className="div">
          <Image src={afganischebolani} className="image"  />
          <div className="div2">
          <h2 className="h2">Bolani <br /><span className="span">Aubergine, Tomaten, Knoblauch, Joghurt Sauce</span></h2>
          <h2 className="price">12.99 CHF</h2>
          </div>
        </div>

        <div className="div">
          <Image src={afghanischesambosa} className="image"  />
          <div className="div2">
          <h2 className="h2">Bolani <br /><span className="span">Teigtaschen, Kartoffeln, Zwiebeln, frischer Koriander</span></h2>
          <h2 className="price">5.00 CHF <br /> 6 Stück</h2>
          </div>
        
        </div>
        <div className="div">
          <Image src={koftachallaw} className="image"  />
          <div className="div2">
          <h2 className="h2">Bolani <br /><span className="span">Fleischbällchen, Reis, Hackfleisch, Zwiebeln, Tomate, Knoblauch</span></h2>
          <h2 className="price">21.95 CHF</h2>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Afghanische