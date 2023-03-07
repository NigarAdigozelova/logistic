import React from 'react'
import "./heroSection.scss"

const HeroSection = () => {
  return (
    <div className='hero-section '>
      <div className='kamaz'>
        <img src="/assets/img/kamaz.svg" alt="" />
      </div>
      <div className='bgc'></div>
      <div className='hero-article'>
        <p>Biz hər şeyin öhdəsindən gələ bilərik.</p>
        <h1>Böyük və ya kiçik...</h1>
        <h3>Etibar edə biləcəyiniz avadanlıq.
          Etibar edə biləcəyiniz insanlar</h3>
        <div className='btns'><button> <img src="/assets/img/apple.svg" alt="" /></button>
          <button><img src="/assets/img/store2.svg" alt="" /></button>
        </div>
      </div>
      <div className='hero'>
        <div className='left-hero col-md-6'></div>
        <div className='right-hero col-md-6'>
        </div>



      </div>
    </div>
  )
}

export default HeroSection
