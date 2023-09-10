import Image from "next/image";
import food from "../public/images/foods/zereshkpolo.jpg";


export const Home = () => {
  return (
        <section className="section">

              <h1 className="head">Tagesmenu</h1>
          
            
            <div className="container">

              <div className="div">
                < Image src={food} className="image" />
                <div className="div2">
                    <h2 className="h2">Zereshk polo</h2> 
                  <div className="price-div">
                    <h2>18.00 CHF</h2> 
                  </div>
                </div>
                <p className="paragraph">Ashreschte ist eine leckere persische Spezialität, die aus Petersilie, Koriander, Lauch, Nudeln, Kichererbsen, roten Bohnen, Linsen, rostigen Zwiebeln, Minze und einer speziellen Soße besteht.</p>
              </div>
              
              

             
            </div>
            
        </section>
    
  )
}

export default Home;
