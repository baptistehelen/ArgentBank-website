import PropTypes from 'prop-types';

const InputField = ({ id, label, value, onChange, autoComplete }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
      />
    </div>
  );
};

export default InputField;

InputField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    autoComplete: PropTypes.string,
  };