import styles from './MyModal.module.scss';

const MyModal = ({ children, visible, setVisible, title }) => {
  const rootClasses = [styles.myModal];

  if (visible) {
    rootClasses.push(styles.active);
  }

  return (
    <form className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={styles.myModalContent} onClick={e => e.stopPropagation()}>
        <span onClick={() => setVisible(false)} className={styles.close}>
          &#10006;
        </span>
        <h3 className={styles.title}>{title}</h3>
        {children}
      </div>
    </form>
  );
};

export default MyModal;
