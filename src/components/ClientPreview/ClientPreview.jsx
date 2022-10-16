import styles from './ClientPreview.module.scss';

const ClientPreview = ({ avatar, title, trainText, date }) => {
  return (
    <li className={styles.client_preview_wrapper}>
      <img src={avatar} alt={`${title} avatar`} />
      <div className={styles.client_preview_text_wrapper}>
        <h2>{title}</h2>
        <span>{date}</span>
        <p>{trainText}</p>
      </div>
    </li>
  );
};

export default ClientPreview;
