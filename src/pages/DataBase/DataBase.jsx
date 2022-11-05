import React from 'react';
import styles from './DataBase.module.scss';
import Navbar from '../../components/UI/Navbar';
import FilterInput from '../../components/UI/FilterInput';
import Select from '../../components/UI/Select/Select';
import base from './base.json';

import BasePreview from '../../components/BasePreview/BasePreview';
import грудь from './Icons/грудь.svg';
import ноги from './Icons/ноги.svg';
import пресс from './Icons/пресс.svg';
import рука from './Icons/рука.svg';
import спина from './Icons/спина.svg';
import ягодицы from './Icons/ягодицы.svg';

const DataBase = () => {
  console.log(base);
  const generateId = () => {
    const dateString = Date().now.toString();
    const random = Math.random();
    return dateString + random;
  };

  const renderIcon = () => {};

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
          {base.map(train => (
            <BasePreview id={generateId} icon={ягодицы} title={train.name} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default DataBase;
