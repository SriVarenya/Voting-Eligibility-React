
import { useState } from 'react';

function App() {
  const [age, setAge] = useState("");
  const [result, setResult] = useState(null);

  function checkEligibility(event) {
    event.preventDefault();

    if (age === "" || Number(age) < 0) {
      setResult("invalid");
    }
    else if (Number(age) >= 18) {
      setResult("eligible");
    }
    else {
      setResult("notEligible");
    }
  }

  return (
    <div>
      <h1>Voting Eligibility Checker</h1>

      <form onSubmit={checkEligibility}>
        <label>Enter your age:</label>

        <input
          type="number"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
            setResult(null);
          }}
          placeholder="Enter your age"
          min="0"
        />

        <button type="submit">
          Check Eligibility
        </button>
      </form>

      {result === "eligible" && (
        <h2>Eligible to vote!</h2>
      )}

      {result === "notEligible" && (
        <h2>Not eligible to vote!</h2>
      )}

      {result === "invalid" && (
        <h2>Please enter a valid age.</h2>
      )}
    </div>
  );
}

export default App;
