import React from 'react'
import { Link } from 'react-router-dom'
import Cardd from '../card/Cardd'
import "./newsCard.scss"

const NewsCard = () => {
  return (
    <div className='newsCard container'>

        <div className='newsCard-title'>Xəbərlər</div>
        <div className='wrapper'>
           <Cardd/>
           <Cardd/>
           <Cardd/>
           <Cardd/>
        </div>
        <div className='more'> <button><Link to="/detail">Daha çox</Link></button></div>
      
    </div>
  )
}

export default NewsCard
