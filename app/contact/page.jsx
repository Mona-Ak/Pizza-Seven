import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone, faGlobe, faClock, faStar } from '@fortawesome/free-solid-svg-icons';


export const Contact = () => {
  return (
    <section>
      <section>
        
      </section>

      <div className="contact-container">
        

        <div className='öffnungszeiten'>

          <h1 className='contact-h1'>Öffnungszeiten</h1>
            <div className='öffnung-div'>

              <div className='time'>
                <FontAwesomeIcon icon={faClock} className='contact-icon' />
                <h2 className='contact-h2'>Montag </h2>
                <h2 className='contact-time'>11:00 - 22:00</h2>
              </div>
              <div className='time'>
                <FontAwesomeIcon icon={faClock} className='contact-icon' />
                <h2 className='contact-h2'>Dienstag </h2>
                <h2 className='contact-time'>17:00 - 22:00</h2>
              </div>
              <div className='time'>
                <FontAwesomeIcon icon={faClock} className='contact-icon' />
                <h2 className='contact-h2'>Mittwoch </h2>
                <h2 className='contact-time'>11:00 - 22:00</h2>
              </div>
              <div className='time'>
                <FontAwesomeIcon icon={faClock} className='contact-icon' />
                <h2 className='contact-h2'>Donnerstag </h2>
                <h2 className='contact-time'>17:00 - 22:00</h2>
              </div>

              <div className='time'>
                <FontAwesomeIcon icon={faClock} className='contact-icon' />
                <h2 className='contact-h2'>Freitag </h2>
                <h2 className='contact-time'>11:00 - 02:00</h2>
              </div>

              <div className='time'>
                <FontAwesomeIcon icon={faClock} className='contact-icon' />
                <h2 className='contact-h2'>Samstag </h2>
                <h2 className='contact-time'>11:00 - 02:00</h2>
              </div>

              <div className='time'>
                <FontAwesomeIcon icon={faClock} className='contact-icon' />
                <h2 className='contact-h2'>Sonntag</h2>
                <h2 className='contact-time'> 11:00 - 21:00</h2>
              </div>

              <div className='time'>
                <FontAwesomeIcon icon={faStar} className='contact-icon'/>
                <h2>Bemerkung</h2>
              </div>
              <p className='öffnung-p'>Bitte reservieren Sie mindestens einen Tag vor der Reservierung</p>
            </div>
          </div>

        <div className='address-info' >
            <h1 className='contact-h1'>Contact info</h1>    
          <div className='contact-div'>
            <FontAwesomeIcon icon={faLocationDot} className='contact-icon' />
            <h2 className='contact-h2'>Diessenhoferstrasse 59, 8245 Feuerthalen</h2>
          </div>

          <div className='contact-div'>
            <FontAwesomeIcon icon={faPhone} className='contact-icon' />
            <h2 className='contact-h2'>052 659 39 34</h2>
          </div>

          <div className='contact-div'>
            <FontAwesomeIcon icon={faGlobe} className='contact-icon' />
            <h2 className='contact-h2'>www.pizza-seven.ch</h2>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Contact;
