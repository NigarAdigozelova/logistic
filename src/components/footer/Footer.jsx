import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer containerr'>
      <div className='left-footer'>
        <div className='left-top'>
          <div className='logo-footer'>
            <Link to="/"><img src="/assets/img/logow.svg" alt="" /></Link>
          </div>
          <div className='left-bottom'>
            <ul >
              <li><a href="">
                <img src="/assets/img/1.svg" alt="" /></a></li>
              <li><a href=""><img src="/assets/img/2.svg" alt="" /></a></li>
              <li ><a href=""><img style={{ width: "16px" }} src="/assets/img/3.svg" alt="" /></a></li>
              <li><a href=""><img src="/assets/img/4.svg" alt="" /></a></li>
            </ul>
          </div>
        </div>
        <div className='securty'>
          © 2021. Bütün hüquqlar qorunur.
        </div>
      </div>
      <div className='mid-footer'>
        <ul>
          <li><a href="" style={{color:"#F79824"}}>Haqımızda</a></li>
          <li><a href="">FAG</a></li>
          <li><a href=""><span><img src="/assets/img/5.svg" alt="" /></span>+99451 206 53 66</a></li>
          <li><a href=""><span><img src="assets/img/6.svg" alt="" /></span> Bakı ş. Nərimanov ray. Ziya
            Bünyadov ev 2075–ci Məhəllə</a></li>
          <li><a href=""><span><img src="/assets/img/7.svg" alt="" /></span> info@merlogistics.az</a></li>
        </ul>
      </div>
      <div className='right-footer'>
        <div className='mobil' style={{color:"white",fontSize:"14px"}}>Mobil tətbiqimizi yükləyin.</div>
        <div className='apple'> <img src="/assets/img/apple.svg" alt="" /></div>
        <div style={{width:"200px"}} className='store'><img src="/assets/img/store.svg" alt="" /></div>
        <div className='bcp'><img src="/assets/img/end.svg" alt="" /> <span style={{color:"white",fontSize:"13px"}}>tərəfindən hazırlanıb</span></div>
      </div>

    </div>
  )
}

export default Footer
