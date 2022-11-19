import { useState } from 'react';

import styles from './DataBase.module.scss';
import Navbar from '../../components/UI/Navbar';
import FilterInput from '../../components/UI/FilterInput';
import Select from '../../components/UI/Select/Select';
import base from './base.json';
import BasePreview from '../../components/BasePreview/BasePreview';
import Add from '../../components/Add/Add';
import MyModal from '../../components/UI/MyModal/MyModal';
import Mybutton from '../../components/UI/button/MyButton';
import renderIcon from './renderIcon';

const DataBase = () => {
  const [trains, setTrains] = useState(base);
  const [modal, setModal] = useState(false);
  const [newTrain, setNewTrain] = useState('');
  const [newSelectedType, setnewSelectedType] = useState('');
  const addHandler = () => setModal(true);

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
        <MyModal
          visible={modal}
          setVisible={setModal}
          title="Добавить упражнение"
        >
          <FilterInput
            placeholder="Введите название тренировки"
            classname={styles.modal_input}
          />
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
            defaultValue="Группа мышц"
            onChange={e => console.log(e)}
            classname={styles.modal_select}
          />
          <Mybutton type="submit" onClick={e => console.log(e)}>
            Добавить
          </Mybutton>
        </MyModal>

        <Add onClick={addHandler} />
      </div>
    </>
  );
};

export default DataBase;
