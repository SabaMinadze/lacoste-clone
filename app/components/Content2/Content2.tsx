import React from 'react'
import styles from './Content2.module.css'
import Image from 'next/image'

function Content2() {
  return (
    <>
    <div className={styles.cont}>
        <div className={styles.box}>
            <Image src="/girl.jpg" height={580} width={770} alt="eror"/>
        </div>
        <div className={styles.box2}>
            <p className={styles.txt}>LACOSTE SUMMER VIBES, GET READY FOR SUMMER </p>    
            <p className={styles.txt1}>Switch into summer mode with Lacoste essentials: lightweight clothing, bags, shoes, sportswear...</p> 
            <button className={styles.but1}>FOR HIM</button>
            <button className={styles.but1}>FOR HER</button>
        </div>
    </div>
    
    </>
  )
}

export default Content2