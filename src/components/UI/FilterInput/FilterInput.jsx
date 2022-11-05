import styles from './FilterInput.module.scss';

const FilterInput = ({ placeholder }) => (
  <input
    type="text"
    name="query"
    className={styles.input}
    placeholder={placeholder}
    // onChange={handleChange}
    // onBlur={handleBlur}
    // value={values.query}
  />
);

export default FilterInput;
