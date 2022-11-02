import React, {useState, useEffect} from 'react'
import styles from '../styles/Home.module.css'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineCheck} from 'react-icons/ai'
import Image from 'next/image'
import Aos from 'aos'
import Hosting from '../components/Hosting'
import 'aos/dist/aos.css'
function Index() {
   useEffect(() =>{ 
      Aos.init({duration: 2000});
  }, []);
  return (
   <>
     <div className={styles.container}>
         <div className={styles.app} >
            <h1>Cloud Hosting <br/> for Pros</h1>
            <h4>Deploy your website in less than 60 seconds</h4>
            <button>Get Started</button>
         </div>

         <Image
         priority
         width={400}
         height={400}
         data-aos='fade-up' src='/banner.webp'/>
     </div>

        <div className={styles.main} data-aos='fade-up'>
         <h1>Starting at $9 per month</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, exercitationem!</p>
         <div className={styles.search}>
            <input type='text'/>
            <BsSearch/>
         </div>

         <div className={styles.rate}>
             <p className={styles.ratio}><span >.com $10</span></p>
             <p>.ng $8</p>
             <p>.org $11</p>
             <p>.space $14</p>
             <p>.net $5</p>
             <p>.xyz $10</p>
         </div>
        </div>


        {/* main area */}

   <div className={styles.slide}>

       <div className={styles.content}>

            <div className={styles.head}>
               <p>Entry</p>
               <h1>$14 <span style={{fontSize:"20px"}}>/month</span> <span  style={{fontSize:"20px", backgroundColor:"aqua"}}>10% off</span></h1>
               <p>Easy start on the cloud</p>
            </div>

            <div className={styles.unlimited}>
              <p><AiOutlineCheck/> Unlimited website</p> 
              <p><AiOutlineCheck/> Unlimited Bandwidth</p> 
              <p><AiOutlineCheck/> 100 GB SSD Storage</p> 
              <p><AiOutlineCheck/> 3 GB RAM</p> 
              <p><AiOutlineCheck/> Unlimited website</p> 
            </div>
            
            <button>BUY NOW</button>
       </div>

       <div className={styles.content}>

            <div className={styles.head}>
               <p>Entry</p>
               <h1>$14 <span style={{fontSize:"20px"}}>/month</span> <span  style={{fontSize:"20px", backgroundColor:"aqua"}}>10% off</span></h1>
               <p>Easy start on the cloud</p>
            </div>

            <div className={styles.unlimited}>
              <p><AiOutlineCheck/> Unlimited website</p> 
              <p><AiOutlineCheck/> Unlimited Bandwidth</p> 
              <p><AiOutlineCheck/> 100 GB SSD Storage</p> 
              <p><AiOutlineCheck/> 3 GB RAM</p> 
              <p><AiOutlineCheck/> Unlimited website</p> 
            </div>
            
            <button>BUY NOW</button>
       </div>

       <div className={styles.content}>

            <div className={styles.head}>
               <p>Entry</p>
               <h1>$14 <span style={{fontSize:"20px"}}>/month</span> <span  style={{fontSize:"20px", backgroundColor:"aqua"}}>10% off</span></h1>
               <p>Easy start on the cloud</p>
            </div>

            <div className={styles.unlimited}>
              <p><AiOutlineCheck/> Unlimited website</p> 
              <p><AiOutlineCheck/> Unlimited Bandwidth</p> 
              <p><AiOutlineCheck/> 100 GB SSD Storage</p> 
              <p><AiOutlineCheck/> 3 GB RAM</p> 
              <p><AiOutlineCheck/> Unlimited website</p> 
            </div>
            
            <button>BUY NOW</button>
       </div>
   </div>
   <Hosting/>
     </>
  )
}

export default Index
