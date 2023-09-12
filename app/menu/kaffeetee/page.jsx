import Image from "next/image";
import menu from "../../../public/images/kaffee-tee.jpg";
import espresso from "../../../public/images/foods/espresso1.jpg";
import kaffee from "../../../public/images/foods/Kaffee.jpg";
import cappuccino from "../../../public/images/foods/cappuccino.jpg";
import latte from "../../../public/images/foods/lattemacchiato.jpg";
import tee from "../../../public/images/foods/safrantee.jpg";

export const Kaffee = () => {
  return (
    <section className="section">
        <h1 className="head">Kaffe & Tee</h1>
          <div className="container">
            <div className="div">
              <Image alt="Espresso" src={espresso} className="image" />
              <div className="div2">
                <h2 className="h2">Espresso</h2>
                <h2 className="price">3.90 CHF</h2>
              </div>
            </div>

            <div className="div">
              <Image alt="Kaffee" src={kaffee} className="image" />
              <div className="div2">
                <h2 className="h2">Kaffee</h2>
                <h2 className="price">3.90 CHF</h2>
              </div>
            </div>

            <div className="div">
              <Image alt="Cappuccino" src={cappuccino} className="image" />
              <div className="div2">
                <h2 className="h2">Cappuccino</h2>
                <h2 className="price">4.80 CHF</h2>
              </div>
            </div>

            <div className="div">
              <Image alt="Latte" src={latte} className="image" />
              <div className="div2">
                <h2 className="h2">Lattee Macchiato</h2>
                <h2 className="price">4.80 CHF</h2>
              </div>
            </div>

            <div className="div">
              <Image alt="Tee" src={tee} className="image" />
              <div className="div2">
                <h2 className="h2">Diverse Tee</h2>
                <h2 className="price">3.90 CHF</h2>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Kaffee;
