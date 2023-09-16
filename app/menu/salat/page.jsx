import Image from "next/image";
import menu from "../../../public/images/Salat.jpg";
import gemichtersalat from "../../../public/images/foods/gemischtersalat.jpg";
import grünersalat from "../../../public/images/foods/grünersalat.jpg";
// import avodacobr from "../../../public/images/foods/";
import sladshirazi from "../../../public/images/foods/saladshirazi.jpg";


export const Salat = () => {
  return (
    <section className="section">
        <h1 className="head">Salat</h1>
        
        <div className="container">       
          <div className="div">
            {/* <Image src={gemichtersalat} className="image" /> */}
            <div className="div2">

            <h2 className="h2">Gemischter Salat <br /><span className="span">Nach Wunsch mit Italienischer oder Französischer Sauce</span></h2>
            <div className="price-div">
              <h2 className="price">Klein <br />10.00 CHF</h2>
              <h2 className="price">Gross <br /> 12.00 CHF</h2>
            </div>
            </div>

          </div>
          <div className="div">
            {/* <Image src={grünersalat} className="image" /> */}
            <div className="div2">

            <h2 className="h2">Grünerer Salat <br /><span className="span">Nach Wunsch mit Italienischer oder Französischer Sauce</span></h2>
            <div className="price-div">
              <h2 className="price">Klein <br />8.00 CHF</h2>
              <h2 className="price">Gross <br /> 10.00 CHF</h2>
            </div>
            </div>

          </div>
          <div className="div">
            {/* <Image /> */}
            <div className="div2">

            <h2 className="h2">Avocado Brasil <br /><span className="span">Garnelen oder Hähnchen Brust, Avocado, Paprika, Tomaten, Limettensaft</span></h2>
            <div className="price-div">
              <h2 className="price">Klein <br />14.50 CHF</h2>
              <h2 className="price">Gross <br /> 18.50 CHF</h2>
            </div>
            </div>

          </div>
          <div className="div">
            {/* <Image /> */}
            <div className="div2">

            <h2 className="h2">Fitness Teller <br /><span className="span">Garnelen oder Hänchen Brust, Salat Blätter, Oliven, Zwibeln, Tomaten</span></h2>
            <div className="price-div">
              <h2 className="price">Klein <br />14.50 CHF</h2>
              <h2 className="price">Gross <br /> 18.50 CHF</h2>
            </div>
            </div>

          </div>
          <div className="div">
            {/* <Image src={sladshirazi} className="image" /> */}
            <div className="div2">

            <h2 className="h2">Salat Shirazi <br /><span>Gurken, Tomate, Zwibel, Minz, Pfeffer, Limettensaft</span></h2>
            <div className="price-div">
              <h2 className="price">Klein <br />5.00</h2>
              <h2 className="price">Gross <br /> 8.00</h2>
            </div>
            </div>

          </div>
        </div>
    </section>
  )
}

export default Salat;
