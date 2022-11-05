const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <select value={value} onChange={event => onChange(event.target.value)}>
      <option value="">{defaultValue}</option>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
