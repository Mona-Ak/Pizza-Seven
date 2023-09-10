import Image from "next/image";
import menu from "../../../public/images/wein.jpg";

export const Wein = () => {
  return (
    <section className="section">
        <h1 className="head" >Wein Menu</h1>
        <div className="container">
          <div className="div2">
            <h2 className="h2">Rot Wein</h2>
            <h2 className="price">5.50</h2>
          </div>
          <div className="div2">
            <h2 className="h2"> Weiss Wein</h2>
            <h2 className="price">5.50</h2>
          </div>
          <div className="div2">
            <h2 className="h2"> Rose Wein</h2>
            <h2 className="price">5.00</h2>
          </div>
        </div>
    </section>
  )
}


export default Wein;
