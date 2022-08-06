import React from 'react'
import "./product.css"
import Ecommerce from "../../img/E-commerce.png"
import TodoList from "../../img/TodoList.png"
import KeeperApp from "../../img/KeeperApp.png"
import Portfolio from "../../img/Portfolio.png.png"


const Product = () => {
  return (
    <div className='p-wrapper'>
    <div className='p-title'>
    <h1>My Projects</h1>
    </div>
    <div className='p-projects'>
       <div className='p-images'>
       <div className='p'>
         <div className="p-browser">
           <div className="p-circle"></div>
           <div className="p-circle"></div>
           <div className="p-circle"></div>
         </div>
         <a href="https://e-commerce-tobiloba007.vercel.app/" target="_blank" rel="noreferrer">
         <img src={Ecommerce} alt="" className="p-img" />
         </a>
         </div>
       <div className='p'>
         <div className="p-browser">
           <div className="p-circle"></div>
           <div className="p-circle"></div>
           <div className="p-circle"></div>
         </div>
         <a href="https://csb-7v60ke.netlify.app/" target="_blank" rel="noreferrer">
         <img src={TodoList} alt="" className="p-img" />
         </a>
         </div>
       <div className='p'>
         <div className="p-browser">
           <div className="p-circle"></div>
           <div className="p-circle"></div>
           <div className="p-circle"></div>
         </div>
         <a href="https://portfolio-nine-nu-14.vercel.app/" target="_blank" rel="noreferrer">
         <img src={Portfolio} alt="" className="p-img" />
         </a>
         </div>
       <div className='p'>
         <div className="p-browser">
           <div className="p-circle"></div>
           <div className="p-circle"></div>
           <div className="p-circle"></div>
         </div>
         <a href="https://csb-8rznko.netlify.app/" target="_blank" rel="noreferrer">
         <img src={KeeperApp} alt="" className="p-img" />
         </a>
         </div>
         </div>
         </div>
    </div>
  )
}

export default Product
