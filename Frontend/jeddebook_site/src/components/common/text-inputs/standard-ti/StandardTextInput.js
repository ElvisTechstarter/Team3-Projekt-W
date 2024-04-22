function StandardTextInput({ type, placeholder, name, setNewValue }) {
  function onChangeTI(event) {
    setNewValue(event.target.value);
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChangeTI}
    />
  );
}

export default StandardTextInput;
