import React from 'react'
import { Link } from 'react-router-dom'
import "./news.scss"

const NewsInt = () => {
  return (
    <>
<div className='news-hero container'>
  <div className='newss'>
  <div className='news-img'>
    <img className='img' src="/assets/img/newsHero.svg" alt="" />
  </div>
  <div className='news-article'>
    <div className='date'>19.02.2022</div>
    <div className='article-title'>Yük maşınları Donanmanın təkmilləşdirilməsi üçün təchizat zənciri maneələri ilə üzləşirlər</div>
    <div className='news-btn'> <button><Link to="/detail">Ətraflı oxu</Link></button></div>
  </div>
  </div>

</div>
      
    </>
  )
}

export default NewsInt
