import React from 'react'
import styles from './Content1.module.css'
import Image from 'next/image'

function Content1() {
  return (

    <>
    
      <Image src="/official.avif" height={630} width={6000} alt="eror" className={styles.content1}/>
      <div className={styles.butcont}>
        <h1 className={styles.txt}>LACOSTE POLO SHIRT.THE ONE AND ONLY.</h1>
          <button className={styles.but}>FOR HIM</button>
          <button className={styles.but}>FOR HER</button>
      </div>
  
    </>

  )
}

export default Content1