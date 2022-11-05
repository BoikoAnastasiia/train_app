import styles from './BasePreview.module.scss';

const BasePreview = ({ icon, title, id }) => {
  return (
    <li key={id} className={styles.workout_preview_wrapper}>
      <p className={styles.title}>{title}</p>
      <img className={styles.icon} src={icon} alt={`${title} icon`} />
    </li>
  );
};

export default BasePreview;
