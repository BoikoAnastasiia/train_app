import React from 'react';
import styles from './DataBase.module.scss';
import Navbar from '../../components/UI/Navbar';
import FilterInput from '../../components/UI/FilterInput';
import Select from '../../components/UI/Select/Select';

export default function DataBase() {
  return (
    <>
      <Navbar />
      <div className={styles.base_wrapper}>
        <div className={styles.buttons_wrapper}>
          <FilterInput placeholder="Введите название тренировки" />
          <Select
            options={[
              'плечи',
              'трицепс',
              'трапеция',
              'бицепс',
              'грудь',
              'пресс',
              'спина',
              'ягодицы',
              'ноги'
            ]}
            defaultValue="Все"
            onChange={e => console.log(e)}
          />
        </div>
      </div>
    </>
  );
}
