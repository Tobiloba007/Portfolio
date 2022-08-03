import React from 'react'
import "./intro.css"
import Image from "../../img/Image.png"
import Whatsapp from "../../img/whatsapp.png.png"
import Github from "../../img/github.png"
import Linkedin from "../../img/linkedin.png"
import Twitter from "../../img/twitter.png"


const Intro = () => {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, I am </h2>
                <h1 className='i-name'>Michael</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Ethusiastic Developer💡</div>
                        <div className="i-title-item">Frontend Developer💻</div>
                        <div className="i-title-item">React JS Dev🌐</div>
                    </div>
                </div>
                <p className="i-desc">
                 I Design and Develop Fully Responsive Websites and
                 Web Application with a Beatiful Web Layout Designs.  
             </p>
             <div className="i-icons">
             <a href="https://api.whatsapp.com/send/?phone=%2B2349090529118&text&type=phone_number&app_absent=0" type='button'><div className='i-icon-item'>
             <img src={Whatsapp} alt="" style={{height: "50px", width: "50px"}}/></div></a>
         <a href='https://github.com/Tobiloba007?tab=repositories' type='button'> <div className='i-icon-item'><img src={Github} alt="" style={{height: "50px", width: "50px"}} /></div></a>
         <a href="https://www.linkedin.com/in/michael-olaniyan-bb1359200/" type='button'> <div className='i-icon-item'><img src={Linkedin} alt="" style={{height: "50px", width: "50px"}} /></div></a>
         <a href='https://twitter.com/Olaniyanmicha15' type='button'> <div className='i-icon-item'><img src={Twitter} alt="" style={{height: "50px", width: "50px"}}  /></div></a>
             </div>
           </div>
        </div>
        <div className="i-right">
        <div className="i-bg"></div>
            <img src={Image} alt="" className='i-img' />
        </div>
    </div>
  )
}

export default Intro