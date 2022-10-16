import React from 'react';
import styles from './Clients.module.scss';
import Navbar from '../../components/UI/Navbar';
import FilterInput from '../../components/UI/FilterInput';

export default function Clients() {
  return (
    <>
      <Navbar />
      <div className={styles.clients_wrapper}>
        <FilterInput />
        <button type="button">&#8593;</button>
        <button type="button">&#8595;</button>
      </div>
    </>
  );
}
