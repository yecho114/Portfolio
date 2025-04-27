import React from 'react'


// import images from "../img/image";
import clnt_img from '../img/client1.jpeg'

const Client = () => {
  return (
    <section id='clients' className="clients">
      <hr />
      <h3>Client Comments</h3>
      <div className="container_client">

        <div className='client_ch1 c_child'>

          <div className='c_child_user'>
            <img src={clnt_img} alt="" />
            <div>
              <h6>Jack wilson</h6>
              <p>4 month ago</p>
            </div>

          </div>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</p>

          <div className='star_container'>

          </div>
        </div>

        <div className='client_ch2 c_child'>
          <div className='c_child_user'>
            <img src={clnt_img} alt="" />
            <div>
              <h6>Jack wilson</h6>
              <p>4 month ago</p>
            </div>

          </div>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</p>
          <div className='star_container'>

          </div>
        </div>

        <div className='client_ch3 c_child'>

          <div className='c_child_user'>
            <img src={clnt_img} alt="" />
            <div>
              <h6>Jack wilson</h6>
              <p>4 month ago</p>
            </div>

          </div>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</p>
          <div className='star_container'>

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