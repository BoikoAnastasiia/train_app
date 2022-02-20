import React from 'react'
import styles from './Homepage.module.scss';
import MyButton from '../../components/UI/button'
import { Link } from "react-router-dom";

 

export default function Homepage() {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
         <MyButton>
         <Link to="clients" className={styles.link}>Клиенты</Link>
      </MyButton>

      <hr className={styles.hr}/>
     
      <MyButton>
        <Link to="database" className={styles.link}>Тренировки</Link>
      </MyButton>
      </div>
     
    </nav>
  )
}
