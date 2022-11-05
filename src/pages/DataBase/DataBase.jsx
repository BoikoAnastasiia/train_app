import React from 'react';
import styles from './DataBase.module.scss';
import Navbar from '../../components/UI/Navbar';
import FilterInput from '../../components/UI/FilterInput';
import Select from '../../components/UI/Select/Select';
import BasePreview from '../../components/BasePreview/BasePreview';
import base from './base.json';

const DataBase = () => {
  const baseArray = JSON.stringify(base);
  const generateId = () => {
    const dateString = Date().now.toString();
    const random = Math.random();
    return dateString + random;
  };
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
        <ul className={styles.workouts_wrapper}>
          {baseArray.map(train => (
            <BasePreview
              id={generateId}
              icon={train.avatar}
              title={train.title}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default DataBase;
