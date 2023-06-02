import React from 'react'
import "./portfolio.css"
import img1 from "../../assets/newsapp.png"
import img2 from "../../assets/food-delivery.png"
import img3 from "../../assets/ecommerce.png"
import img4 from "../../assets/uchat.jpg"


const data=[
    {
        id:1,
        image: img1,
        title: 'NewsHunt',
        viewcode: 'https://github.com/Poojakpph/NewsApp'
    },
    {
        id:2,
        image: img2,
        title: 'Alph Village',
        viewcode: 'https://github.com/Poojakpph/Food-delivery-website'
    },
    {
        id:3,
        image: img3,
        title: 'Mallary-The label',
        viewcode: 'https://github.com/Poojakpph/eCommerce-Site'
    },
    {
        id:4,
        image: img4,
        title: 'Uchat App',
        viewcode: 'https://github.com/Poojakpph/Chat-Application'
    },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Personal projects</span>

      <div className="container portfolio__container">{
        data.map(({id, image, title, viewcode})=>{
           return(
              <article className="portfolio__item" key={id}>
                    <div className="portfolio__item-img"> <img src={image} alt={title} /> </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                    <a href={viewcode} className='btn' target='_blank'>View Source Code</a>
                    </div>
              </article> 
            )
         })
       }
    
      </div>
    </section>
  )
}

export default Portfolio
