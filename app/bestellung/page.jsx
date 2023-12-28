import Script from "next/script";
export const Bestellung = () =>{
    return (
        <section>
             <Script type="text/javascript" src="https://services.gastronovi.com/restaurants/101186/scripts/reservation?width=800&height=600" async/>
        </section>
    )
}

export default Bestellung;