import React, {useEffect, useState} from 'react'
// import {Link} from 'react-scroll'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'
import style from '../styles/navbar.module.css'
function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() =>{ 
    Aos.init({duration: 2000});
}, []);
  return (
    <div>
        <div className={style.container} >
            {/* <img src='shuan.png'/> */}
              <h2 data-aos='fade-right'>RANSOM <span style={{color:"white", border:"1px solid white"}}>Clouds</span></h2>
             {open ? <div className={style.navmenu} data-aos='fade-right'>
             <Link to="test1" spy={true} smooth={true} offset={50} duration={500} href='/'><a>Hosting</a></Link>
             <Link to="test1" spy={true} smooth={true} offset={50} duration={500} href='/'><a>VPS</a></Link>
             <Link to="test1" spy={true} smooth={true} offset={50} duration={500} href='/'><a>Domain</a></Link>
             <Link to="test1" spy={true} smooth={true} offset={50} duration={500} href='/'><a>Pricing</a></Link>
             </div>: ""}


             <div className={style.navlink} data-aos='fade-left'>
             <Link to="test1" spy={true} smooth={true} offset={50} duration={500} href='/'><a>Hosting</a></Link>
             <Link to="test1" spy={true} smooth={true} offset={50} duration={500} href='/'><a>VPS</a></Link>
             <Link to="test1" spy={true} smooth={true} offset={50} duration={500} href='/'><a>Domain</a></Link>
             <Link to="test1" spy={true} smooth={true} offset={50} duration={500} href='/'><a>Pricing</a></Link>
             </div>

             <div className={style.icon} onClick={() => {
              setOpen(!open)
             }}>
              {open ? <AiOutlineClose/> : <AiOutlineMenu/> }
             </div>

        </div>
    </div>
  )
}

export default Navbar
