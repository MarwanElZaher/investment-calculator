const UserInputField = ({ label, onValueChange }) => {
  return (
    <>
      <label>{label} </label>

      <input onChange={() => onValueChange(event, label)} type="number"></input>
    </>
  );
};
export default UserInputField;
