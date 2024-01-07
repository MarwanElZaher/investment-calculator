import UserInputField from './components/UserInputField';

function App() {
  return (
    <>
      <div id="header">
        <img
          src="investment-calculator-logo.png"
          alt="investment-calculator-logo"
        />
        <h1>Investment Calculator</h1>
      </div>
      <div id="user-input">
        <UserInputField label={'initial Investment'} />
        <UserInputField label={'annual Investment'} />
        <UserInputField label={'expected Return'} />
        <UserInputField label={'duration'} />
      </div>
    </>
  );
}

export default App;
