import React from 'react'
import styles from './page.module.css'
import Content1 from './components/Content1/Content1'
import Card from './components/Card/Card'
import Image from 'next/image'
import Allcards from './components/Allcards/Allcards'
import Content2 from './components/Content2/Content2'

function page() {
  return (
    <>
    <Content1/>
    <h1 className={styles.txt1}>SIGNATURE ESSENTIALS</h1>
    <Allcards/>
    <Content2/>

  
    </>
  )
}

export default page
