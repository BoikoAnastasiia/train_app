import styles from './FilterInput.module.scss';

const FilterInput = ({ placeholder, handleChange, onBlur }) => (
  <input
    type="text"
    name="query"
    className={styles.input}
    placeholder={placeholder}
    onChange={handleChange}
    onBlur={onBlur}
  />
);

export default FilterInput;
