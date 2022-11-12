import styles from './Add.module.scss';

export default function Add({ onClick }) {
  return (
    <button onClick={onClick} type="button" className={styles.add_btn}>
      +
    </button>
  );
}
