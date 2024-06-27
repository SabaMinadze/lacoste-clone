import React from 'react'
import styles from "./Header.module.css"
import Image from 'next/image'
import Link from 'next/link'





function Header() {
  return (
    <>
    <div className={styles.main}>

        <div className={styles.header}>

          <center><input type='text' className={styles.search} placeholder=' Find a product'/></center>

          <Link href="/"><Image src="/laclogo1.jpg" height={100} width={120} alt="eror" className={styles.logo}/></Link>

        </div>

        <center><div className={styles.subcont}>
            <p className={styles.p}>NEW IN</p>
            <p className={styles.p}>MEN</p>
            <p className={styles.p}>WOMEN</p>
            <p className={styles.p}>KIDS</p>
            <p className={styles.p}>COLLECTIONS</p>
            <p className={styles.p}>WE ARE LACOSTE</p>

          </div></center>
    </div>
    </>
  )
}

export default Header