import React from 'react'

const About_sec = () => {
  return (
    <section id='about' className="about_me_sec">
    <hr className='hr_small' /> <h3 className='header_sec_txt'>ABOUT ME</h3> <hr className='hr_long' />

    <div className="about_container">
      <div className='about_ch1'>
        <p>Hello, i’m Yasir!
          <br />
          <br />
          I’m a self-taught Full-stack developer based in Jigjiga, Ethiopia. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
          <br />
          <br />
          Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>

          <button>Read More &rarr; </button>
      </div>
      <div className='about_ch2'>
        <div className="about_img">
        </div>
      </div>
    </div>

  </section>
  )
}

export default About_sec