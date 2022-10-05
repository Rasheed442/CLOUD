import React from 'react'
import style from '../styles/footer.module.css'
function Footer() {
  return (
    <div className={style.container}>
        <div>
        <h2 data-aos='fade-right'>RANSOM <span style={{color:"white", border:"1px solid white"}}>Clouds</span></h2>
         <p>&copy;copyright 2022 RASHEED</p> 
        </div>
        <div>
            <h2>ITEM 1</h2>
            <p>Website Hosting</p>
            <p>Free Automated Wordpress</p>
            <p>Migrations</p>
            <p>Pricing</p>
        </div>
        <div>
            <h2>ITEM 2</h2>
            <p> Hosting</p>
            <p>VPS</p>
            <p>Domains</p>
            <p>Pricing</p>
        </div>
        <div>
            <h2>ITEM 2</h2>
            <p> Hosting</p>
            <p>VPS</p>
            <p>Domains</p>
            <p>Pricing</p>
        </div>
        
    </div>
  )
}

export default Footer
