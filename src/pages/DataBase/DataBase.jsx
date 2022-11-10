import { useState } from 'react';

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
  const renderIcon = musclesArray => {
    if (
      musclesArray.includes('плечи') ||
      musclesArray.includes('трапеция') ||
      musclesArray.includes('грудь')
    ) {
      return грудь;
    }

    if (musclesArray.includes('трицепс') || musclesArray.includes('бицепс')) {
      return рука;
    }

    if (musclesArray.includes('пресс')) {
      return пресс;
    }

    if (musclesArray.includes('спина')) {
      return спина;
    }

    if (musclesArray.includes('ягодицы')) {
      return ягодицы;
    }

    if (musclesArray.includes('ноги')) {
      return ноги;
    }
  };
  const [trains, setTrains] = useState(base);

  const filterTrains = train => {};

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
          {trains &&
            trains
              .sort((a, b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                return 0;
              })
              .map(train => (
                <BasePreview
                  id={train.name + Math.random() + Date.now()}
                  icon={renderIcon(train.muscles)}
                  title={train.name}
                />
              ))}
        </ul>
      </div>
    </>
  );
};

export default DataBase;
