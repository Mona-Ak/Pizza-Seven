import Image from "next/image";
import margharita from "../../../public/images/foods/margartha.jpg";
import aglio from "../../../public/images/foods/aglio.jpg";
import cipola from "../../../public/images/foods/cipolla.jpg";
import diavolo from "../../../public/images/foods/diavolo.jpg";
import funghi from "../../../public/images/foods/funghi.jpg";
import margharitapommes from "../../../public/images/foods/margharitapommes.jpg";
import gorgonzola from "../../../public/images/foods/gorgonzola.jpg";
import quatroformaggi from "../../../public/images/foods/quatroformaggi.jpg";
import mexicana from "../../../public/images/foods/mexicana.jpg";
import fresco from "../../../public/images/foods/fresco.jpg";
import exotica from "../../../public/images/foods/exotica.jpg";


export const PizzaVegi = () => {
  return (
    <section className="section">
      <h1 className="head">Pizza Vegetarisch</h1>
      <div className="container">

        <div className="div">
          <Image className="image" src={margharita} />
          <div className="div2">
            <h2 className="h2">Margherita <br /><span className="span">Tomaten, Mozzarella, Oregano</span></h2>
            <div className="price-div">
              <h2 className="price">34cm <br /> 15.00</h2>
              <h2 className="price">28cm <br /> 12.00</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image className="image" src={aglio} />
          <div className="div2">
            <h2 className="h2">Aglio <br /><span className="span">Tomaten, Mozzarella, Knoblauch, Oregano</span></h2>
            <div className="price-div">
              <h2 className="price">34cm <br /> 16.00</h2>
              <h2 className="price">28cm <br /> 13.00</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image className="image" src={cipola} />
          <div className="div2">
            <h2 className="h2">Cipola <br /><span className="span">Tomaten, Mozzarella, Zwibbeln, Oregano</span></h2>
            <div className="price-div">
              <h2 className="price">34cm <br /> 16.00</h2>
              <h2 className="price">28cm <br /> 13.00</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image className="image" src={diavolo} />
          <div className="div2">
            <h2 className="h2">Diavolo <br /><span className="span">Tomaten, Mozzarella, Knoblauch, Zwibbeln, Scharf, Oregano</span></h2>
            <div className="price-div">
              <h2 className="price">34cm <br /> 17.00</h2>
              <h2 className="price">28cm <br /> 14.00</h2>
            </div>
          </div>
        </div>
        <div className="div">

          <Image className="image" src={funghi} />
          <div className="div2">
            <h2 className="h2">Funghi <br /><span className="span">Tomaten, Mozzarella, Champignon, Oregano</span></h2>
            <div className="price-div">
              <h2 className="price">34cm <br /> 17.00</h2>
              <h2 className="price">28cm <br /> 14.00</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image className="image" src={margharitapommes} />
          <div className="div2">
            <h2 className="h2">Margherita Pommes <br /><span className="span">Tomaten, Mozzarella, Knoblauch, Pommes Frites, Oregano</span></h2>
            <div className="price-div">
              <h2 className="price">34cm <br /> 20.00</h2>
              <h2 className="price">28cm <br /> 17.00</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image className="image" src={gorgonzola} />
          <div className="div2">
            <h2 className="h2">Gorgonzola <br /><span className="span">Tomaten, Mozzarella, Gorgonzola, Oregano</span></h2>
            <div className="price-div">
              <h2 className="price">34cm <br /> 19.00</h2>
              <h2 className="price">28cm <br /> 16.00</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image className="image" src={quatroformaggi} />
          <div className="div2">
            <h2 className="h2">Quatro Formaggi <br /><span className="span">Tomaten, Mozzarella, Parmesan, Gruyere, Gorgonzola, Oregano</span></h2>
            <div className="price-div">
              <h2 className="price">34cm <br /> 20.00</h2>
              <h2 className="price">28cm <br /> 17.00</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image className="image" src={exotica} />
          <div className="div2">
            <h2 className="h2">Exotica <br /><span className="span">Tomaten, Mozzarella, Frische Tomaten, Knoblauch, Zwibeln, Pesto, Oregano</span></h2>
            <div className="price-div">
              <h2 className="price">34cm <br /> 20.00</h2>
              <h2 className="price">28cm <br /> 17.00</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image className="image" src={mexicana} />
          <div className="div2">
            <h2 className="h2">Mexicana <br /><span className="span">Tomaten, Mozzarella, Maise, Scharfe Peperoni, Oregano</span></h2>
            <div className="price-div">
              <h2 className="price">34cm <br /> 20.00</h2>
              <h2 className="price">28cm <br /> 17.00</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image className="image" src={fresco} />
          <div className="div2">
            <h2 className="h2">Fresco <br /><span className="span">Tomaten, Mozzarella, Mascarpone, Spinat, Knoblauch, frische Tomaten, Oregano</span></h2>
            <div className="price-div">
              <h2 className="price">34cm <br /> 20.00</h2>
              <h2 className="price">28cm <br /> 17.00</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default PizzaVegi;
