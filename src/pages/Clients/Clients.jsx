import React from 'react';
import styles from './Clients.module.scss';
import Navbar from '../../components/UI/Navbar';
import FilterInput from '../../components/UI/FilterInput';
import ClientPreview from '../../components/ClientPreview';

export default function Clients() {
  return (
    <>
      <Navbar />
      <div className={styles.clients_wrapper}>
        <div className={styles.buttons_wrapper}>
          <FilterInput />
          <button className={styles.filter_button} type="button">
            &#8593;
          </button>
          <button className={styles.filter_button} type="button">
            &#8595;
          </button>
        </div>
        <ul className={styles.trains_wrapper}>
          <ClientPreview avatar="" title="" trainText="" date="" />
        </ul>
      </div>
    </>
  );
}
