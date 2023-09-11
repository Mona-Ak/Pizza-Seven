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




export const Menu = () => {
  return (
    <section className="menu-section">
      <h1 className="head">Menu</h1>
      
        <div className="menu-container">
        
        <Link href="menu/afghanischemenu" className="menu-link">
          <Image src={menu1} className="menu-image" />
          <h1 className="menu-h1">Afghanische Menu</h1>
        </Link>

        <Link href="menu/burger" className="menu-link">
          <Image src={menu2} className="menu-image" />
          <h1 className="menu-h1">Burger Menu</h1>
        </Link>

        <Link href="menu/dessert" className="menu-link">
          <Image src={menu3} className="menu-image" />
          <h1 className="menu-h1">Dessert Menu</h1>
        </Link>

        <Link href="menu/drinks" className="menu-link">
          <Image src={menu4} className="menu-image" />
          <h1 className="menu-h1">Getränke Menu</h1>
        </Link>

        <Link href="menu/kaffeetee" className="menu-link">
          <Image src={menu5} className="menu-image" />
          <h1 className="menu-h1">Kaffee & Getränke</h1>
        </Link>

        <Link href="menu/pasta" className="menu-link">
          <Image src={menu6} className="menu-image" />
          <h1 className="menu-h1">Pasta Menu</h1>
        </Link>

        <Link href="menu/persischemenu" className="menu-link">
          <Image src={menu7} className="menu-image" />
          <h1 className="menu-h1">Persische Menu</h1>
        </Link>

        <Link href="menu/pizza" className="menu-link">
          <Image src={menu8} className="menu-image" />
          <h1 className="menu-h1">Pizza Menu</h1>
        </Link>

        <Link href="menu/pizzavegi" className="menu-link">
          <Image src={menu9} className="menu-image" />
          <h1 className="menu-h1">Pizza Vegetarisch Menu</h1>
        </Link>

        <Link href="menu/salat" className="menu-link">
          <Image src={menu10} className="menu-image" />
          <h1 className="menu-h1">Salat Menu</h1>
        </Link>

        <Link href="menu/shisha" className="menu-link">
          <Image src={menu11} className="menu-image" />
          <h1 className="menu-h1">Shisha Menu</h1>
        </Link>

        <Link href="menu/vorspeise-menu" className="menu-link">
          <Image src={menu12} className="menu-image" />
          <h1 className="menu-h1">Vorspeise Menu</h1>
        </Link>

        <Link href="menu/wein" className="menu-link">
          <Image src={menu13} className="menu-image" />
          <h1 className="menu-h1">Wein</h1>
        </Link>
      </div>
      


    </section>
  )
}

export default Menu;
