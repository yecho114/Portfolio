import React from 'react'

// images
import img_project1 from '../img/project1.png'



const Project_sec = () => {
  return (
    <section id='projects' className="project_sec">
      <hr className='hr_small' /> <h3 className='header_sec_txt'>Latest PROJECTS</h3> <hr className='hr_long' />


      <button>View All &rarr;</button>
      <div className='cards_container_prj'>
        <div className="card_prj">
          <img src={img_project1} alt="" />
          <h5>Quiz App</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis animi, error quos consectetur molestiae?</p>
        </div>
        <div className="card_prj">
          <img src={img_project1} alt="" />
          <h5>Quiz App</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis animi, error quos consectetur molestiae?</p>
        </div>
        <div className="card_prj">
          <img src={img_project1} alt="" />
          <h5>Quiz App</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis animi, error quos consectetur molestiae?</p>
        </div>
        <div className="card_prj">
          <img src={img_project1} alt="" />
          <h5>Quiz App</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis animi, error quos consectetur molestiae?</p>
        </div>
        <div className="card_prj">
          <img src={img_project1} alt="" />
          <h5>Quiz App</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis animi, error quos consectetur molestiae?</p>
        </div>
        <div className="card_prj">
          <img src={img_project1} alt="" />
          <h5>Quiz App</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis animi, error quos consectetur molestiae?</p>
        </div>
        <div className="card_prj">
          <img src={img_project1} alt="" />
          <h5>Quiz App</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis animi, error quos consectetur molestiae?</p>
        </div>
        <div className="card_prj">
          <img src={img_project1} alt="" />
          <h5>Quiz App</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis animi, error quos consectetur molestiae?</p>
        </div>
      </div>
    </section>
  )
}

export default Project_sec