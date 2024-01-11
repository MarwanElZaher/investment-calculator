import Header from './components/Header.jsx'
import Results from './components/Results.jsx';
import UserInputFields from './components/UserInputFields.jsx'
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })
  const inputIsValid = userInput.duration >= 1 
  const onValueChange = (label, event) => {
    let newValue = event.target.value
    let parsedValue= parseFloat(newValue)
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
      [label]:parsedValue
      }
    })
  }
  return (
    <>
      <Header />
      <UserInputFields onChangeInput={onValueChange} userInput={userInput} />
      {inputIsValid ? <Results userInput={userInput} /> : <div style={{ display: "flex", justifyContent: "center" }} >
        <h4>Please Enter a Valid Input Data.<br/><p style={{ color:"red"}}> Note: Duration Field should be greater than zero</p> </h4>
        </div>
      }
    </>)
}

export default App;
