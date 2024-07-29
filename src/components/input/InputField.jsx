import classes from "../../styles/ContentAdd.module.css";

function InputField({ label, value, onChange, maxLength, name }) {
  return (
    <div>
      <label>{label}</label>
      <input
        className={classes.input}
        value={value}
        maxLength={maxLength}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}

export default InputField;
