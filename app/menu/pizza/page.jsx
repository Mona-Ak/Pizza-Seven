import Image from "next/image";
import prosciotto from "../../../public/images/foods/pizzaprosciutto.jpg";
import occhi from "../../../public/images/foods/ochidibue.jpg";
import slamia from "../../../public/images/foods/pizzasalami.jpg";
import prosfungi from "../../../public/images/foods/prosciuttoefungi.jpg";
// import mescolare from "../../../public/images/foods/";
// import hawaii from "../../../public/images/foods/";
import minatore from "../../../public/images/foods/minatore.jpg";
import hawaii from "../../../public/images/foods/pizzahawaii.jpg";
import mascolare from "../../../public/images/foods/Mascolare.jpg";
import calabrese from "../../../public/images/foods/calabrese.jpg";



export const Pizza = () => {
  return (
    <section className="section">
      
      <h1 className="head">Pizza Menu</h1>
      <div className="container">
        
        <div className="div">
          <Image alt="Prosciutto" className="image" />
          <div className="div2">
            <h2 className="h2">Prosciutto <br /> <span className="span">Tomaten, Mozzarella, Schinken, Oregano</span></h2>
            <div className="price-div">
              <h2 className="price">32cm: <br /> 18.00 CHF</h2>
              <h2 className="price">28cm: <br /> 15.00 CHF</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image alt="Occhi di Bue" className="image" />
          <div className="div2">
            <h2 className="h2">Occhi di Bue <br /> <span className="span">Tomaten, Mozzarella, Schinken, Eier, Oregano</span></h2>
            <div className="price-div">
              <h2 className="price">32cm: <br />21.00 CHF</h2>
              <h2 className="price">28cm: <br />18.00 CHF</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image alt="Salamia" className="image" />
          <div className="div2">
            <h2 className="h2">Salamia <br /> <span className="span">Tomaten, Mozzarella, Salami, Oregano</span></h2>
            <div className="price-div">
              <h2 className="price">32cm: <br />21.00 CHF</h2>
              <h2 className="price">28cm: <br />18.00 CHF</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image alt="Prosciutto e Fungi" className="image" />
          <div className="div2">
            <h2 className="h2">Prosciutto e Fungi <br /> <span className="span">Tomaten, Mozzarella, Schinken, Champignons, Oregano</span></h2>
            <div className="price-div">
              <h2 className="price">32cm: <br />20.00 CHF</h2>
              <h2 className="price">28cm: <br />17.00 CHF</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image alt="Mescolare" className="image" />
          <div className="div2">
            <h2 className="h2">Mescolare <br /> <span className="span">Tomaten, Mozzarella, Schinken, Mascarpone, Spargeln</span></h2>
            <div className="price-div">
              <h2 className="price">32cm: <br />21.00 CHF</h2>
              <h2 className="price">28cm: <br />18.00 CHF</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image alt="Calabrese" className="image" />
          <div className="div2">
            <h2 className="h2">Calabrese <br /> <span className="span">Tomaten, Mozzarella, Scharfe Salami, Oregano</span></h2>
            <div className="price-div">
              <h2 className="price">32cm: <br />18.00 CHF</h2>
              <h2 className="price">28cm: <br />15.00 CHF</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image alt="Appetitosa" className="image" />
          <div className="div2">
            <h2 className="h2">Appetitosa <br /> <span className="span">Tomaten, Mozzarella, Salami, Gorgonzola</span></h2>
            <div className="price-div">
              <h2 className="price">32cm: <br />20.00 CHF</h2>
              <h2 className="price">28cm: <br />17.00 CHF</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image alt="Minatore" className="image" />
          <div className="div2">
            <h2 className="h2">Minatore <br /> <span className="span">Tomaten, Mozzarella, Milde Salami, Zwiebeln, Oliven, Oregano</span></h2>
            <div className="price-div">
              <h2 className="price">32cm: <br />20.00 CHF</h2>
              <h2 className="price">28cm: <br />17.00 CHF</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image alt="Hawaii" className="image" />
          <div className="div2">
            <h2 className="h2">Hawaii <br /> <span className="span">Tomaten, Mozzarella, Schinken, Ananas, Oregano</span></h2>
            <div className="price-div">
              <h2 className="price">32cm: <br />19.00 CHF</h2>
              <h2 className="price">28cm: <br />16.00 CHF</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image alt="Quattro Stagioni" className="image" />
          <div className="div2">
            <h2 className="h2">Quattro Stagioni <br /> <span className="span">Tomaten, Mozzarella, Schinken, Pilze, Artischocken, Peperoni, Oliven, Oregano</span></h2>
            <div className="price-div">
              <h2 className="price">32cm: <br />21.00 CHF</h2>
              <h2 className="price">28cm: <br />18.00 CHF</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image alt="Capriciosa" className="image" />
          <div className="div2">
            <h2 className="h2">Capriciosa <br /> <span className="span">Tomaten, Mozzarella, Schinken, Pilze, Artischocken, Oregano</span></h2>
            <div className="price-div">
              <h2 className="price">32cm: <br />21.00 CHF</h2>
              <h2 className="price">28cm: <br />18.00 CHF</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image alt="Romagnola" className="image" />
          <div className="div2">
            <h2 className="h2">Romagnola <br /> <span className="span">Tomaten, Mozzarella, Schinken, Speck, Pilze, Oliven, Oregano</span></h2>
            <div className="price-div">
              <h2 className="price">32cm: <br />21.00 CHF</h2>
              <h2 className="price">28cm: <br />18.00 CHF</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image alt="Nostrano" className="image" />
          <div className="div2">
            <h2 className="h2">Nostrano <br /> <span className="span">Tomaten, Mozzarella, Schinken, Spinat, Gorgonzola, Oregano</span></h2>
            <div className="price-div">
              <h2 className="price">32cm: <br />21.00 CHF</h2>
              <h2 className="price">28cm: <br />18.00 CHF</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image alt="Parma" className="image" />
          <div className="div2">
            <h2 className="h2">Parma <br /> <span className="span">Tomaten, Mozzarella, Rohschinken, Parmesan, Oliven, Oregano</span></h2>
            <div className="price-div">
              <h2 className="price">32cm: <br />21.00 CHF</h2>
              <h2 className="price">28cm: <br />18.00 CHF</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image alt="Olivia" className="image" />
          <div className="div2">
            <h2 className="h2">Olivia <br /> <span className="span">Tomaten, Mozzarella, Speck, Gorgonzola, Zwibbeln, Oliven, Oregano</span></h2>
            <div className="price-div">
              <h2 className="price">32cm: <br />21.00 CHF</h2>
              <h2 className="price">28cm: <br />18.00 CHF</h2>
            </div>
          </div>
        </div>

        <div className="div">
          <Image alt="Kebap " className="image" />
          <div className="div2">
            <h2 className="h2">Kebap <br /> <span className="span">Tomaten, Mozzarella, Kebapfleisch, Cocktailsauce </span></h2>
            <div className="price-div">
              <h2 className="price">32cm: <br />20.00 CHF</h2>
              <h2 className="price">28cm: <br />17.00 CHF</h2>
            </div>
          </div>
        </div>
      </div>
          

    </section>
  )
}


export default Pizza;
