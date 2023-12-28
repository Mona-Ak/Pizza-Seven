import Image from "next/image";
import Slider from "@components/slider";
import Script from "next/script";
import food from "../public/images/foods/zereshkpolo.jpg";
// import GoogleAdsConversion from './GoogleAdsConversion';
import Head from "next/head";




export const Home = () => {


  return (
        <section className="section">

          <Slider />        
          {/* <GoogleAdsConversion /> */}
          <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11459602182"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11459602182');
            `,
          }}
        />
      </Head>
            
        </section>
    
  )
}

export default Home;
