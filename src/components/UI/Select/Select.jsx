import styles from './Select.module.scss';

const Select = ({ options, defaultValue, value, onChange, classname }) => {
  return (
    <select
      className={classname || styles.select}
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option
          className={styles.option}
          key={option + Math.random()}
          value={option}
        >
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
