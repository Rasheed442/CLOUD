import React, {useEffect} from 'react'
import style from '../styles/host.module.css'
import {GiCheckeredDiamond, GiCheckMark} from 'react-icons/gi'
import {GrAppsRounded} from 'react-icons/gr'
import 'aos/dist/aos.css'
import Image from 'next/image'
import Aos from 'aos'
import Feed from './Feed'
function Hosting() {
  useEffect(() =>{ 
    Aos.init({duration: 1000});
}, []);
  return (
    <>
       <div className={style.host}>
           <h1>Host On The Cloud To Keep Growing</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, aperiam.</p>
       </div>

       <div className={style.container} data-aos='fade-up' >
             <div className={style.main}>
                <GiCheckeredDiamond style={{fontSize:'3rem',  color:"aqua"}}/>
                <h2>Super Easy to Use</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime<br/> perferendis
                 quasi nesciunt magnam et illo amet temporibus nisi<br/> incidunt cum.</p>
                 <div className={style.learn}>
                    <h4>LEARN MORE</h4>
                    <GiCheckMark/>
                 </div>
             </div>
           <Image 
           width={500}
           height={300}
           src='/bin.jpg'/>
       </div>

       <div className={style.container} data-aos='fade-up' >
             <div className={style.main}>
                <GiCheckeredDiamond style={{fontSize:'3rem', color:"aqua"}}/>
                <h2>Super Easy to Use</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime<br/> perferendis
                 quasi nesciunt magnam et illo amet temporibus nisi<br/> incidunt cum.</p>
                 <div className={style.learn}>
                    <h4>LEARN MORE</h4>
                    <GiCheckMark/>
                 </div>
             </div>
           <Image
           width={500}
           height={300}
           priority
           src='/bin2.jpg'/>
       </div>

       <div className={style.container} data-aos='fade-up'>
               <Image
               width={500}
               height={300}
               src='/bin1.jpg'/>
             <div className={style.main}>
                <GiCheckeredDiamond style={{fontSize:'3rem',  color:"aqua"}}/>
                <h2>Super Easy to Use</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime<br/> perferendis
                 quasi nesciunt magnam et illo amet temporibus nisi<br/> incidunt cum.</p>
                 <div className={style.learn}>
                    <h4>LEARN MORE</h4>
                    <GiCheckMark/>
                 </div>
             </div>
       </div>

       <div className={style.panel} data-aos='fade-up'>
         <h1>User-friendly Control Panel</h1>
         <div className={style.control}>
          <Image
          priority
          width={600}
          height={300}
          src='/bin4.png'/>
          <div className={style.space}>
               <div className={style.friend}>
                   <GrAppsRounded style={{color:"aqua"}}/>
                    <div>
                      <h2>Easy Start & Managed Update</h2>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> Modi, provident
                       animi autem debitis exercitationem<br/> excepturi. Fugit illum veniam cum odio!</p>
                    </div>
               </div>

               <div className={style.friend}>
                   <GrAppsRounded style={{color:"aqua"}}/>
                    <div>
                      <h2>Easy Start & Managed Update</h2>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> Modi, provident
                       animi autem debitis exercitationem<br/> excepturi. Fugit illum veniam cum odio!</p>
                    </div>
               </div>

               <div className={style.friend}>
                   <GrAppsRounded style={{color:"aqua"}}/>
                    <div>
                      <h2>Easy Start & Managed Update</h2>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> Modi, provident
                       animi autem debitis exercitationem<br/> excepturi. Fugit illum veniam cum odio!</p>
                    </div>
               </div>

               <div className={style.friend}>
                   <GrAppsRounded style={{color:"red"}}/>
                    <div>
                      <h2>Easy Start & Managed Update</h2>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> Modi, provident
                       animi autem debitis exercitationem<br/> excepturi. Fugit illum veniam cum odio!</p>
                    </div>
               </div>

               <div className={style.friend}>
                   <GrAppsRounded style={{color:"aqua"}}/>
                    <div>
                      <h2>Easy Start & Managed Update</h2>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> Modi, provident
                       animi autem debitis exercitationem<br/> excepturi. Fugit illum veniam cum odio!</p>
                    </div>
               </div>
          </div>
         </div>
       </div>
  

  <div>
    
  </div>
      
      <Feed/>
    </>
  )
}

export default Hosting
