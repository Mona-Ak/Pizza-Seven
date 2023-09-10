import Image from "next/image";
import menu from "../../../public/images/dessert.jpg";
import tiramisu from "../../../public/images/foods/tiramisu.jpg";
import glace from "../../../public/images/foods/bastanisade.jpg";
import safranbastani from "../../../public/images/foods/safranbastani.jpg";
import kuchen from "../../../public/images/foods/cakekhanegi.jpg";
import falude from "../../../public/images/foods/faludeshirazi.jpg";

export const Dessert = () => {
  return (
    <section className="section">
      <h1 className="head">Dessert</h1>
      <div className="container">

        <div className="div">
          <Image src={tiramisu} className="image"/>
          <div className="div2">
            <h2 className="h2">Tiramisu</h2>
            <h2 className="price" >8.00 CHF</h2>
          </div>
        </div>

        <div className="div">
          <Image src={glace} className="image"/>
          <div className="div2">
            <h2 className="h2">Glace</h2>
            <h2 className="price">8.00 CHF</h2>
          </div>
        </div>
        <div className="div">
          <Image src={safranbastani} className="image"/>
          <div className="div2">
            <h2 className="h2">Safran Glace</h2>
            <h2 className="price">10.00 CHF</h2>
          </div>
        </div>
        <div className="div">
          <Image src={kuchen} className="image"/>
          <div className="div2">
            <h2 className="h2">Kuchen</h2>
            <h2 className="price">5.00 CHF</h2>
          </div>
        </div>
        <div className="div">
          <Image src={falude} className="image"/>
          <div className="div2">
            <h2 className="h2">Falude</h2>
            <h2 className="price">8.00 CHF</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dessert

