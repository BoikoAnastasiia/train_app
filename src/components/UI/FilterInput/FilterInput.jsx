import styles from './FilterInput.module.scss';

const FilterInput = ({ placeholder, handleChange, onBlur, classname }) => (
  <input
    type="text"
    name="query"
    className={classname || styles.input}
    placeholder={placeholder}
    onChange={handleChange}
    onBlur={onBlur}
  />
);

export default FilterInput;
