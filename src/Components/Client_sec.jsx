import React from 'react'


// fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke, faStarHalf  } from "@fortawesome/free-regular-svg-icons";


// import images from "../img/image";
import clnt1_img from '../img/client1.jpeg'
import clnt2_img from '../img/client2.jpg'
import clnt3_img from '../img/client3.jpg'

const Client = () => {
  return (
    <section id='clients' className="clients">
      <hr />
      <h3>Client Comments</h3>
      <div className="container_client">

        <div className='client_ch1 c_child'>

          <div className='c_child_user'>
            <img src={clnt1_img} alt="" />
            <div>
              <h6>Jack wilson</h6>
              <p>4 month ago</p>
            </div>

          </div>
          <p>Working with yasir was an outstanding experience. They delivered high-quality, responsive, and efficient solutions tailored to our needs. Highly recommended for their professionalism, technical expertise, and excellent communication throughout the project.</p>

          <div className='star_container'>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          </div>
        </div>

        <div className='client_ch2 c_child'>
          <div className='c_child_user'>
            <img src={clnt2_img} alt="" />
            <div>
              <h6>Jack wilson</h6>
              <p>4 month ago</p>
            </div>

          </div>
          <p>Exceptional work! Yasir built our project exactly as envisioned, with clean code and great attention to detail. Highly recommended!</p>
          <div className='star_container'>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfStroke} />
          </div>
        </div>

        <div className='client_ch3 c_child'>

          <div className='c_child_user'>
            <img src={clnt3_img} alt="" />
            <div>
              <h6>Jack wilson</h6>
              <p>4 month ago</p>
            </div>

          </div>
          <p>Very professional and easy to work with. Yasir understood our needs quickly and created a modern, user-friendly solution we love.</p>
          <div className='star_container'>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          </div>
        </div>

        

      </div>
      <div className='client_button'>
      <button>See More</button>
      </div>
    </section>
  )
}

export default Client