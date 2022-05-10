import "./InputValue.css";

const InputValue = ({ onSubmit, onChange, value }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        className="input-value"
        type="number"
        min="0"
        placeholder="0원"
        onChange={onChange}
        value={value}
      />
      <button className="insert-button">투입</button>
    </form>
  );
};
export default InputValue;
