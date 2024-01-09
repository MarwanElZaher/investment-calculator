import { useState } from "react";

const UserInputFields = ( ) => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 100,
    annualInvestment: 20,
    expectedReturn: 5,
    duration: 6
  })
  const onValueChange = (label, event) => {
    let newValue=event.target.value
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
      [label]:newValue
      }
    })
  }
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial Investment</label>
          <input onChange={(event) => onValueChange("initialInvestment",event)} value={userInput.initialInvestment} type="number" required></input>
        </p>
        <p>
          <label>annual Investment</label>
          <input onChange={(event) => onValueChange("annualInvestment",event)} value={userInput.annualInvestment} type="number" required></input>
        </p>
        <p>
          <label>expected Return</label>
          <input onChange={(event) => onValueChange("expectedReturn",event)} value={userInput.expectedReturn} type="number" required></input>
        </p>
        <p>
          <label>duration</label>
          <input onChange={(event) => onValueChange("duration",event)} value={userInput.duration} type="number" required></input>
        </p>
      
      </div>
      </section>
  );
};
export default UserInputFields;
