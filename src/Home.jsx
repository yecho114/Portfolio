import React from 'react';




// components
import Project_sec from './Components/Project_sec'
import Skills_sec from './Components/Skills_sec'
import About_sec from './Components/About_sec'
import Client_sec from './Components/Client_sec'
import Contacts_sec from './Components/Contacts_sec'
import Footer_sec from './Components/Footer_sec'


// Images
import Pimg from './img/myimg.png'




const Home = () => {
  return (
    <>
      <section className='Home_sec'>
        <div className='Home_sec1'>
          <h6>I am</h6>
          <h4>YASIR ABDULAHI</h4>
          <h2>WEB & MOBILE APP <br /> <span>DEVELOPER</span>  </h2>
          <p>"I'm a passionate Web and Mobile App Developer with a strong focus on creating modern, responsive, and user-friendly applications. With a deep understanding of both front-end and back-end technologies, I strive to build solutions that not only look great but also deliver excellent performance.</p>
        </div>
        <div className='Home_sec2'>
          <div></div>
          <img src={Pimg} alt="YASIR PHOTO" />
          <div className="img_circle"></div>
        </div>
      </section>

      <Project_sec />
      <Skills_sec />
      <About_sec />
      <Client_sec />
      <Contacts_sec />
      <Footer_sec />

    </>



  )
}

export default Home