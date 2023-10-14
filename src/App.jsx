import { useState } from "react";
import "./index.css";

const messages = [
  "Learn to code",
  "Apply for jobs 💼",
  "Spend income on Ice-Cream",
];

function App() {
  // in order to dynamically update the "step" variable - useState
  // React useState returns an array with the default value passed
  // and a function that can be used to update the state variable
  // =>>now tobi will immediately destructure the array

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({ name: "tobi" });

  // the callback function handles "setStep" function associated with the useState
  function handlePrevious() {
    // wrong: if (step > 1) setStep(step - 1); the ideal method is below: recieves the current
    // value of the state to update the state.
    if (step > 1) setStep((s) => s - 1);

    // setTest({ name: "tyson furry" });
  }
  function handleNext() {
    // if (step < 3) setStep(step + 1);
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {/* dynamically add the active class based on the "step value" */}
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
            {/* test */}
            {/* {console.log(test)} */}
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#CA6702", color: "#fff" }}
              onClick={handlePrevious}
            >
              previous
            </button>
            <button
              style={{ backgroundColor: "#CA6702", color: "#fff" }}
              onClick={handleNext}
            >
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
