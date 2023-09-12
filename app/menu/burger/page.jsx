import Image from "next/image";
import menu from "../../../public/images/Burger-co.jpg";
import hamburger from "../../../public/images/foods/hamburger.jpg";
import chickennugget from "../../../public/images/foods/chickennugget.jpg";
import chickenwings from "../../../public/images/foods/chickewings.jpg";
import fischknusperli from "../../../public/images/foods/fischknusperli.jpg";
import falafel from "../../../public/images/foods/falafel.jpg";

export const Burger = () => {
  return (
    <section className="section " >
    <h1 className="head">Burger & Co</h1>

    <div className="container">

      <div className="div">
        <Image alt="Hamuburger" className="image" src={hamburger} />
        <div className="div2">
          <h2 className="h2">Burger Menu <br /><span className="span">2x Burger, 2x Käse, Pommes, 33cl Getränke</span></h2>
          <h2 className="price">20.50 CHF</h2>
        </div>
      </div>

      <div className="div">
        <Image alt="Chicken Nugget" className="image" src={chickennugget} />
        <div className="div2">
          <h2 className="h2">Chicken Nuggets <br /><span className="span">Chicken Nuggets, Pommes, Currysauce/Cocktailsauce</span></h2>
          <h2 className="price">klein <br /> 8.50 CHF</h2>
          <h2 className="price">gross <br />11.50 CHF</h2>
        </div>
      </div>

      <div className="div">
        <Image alt="Chicken Wings" className="image" src={chickenwings} />
        <div className="div2">
          <h2 className="h2">Chicken Wings <br /><span className="span">Chicken Wings, Pommes, Scharf/Süss Sauce</span></h2>
          <h2 className="price">klein <br />10.50 CHF</h2>
          <h2 className="price">gross <br />14.50 CHF</h2>
        </div>
      </div>

      <div className="div">
        <Image alt="Fisch Knusperli" className="image" src={fischknusperli} />
        <div className="div2">
          <h2 className="h2">Fisch Knusperli <br /><span className="span">Fisch Knusperli, Pommes, Tartarsauce</span></h2>
          <h2 className="price">klein <br />12.50 CHF</h2>
          <h2 className="price">gross <br />15.50 CHF</h2>
        </div>
      </div>

      <div className="div">
        <Image alt="Falafel" className="image" src={falafel} />
        <div className="div2">
          <h2 className="h2">Falafel <br /><span className="span">Falafel mit Taschenbrot oder Fladenbrot oder mit Pommes auf Teller</span></h2>
          <h2 className="price">klein <br />8.50 CHF</h2>
          <h2 className="price">gross <br />10.50 CHF</h2>
        </div>
      </div>
       
    </div>
    </section>
  )
}

export default Burger
