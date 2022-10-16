import styles from './FilterInput.module.scss';

const FilterInput = () => (
  <input
    type="text"
    name="query"
    className={styles.input}
    // onChange={handleChange}
    // onBlur={handleBlur}
    // value={values.query}
  />
);

export default FilterInput;
