import styles from './ClientPreview.module.scss';

const ClientPreview = ({ avatar, title, trainText, date }) => {
  return (
    <li className={styles.client_preview_wrapper}>
      <img className={styles.avatar} src={avatar} alt={`${title} avatar`} />
      <div className={styles.client_preview_text_wrapper}>
        <div className={styles.title_wrapper}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.date}>{date}</span>
        </div>
        <p className={styles.trains}>{trainText}</p>
      </div>
    </li>
  );
};

export default ClientPreview;
