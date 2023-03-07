import React from 'react'
import { Link } from 'react-router-dom'
import "./register.scss"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LoginComponent from '../loginComponent/LoginComponent';
import RegisterComponents from '../registerComponent/RegisterComponents';


const Register = () => {

  return (
    <div className='registerr'>
      <div className='left-register containerr'>
        <div><img src="/assets/img/logow.svg" alt="" /></div>
        <div style={{marginTop:"20px"}}><Link to="/"> <i className="fa-solid fa-arrow-left"></i>geri qayıt</Link></div>
        <div className='register-title'>
          <div className='add'>Elan yerləşdir və özünün təyin etdiyiyi qiymətə yükünü daşıd</div>
          <div className='icon'>
            <img src="/assets/img/icon.svg" alt="" />
          </div>
        </div>
      </div>
      <div className='right-register'>
        <div className='title'>
          <div className='h1'>Xoş gəldin</div>
          <div className='p'>Giriş etmək üçün telefon nömrənizi daxil edin</div>
        </div>
        <div>
          <Tabs style={{ display:"flex",gap:"30px",justifyContent:"center"}}
            defaultActiveKey="Giriş"
            id="uncontrolled-tab-example"
            className=" tabs "
          >
            <Tab eventKey="home" title="Giriş">
              <LoginComponent />  

            </Tab>
            <Tab eventKey="profile" title="Qeydiyyat">
              <RegisterComponents />
            </Tab>

          </Tabs>
        </div>
      </div>

    </div>
  )
}

export default Register
