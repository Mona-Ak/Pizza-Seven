import Image from "next/image";
import menu from "../../../public/images/pasta.jpg";
import bologenese from "../../../public/images/foods/bolognese.jpg";
import pouletcurry from "../../../public/images/foods/pulecury.jpg";
import pamodore from "../../../public/images/foods/pamodore.jpg";
import pesto from "../../../public/images/foods/pesto.jpg";


export const Passta = () => {
  return (
    <section className="section">
        <h1 className="head">Pasta Menu</h1>
        <div className="container">

          <div className="div">
            <Image alt="Spaghetti Bolognese" src={bologenese} className="image" />
            <div className="div2">
              <h2 className="h2">Spaghetti Bolognese <br /><span className="span">Hackfleisch, Tomatensauce, Parmesan</span></h2>
              <h2 className="price">14.50 CHF</h2>
            </div>
          </div>

          <div className="div">
            <Image alt="Spaghetti Poulet Curry" src={pouletcurry} className="image" />
            <div className="div2">
            <h2 className="h2">Spaghetti Poulet Curry <br /><span className="span">Hähnchenbrust, Zwibbeln, Rahm, Parmesan</span></h2>
            <h2 className="price">14.50 CHF</h2>
            </div>
          </div>

          <div className="div">
            <Image alt="Spaghetti Pomodoro" src={pamodore} className="image" />
            <div className="div2">
            <h2 className="h2">Spaghetti Pomodoro <br /><span className="span">Pomodoro, Sauce, Parmesan</span></h2>
            <h2 className="price">14.50 CHF</h2>
            </div>
          </div>

          <div className="div">
            <Image alt="Spaghetti Pesto" src={pesto} className="image" />
            <div className="div2">
              <h2 className="h2">Spaghetti Pesto <br /><span className="span">Pestosauce</span></h2>
              <h2 className="price">14.50 CHF</h2>
            </div>
          </div>
        </div>
    </section>
  )
}


export default Passta;
