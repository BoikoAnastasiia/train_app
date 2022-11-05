import styles from './Select.module.scss';

const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className={styles.select}
      value={value}
      onChange={event => onChange(event.target.value)}
    >
      <option className={styles.option} value="">
        {defaultValue}
      </option>
      {options.map(option => (
        <option className={styles.option} key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
