import React from 'react'
import styles from './Homepage.module.scss';
import MyButton from '../../components/UI/button'
import { Link } from "react-router-dom";

 

export default function Homepage() {
  return (
    <nav>
      <MyButton>
         <Link to="clients" style={styles.link}>Клиенты</Link>
      </MyButton>
     
      <Link to="database">Тренировки</Link>
    </nav>
  )
}
