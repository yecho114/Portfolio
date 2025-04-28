import React from 'react'

// images
import img_project1 from '../img/project1.png'
import img_project2 from '../img/project2.jpg'
import img_project3 from '../img/project3.jpg'
import img_project4 from '../img/project4.jpg'
import img_project5 from '../img/project5.png'
import img_project6 from '../img/project6.png'
import img_project7 from '../img/project7.jpg'
import img_project8 from '../img/project8.png'



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
          <img src={img_project2} alt="" />
          <h5>Coffee shop App</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis animi, error quos consectetur molestiae?</p>
        </div>
        <div className="card_prj">
          <img src={img_project3} alt="" />
          <h5>System Management</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis animi, error quos consectetur molestiae?</p>
        </div>
        <div className="card_prj">
          <img src={img_project4} alt="" />
          <h5>Landing Page</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis animi, error quos consectetur molestiae?</p>
        </div>
        <div className="card_prj">
          <img src={img_project5} alt="" />
          <h5>Marketing & Sales</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis animi, error quos consectetur molestiae?</p>
        </div>
        <div className="card_prj">
          <img src={img_project6} alt="" />
          <h5>Construction Management</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis animi, error quos consectetur molestiae?</p>
        </div>
        <div className="card_prj">
          <img src={img_project7} alt="" />
          <h5>Working traking App</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis animi, error quos consectetur molestiae?</p>
        </div>
        <div className="card_prj">
          <img src={img_project8} alt="" />
          <h5>Event Booking System</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis animi, error quos consectetur molestiae?</p>
        </div>
        
      </div>
    </section>
  )
}

export default Project_sec