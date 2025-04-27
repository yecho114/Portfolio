import React from 'react'

const Skills_sec = () => {
  return (
    <section id="skills" className="skill_sec">
        <hr className='hr_small' /> <h3 className='header_sec_txt'>SKILLS</h3> <hr className='hr_long' />

        <div className="cards_container_skill">
          <div className="card_skill">
            <h3>DESIGN</h3>
            <h6>UI/UX designer</h6>
            <h6> WEB designer</h6>
            <h6>MOBILE APP designer</h6>
          </div>
          <div className="card_skill">
            <h3>P LANGUAGES</h3>
            <h6>Javascript</h6>
            <h6>Typescript</h6>
            <h6>Python</h6>
          </div>
          <div className="card_skill">
            <h3>FRAMEWORK</h3>
            <h6>react js</h6>
            <h6>Next js</h6>
            <h6>express js</h6>
            
          </div>
        </div>

        <div className='style_skill'>
          <div></div>
          <div></div>
        </div>

      </section>

  )
}

export default Skills_sec