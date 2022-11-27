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
  const muscleArray = [
    'Все',
    'плечи',
    'трицепс',
    'трапеция',
    'бицепс',
    'грудь',
    'пресс',
    'спина',
    'ягодицы',
    'ноги'
  ];
  const [trains, setTrains] = useState(base);
  const [filter, setFilter] = useState('');
  const [modal, setModal] = useState(false);
  const [newTrain, setNewTrain] = useState('');
  const [selectedTrain, setSelectedTrain] = useState('Все');
  const [newSelectedType, setnewSelectedType] = useState('Группа Мышц');
  const addHandler = () => setModal(true);
  const handleFilterChange = (event) => setFilter(event.target.value);

  const handleModalSelect = (event) => {
    setnewSelectedType(event.target.value);
  };
  const handleModalChange = (event) => {
    setNewTrain(event.target.value);
  };

  const submitModal = (event) => {
    event.preventDefault();

    const newTrainFromModal = {
      name: newTrain,
      muscles: [newSelectedType]
    };

    setTrains((prev) => [newTrainFromModal, ...prev]);

    setNewTrain('');
    setnewSelectedType('Группа мышц');
    setModal(false);
  };

  const filterTrains = (trains) =>
    trains.filter((train) => train.muscles.includes(selectedTrain));
  const selectTrainHandler = (event) => {
    console.log(event.target.value, selectedTrain);
    setSelectedTrain(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div className={styles.base_wrapper}>
        <div className={styles.buttons_wrapper}>
          <FilterInput
            placeholder="Введите название тренировки"
            onChange={handleFilterChange}
            value={filter}
          />
          <Select
            value={selectedTrain}
            options={muscleArray}
            onChange={selectTrainHandler}
            defaultValue={muscleArray[0]}
          />
        </div>
        <ul className={styles.workouts_wrapper}>
          {trains &&
            (selectedTrain === 'Все' ? trains : filterTrains(trains))
              .sort((a, b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                return 0;
              })
              .map((train) => (
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
            handleChange={handleModalChange}
            value={newTrain}
          />
          <Select
            options={muscleArray}
            defaultValue="Группа мышц"
            onChange={handleModalSelect}
            classname={styles.modal_select}
            value={newSelectedType}
          />
          <Mybutton type="submit" onClick={submitModal}>
            Добавить
          </Mybutton>
        </MyModal>

        <Add onClick={addHandler} />
      </div>
    </>
  );
};

export default DataBase;
