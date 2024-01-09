import { useState } from "react";
import UserInputField from "./UserInputField"
import logo from '../assets/investment-calculator-logo.png'
const Header = () => {
  const [value, setValue] = useState(null);
  const handleInputValue = (event, label) => {
    let newValue = event.target.value;
    setValue((prevValue) => {
      const values = { ...prevValue, [label]: newValue };
      return values;
    });
    console.log(event.target.value, label);
  };
  console.log(value);
  return (
    <>
      <div id="header">
        <img
          src={logo}
          alt="money-bag-logo"
        />
        <h1>Investment Calculator</h1>
      </div>
      <div id="user-input">
        <UserInputField
          onValueChange={handleInputValue}
          label={'initial Investment'}
        />
        <UserInputField
          onValueChange={handleInputValue}
          label={'annual Investment'}
        />
        <UserInputField
          onValueChange={handleInputValue}
          label={'expected Return'}
        />
        <UserInputField onValueChange={handleInputValue} label={'duration'} />
      </div>
    </>
  )}
export default Header