import React from 'react';
import styles from './Clients.module.scss';
import Navbar from '../../components/UI/Navbar';
import FilterInput from '../../components/UI/FilterInput';
import ClientPreview from '../../components/ClientPreview';
import img from '../../images/avatars/cat_8.svg';
import img2 from '../../images/avatars/cat_1.svg';
import img3 from '../../images/avatars/cat_4.svg';
import img4 from '../../images/avatars/cat_9.svg';
import img5 from '../../images/avatars/cat_14.svg';

export default function Clients() {
  const trains = [
    {
      avatar: img,
      title: 'Руслан',
      trainText:
        'Болгарские выпады 10 1 6*2 10 4 тяга в кроссовере бирюзовая 45 12 4 Ягодичный мостик на одной ноге 12 4 сгибание ног в тренажере и еще че тоjhvmjvvjbkbcksahbwflekelcvfewve',
      date: new Date('October 13, 2023 11:13').toDateString()
    },
    {
      avatar: img2,
      title: 'Руслан',
      trainText:
        'Болгарские выпады 10 1 6*2 10 4 тяга в кроссовере бирюзовая 45 12 4 Ягодичный мостик на одной ноге 12 4 сгибание ног в тренажере и еще че тоjhvmjvvjbkbcksahbwflekelcvfewve',
      date: new Date('October 13, 2023 11:13').toDateString()
    }
  ];
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
            trainText=""
            date={'acasca'}
          />
        </ul>
      </div>
    </>
  );
}
