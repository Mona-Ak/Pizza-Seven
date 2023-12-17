import Link from "next/link";
import Image from "next/image";
import menu1 from "../../public/images/afghanischemenu.jpg";
import menu2 from "../../public/images/burgermenu.jpg";
import menu3 from "../../public/images/dessertmenu.jpg";
import menu4 from "../../public/images/drinks.jpg";
import menu5 from "../../public/images/kaffeemenu.jpg";
import menu6 from "../../public/images/pastamenu.jpg";
import menu7 from "../../public/images/persischemenu.jpg";
import menu8 from "../../public/images/pizzamenu.jpg";
import menu9 from "../../public/images/pizzavegimenu.jpg";
import menu10 from "../../public/images/salatmenu.jpg";
import menu11 from "../../public/images/shishamenu.jpg";
import menu12 from "../../public/images/pish-ghaza.jpg";
import menu13 from "../../public/images/weinmenu.jpg";
import halal from "../../public/images/foods/Halal.jpg";




export const Menu = () => {
  return (
    <section className="section">
      <div className="head-menus">
        <h1 >Menu</h1>
        <Image src={halal} width={70} height={50} /> 
      </div>
      
        <div className="menu-container">
        <Link href="menu/vorspeise-menu" className="menu-link">
          <Image alt="Vorspeise Menu" src={menu12} className="menu-image" />
          <h1 className="menu-h1">Vorspeise Menu</h1>
            
        </Link>
        
        <Link href="menu/salat" className="menu-link">
          <Image alt="Salat Menu" src={menu10} className="menu-image" />
          <h1 className="menu-h1">Salat Menu</h1>
        </Link>

        <Link href="menu/persischemenu" className="menu-link">
          <Image alt="Persische Menu" src={menu7} className="menu-image" />
          <h1 className="menu-h1">Persische Menu</h1>
        </Link>

        {/* <Link href="menu/afghanischemenu" className="menu-link">
          <Image alt="Afghanische Menu" src={menu1} className="menu-image" />
          <h1 className="menu-h1">Afghanische Menu</h1>
        </Link> */}

        <Link href="menu/pasta" className="menu-link">
          <Image alt="Pasta Menu" src={menu6} className="menu-image" />
          <h1 className="menu-h1">Pasta Menu</h1>
        </Link>

        <Link href="menu/burger" className="menu-link">
          <Image alt="Burger Menu" src={menu2} className="menu-image" />
          <h1 className="menu-h1">Burger Menu</h1>
        </Link>

        <Link href="menu/pizza" className="menu-link">
          <Image alt="Pizza Menu" src={menu8} className="menu-image" />
          <h1 className="menu-h1">Pizza Menu</h1>
        </Link>

        <Link href="menu/pizzavegi" className="menu-link">
          <Image alt="Pizza Vegetarisch Menu" src={menu9} className="menu-image" />
          <h1 className="menu-h1">Pizza Vegetarisch Menu</h1>
        </Link>

        <Link href="menu/dessert" className="menu-link">
          <Image alt="Dessert Menu" src={menu3} className="menu-image" />
          <h1 className="menu-h1">Dessert Menu</h1>
        </Link>

        <Link href="menu/drinks" className="menu-link">
          <Image alt="Getränke Menu" src={menu4} className="menu-image" />
          <h1 className="menu-h1">Getränke Menu</h1>
        </Link>

        <Link href="menu/wein" className="menu-link">
          <Image alt="Wein" src={menu13} className="menu-image" />
          <h1 className="menu-h1">Wein</h1>
        </Link>

        <Link href="menu/kaffeetee" className="menu-link">
          <Image alt="Kaffee & Getränke" src={menu5} className="menu-image" />
          <h1 className="menu-h1">Kaffee & Tee</h1>
        </Link>

        <Link href="menu/shisha" className="menu-link">
          <Image alt="Shisha Menu" src={menu11} className="menu-image" />
          <h1 className="menu-h1">Shisha Menu</h1>
        </Link>


      </div>
      


    </section>
  )
}

export default Menu;
