import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    return (
        <nav className='containerr'>
            <div className='left-nav '>
                <div className='img-div'>
                    <Link to="/"><img src="/assets/img/logow.svg" alt="" /></Link>
                </div>
            </div>
            <div className='right-nav'>
                <ul className='n'>
                    <li> <Link to="/news">Xəbərlər</Link></li>
                    <li> <Link to="/about">Ziyarətci girişi</Link></li>
                    <li><button style={{ padding: "7px", borderRadius: "34px", border: "none" }}><Link to="/register" className='register'>Qeydiyyatdan keç</Link></button> </li>
                    <li> <Link to="/language">AZ|ENG</Link></li>


                </ul>
                <button className='menu' onClick={() => {
                    menu ? setMenu(false) : setMenu(true);
                }}><img src="/assets/img/menu.svg" alt="" /></button>

                <div className='burger-menu' style={
                    menu ? { transform: "translateX(0px)" }
                        : { transform: "translateX(-250px)" }
                }>

                    <div className='delete' style={menu ? { marginRight: "15px", display: "flex", justifyContent: "flex-end" } : { display: "none", marginRight: "15px", justifyContent: "flex-end" }} ><button style={{ width: "40px", height: "40px", borderRadius: "5px", marginBottom: "40px", top: "0" }} onClick={() => {
                        menu ? setMenu(false) : setMenu(true);
                    }}>X</button>
                    </div>

                    <ul className='burger-menu-items'>
                        <li><button style={{ borderRadius: "34px", border: "none", textAlign: "center", padding: "7px" }}><Link to="/register" className='register' style={{ fontSize: "16px" }}>Qeydiyyatdan keç</Link></button> </li>
                        <li> <Link to="/about">Ziyarətci girişi</Link></li>
                        <li> <Link to="/news">Xəbərlər</Link></li>
                        <li> <Link to="/language">AZ|ENG</Link></li>
                    </ul>



                </div>
            </div>
        </nav>
    )
}

export default Navbar
