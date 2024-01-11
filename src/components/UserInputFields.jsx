const UserInputFields = ( {onChangeInput,userInput}) => {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial Investment</label>
          <input onChange={(event) => onChangeInput("initialInvestment",event)} value={userInput.initialInvestment} type="number" required></input>
        </p>
        <p>
          <label>annual Investment</label>
          <input onChange={(event) => onChangeInput("annualInvestment",event)} value={userInput.annualInvestment} type="number" required></input>
        </p>
        <p>
          <label>expected Return</label>
          <input onChange={(event) => onChangeInput("expectedReturn",event)} value={userInput.expectedReturn} type="number" required></input>
        </p>
        <p>
          <label>duration</label>
          <input onChange={(event) => onChangeInput("duration",event)} value={userInput.duration} type="number" required></input>
        </p>
      
      </div>
      </section>
  );
};
export default UserInputFields;
