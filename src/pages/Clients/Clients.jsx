import { useState } from 'react';
import styles from './Clients.module.scss';
import Navbar from '../../components/UI/Navbar';
import FilterInput from '../../components/UI/FilterInput';
import ClientPreview from '../../components/ClientPreview';
import Add from '../../components/Add';
import img from '../../images/avatars/cat_8.svg';
import img2 from '../../images/avatars/cat_1.svg';
import img3 from '../../images/avatars/cat_4.svg';
import MyModal from '../../components/UI/MyModal/MyModal';

export default function Clients() {
  const [modal, setModal] = useState(false);
  const handleBlur = (e) => setQuery('');
  const [query, setQuery] = useState('');

  const addHandler = () => setModal(true);

  const initialClients = [
    {
      avatar: img,
      title: 'Руслан',
      id: Math.random() + Date.now(),
      trainText:
        'Болгарские выпады 10 1 6*2 10 4 тяга в кроссовере бирюзовая 45 12 4 Ягодичный мостик на одной ноге 12 4 сгибание ног в тренажере и еще че тоjhvmjvvjbkbcksahbwflekelcvfewve',
      date: new Date('October 13, 2023 11:13').toDateString(),
    },
    {
      avatar: img2,
      title: 'Катя',
      id: Math.random() + Date.now(),
      trainText:
        'тяга в кроссовере бирюзовая 45 12 4 Ягодичный мостик на одной ноге 12 4 сгибание ног в тренажёре 20 12 4 разведение ног в тренажёре 45 15 4 наружная ротация лёжа на боку 16 4 тяга верхнего блока широким хватом 15 12 1 25 12 4 у-подьем рук 10 4 планка упор лёжа динамическая',
      date: new Date('October 14, 2023 11:13').toDateString(),
    },
    {
      avatar: img3,
      title: 'Влад',
      id: Math.random() + Date.now(),
      trainText:
        'Ягодичный мостик на одной ноге 12 4 сгибание ног в тренажёре 20 12 4 разведение ног в тренажёре 45 15 4 наружная ротация лёжа на боку 16 4 тяга верхнего блока широким хватом 15 12 1 25 12 4 у-подьем рук 10 4 планка упор лёжа динамическая тяга в кроссовере бирюзовая 45 12 4 ',
      date: new Date('September 14, 2023 11:13').toDateString(),
    },
  ];
  const [clients, setClients] = useState(initialClients);
  const handleQuery = (e) => setQuery(e.target.value);
  const filteredClients = clients.filter((client) =>
    client.title.toLowerCase().includes(query)
  );
  console.log(filteredClients);
  return (
    <>
      <Navbar />
      <div className={styles.clients_wrapper}>
        <div className={styles.buttons_wrapper}>
          <FilterInput
            value={query}
            placeholder="Введите имя клиента"
            handleChange={handleQuery}
            onBlur={handleBlur}
          />
          <button className={styles.filter_button} type="button">
            &#8593;
          </button>
          <button className={styles.filter_button} type="button">
            &#8595;
          </button>
        </div>
        <ul className={styles.trains_wrapper}>
          {filteredClients.map((train) => (
            <ClientPreview
              key={train.id}
              avatar={train.avatar}
              title={train.title}
              trainText={train.trainText}
              date={train.date}
            />
          ))}
        </ul>
      </div>
      <MyModal
        visible={modal}
        setVisible={setModal}
        title="Добавить подопечного"
      ></MyModal>
      <Add onClick={addHandler} />
    </>
  );
}
