import React from 'react';
import styles from './Clients.module.scss';
import Navbar from '../../components/UI/Navbar';
import FilterInput from '../../components/UI/FilterInput';
import ClientPreview from '../../components/ClientPreview';
import img from '../../images/avatars/cat_8.svg';

export default function Clients() {
  const date = () => {
    const currentDate = Date.now();
    return currentDate.toLocaleString();
  };
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
          <ClientPreview
            avatar={img}
            title="Руслан"
            trainText="Болгарские выпады 10 1 6*2 10 4 тяга в кроссовере бирюзовая 45 12 4 Ягодичный мостик на одной ноге 12 4 сгибание ног в тренажере и еще че то"
            date={date}
          />
        </ul>
      </div>
    </>
  );
}
