import React from 'react';
import { Link } from 'react-router-dom';


// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";


const Contacts = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <section id='contacts' className="contact_sec">
      <h3 className='header_sec_txt'>CONTACTS</h3> <hr className='hr_long' />

      <div className="container_contact">
        <div className="contact_child contact_ch1">

          <div>
            <Link to={"#"} target='blank'>
            <FontAwesomeIcon className='sm_icon' icon={faTelegram} size='2x' style={{ color: "#24A1DE" }} />
            <p>@YASIR0114</p>
            </Link>
           
          </div>

          <div>
            <Link to={"#"} target='blank'>
            <FontAwesomeIcon className='sm_icon' icon={faLinkedin} size='2x' style={{ color: "#0a66c2" }} />
            <p>@yechoyasir</p>
            </Link>
            
          </div>

          <div>
            <Link to={'https://web.facebook.com/profile.php?id=61565863978239'} target='blank'>
              <FontAwesomeIcon className='sm_icon' icon={faFacebook} size='2x' style={{ color: "#4267B2" }} />
              <p>YEA DEV & GD</p>
            </Link>
          </div>
        </div>

        <div className="contact_child contact_ch2">
          <form action="#" onSubmit={handleSubmit}>

            <h3>Leave Comment</h3>
            <input type="text" name='user name' placeholder='Enter your name' />

            <input type="text" name='user email' placeholder='Enter your email' />

            <input type="text" name='subject' placeholder='Enter your Subject' />

            <textarea name="message" rows={15} placeholder='Message' id=""></textarea>

            <button>Send Message</button>
          </form>
        </div>
      </div>


    </section>
  )
}

export default Contacts