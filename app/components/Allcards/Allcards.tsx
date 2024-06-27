import React from 'react'
import styles from './Allcards.module.css'
import Card from '../Card/Card'
import Image from 'next/image'

function Allcards() {
  return (
    <>
    <div className={styles.box}>
        <Card txt="The Baseshot sneaker. Timeless elegance." 
        img={<Image src="/shoes1.avif" height={480} width={360} alt="eror"/>}/>


        <Card txt="T-shirts. Plain and simple." 
        img={<Image src="/shoes2.avif" height={480} width={360} alt="eror"/>}/>

        <Card txt="T-shirts. Plain and simple." 
        img={<Image src="/shoes3.avif" height={480} width={360} alt="eror"/>}/>

        <Card txt="T-shirts. Plain and simple." 
        img={<Image src="/shoes4.avif" height={480} width={360} alt="eror"/>}/>

        <Card txt="T-shirts. Plain and simple." 
        img={<Image src="/shoes5.jpg" height={480} width={360} alt="eror"/>}/>
    </div>
    <br/><br/>
    
    </>
  )
}

export default Allcards