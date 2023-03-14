import React from 'react'
import { Link } from 'react-router-dom'
import "./cardd.scss"

    const Cardd = () => {
        return (
        <div className='row'>
            <div className='cardd col-lg-4 col-md     -12'>
                <div className='card-img'>
                    <img src="/assets/img/news3.svg" alt="" />
                </div>
                <div className='card-article'>
                    <div className='card-date'>19.02.2022</div>
                    <div className='card-info'>Yük maşınları Donanmanın
                        təkmilləşdirilməsi üçün təchizat zənciri maneələri ilə üzləşirlər</div>
                    <div className='card-btn'><Link to="/detail">Ətraflı oxu <i className="fa-solid fa-chevron-right"></i></Link></div>
                </div>
            </div>
            <div className='cardd col-4'>
                <div className='card-img'>
                    <img src="/assets/img/news2.svg" alt="" />
                </div>
                <div className='card-article'>
                    <div className='card-date'>19.02.2022</div>
                    <div className='card-info'>Yük Daşımaları Qiymətləri, Gecikmələr Kanadada Kesintilər Arasında Artır</div>
                    <div className='card-btn'><Link to="/detail">Ətraflı oxu <i className="fa-solid fa-chevron-right"></i></Link></div>
                </div>
            </div>
            <div className='cardd col-4'>
                <div className='card-img'>
                    <img src="/assets/img/news1.svg" alt="" />
                </div>
                <div className='card-article'>
                    <div className='card-date'>19.02.2022</div>
                    <div className='card-info'>Yük maşınları Donanmanın
                        təkmilləşdirilməsi üçün təchizat zənciri maneələri ilə üzləşirlər</div>
                    <div className='card-btn'><Link to="/detail">Ətraflı <i className="fa-solid fa-chevron-right"></i></Link></div>
                </div>
            </div>
        </div>
    )
}

export default Cardd
