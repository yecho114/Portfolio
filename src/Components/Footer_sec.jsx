import React from 'react'


// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faLinkedin,faFacebook,faInstagram } from "@fortawesome/free-brands-svg-icons";


const Footer_sec = () => {
  return (
    <section className='footer_sec'>
        <hr />
        <div className='container1_footer'> 
            <div>
                <h5> YECHO yechoyasir55@gmail.com</h5>
                <h5>Web designer and full-stack developer</h5>
            </div>
            <div>
                <h4>Media</h4>
                <div>
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faTelegram} />
                <FontAwesomeIcon icon={faInstagram} />
                </div>
            </div>
        </div>

        <div className='container2_footer'>
            <h6>© Copyright 2025. Made by Yasir</h6>
        </div>

    </section>
  )
}

export default Footer_sec