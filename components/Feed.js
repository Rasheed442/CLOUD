import React from 'react'
import style from '../styles/feed.module.css'
import Image from 'next/image'
function Feed() {
  return (
    <div>
        <div className={style.head}>
            <h1>What our customers are saying</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, officia.</p>
            <div className={style.main}>
                <Image 
                priority
                width={400}
                height={400}
                src='/pics.jpg'/>
               <div className={style.container}>
                <h3>Lorem ipsum dolor, sit amet consectetur<br/> adipisicing elit. Sunt eaque magni tenetur
                    ex,<br/> vero corrupti ducimus fugit cumque commodi<br/> earum. </h3>
                    <h4>John Smith <br/>ABC Company</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feed
