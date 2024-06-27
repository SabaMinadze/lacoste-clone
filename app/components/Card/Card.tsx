import React from 'react'
import styles from './Card.module.css'

function Card(props:any) {
  return (
    <>
    <div className={styles.mainbox}>
      <div className={styles.box}>
        {props.img}
        
      </div>
      <br/>
      <u className={styles.txt2}>{props.txt}</u>
      <br/><br/>

    </div>
    <br/>

    
    </>
  )
}

export default Card