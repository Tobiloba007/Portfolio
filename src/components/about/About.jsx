import React from 'react'
import "./about.css"
import Resume from "../../resume/Michael_Olaniyan_Frontend_Developer.pdf"



const About = () => {
  return (
    <div className='a'>
         <div className="a-left">
            <div className="a-card">
                <img src="https://images.pexels.com/photos/5952738/pexels-photo-5952738.jpeg?auto=compress&cs=tinysrgb&w=600"
                 alt="" className='a-img' />
            </div>
         </div>
         <div className="a-right">
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>
            I am an Ethusiastic developer with proficiencies in
            </p>
            <div className='a-desc-wrapper'>
            <div>
              <ul className='a-desc'>
                <li className='a-item'>REACT JS</li>
                <li className='a-item'>BOOTSTRAP</li>
                <li className='a-item'>MATERIAL UI</li>
                <li className='a-item'>EMAIL JS</li>
                <li className='a-item'>GIT & GITHUB</li>
                <li className='a-item'>HTML</li>
                <li className='a-item'>CSS</li>
              </ul>
            </div> 
            <a href={Resume}><button className='a-button'>Download Resume</button></a>
            </div>
         </div>
    </div>
  )
}

export default About