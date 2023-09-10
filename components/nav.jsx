import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/logo.jpg";
import background from "../public/images/image1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export const Nav = () => {
  return (
    <nav className="nav">
      
      <Image src={background} alt="nav-bg" width={500} className="nav-image"  />      

      <section className="nav-section">
      <Link href="/" className="logo" >
        <Image src= {Logo} width={70} height={70} alt="logo"  /> 
        <h1 className="nav-h1">Pizza-Seven</h1>
      </Link>
      <Link href="/" className="nav-link">
        <h2 >Home</h2>         
      </Link>
      <Link href="/menu" className="nav-link">
        <h2 >Menu</h2>         
      </Link>
      <Link href="/contact" className="nav-link">
        <h2 >Contact</h2>         
      </Link>

      </section>    
    
    </nav>
    
  )
}

export default Nav;
