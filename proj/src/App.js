import "./App.css";
import "./styles/main.css";

import { useEffect, useState } from "react";

import CalcValues from "./components/CalcValues";
import DisplayValues from "./components/DisplayValues";

function App() {
  const [bill, setBill] = useState(0);
  const [noOfPeople, setNoOfPeople] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);

  const calculateTip = () => {
    let tipAmount = bill * (tipPercent / 100);
    let totalAmount = bill + tipAmount;
    let tipAmountPerPerson = tipAmount / noOfPeople;
    let totalAmountPerPerson = totalAmount / noOfPeople;

    setValues({
      tipPerson: tipAmountPerPerson,
      totalTipPerPerson: totalAmountPerPerson,
    });
  };

  const [values, setValues] = useState({
    tipPerPerson: 0.0,
    totalTipPerPerson: 0.0,
  });

  const resetValues = () => {
    setBill(0);
    setTipPercent(0);
    setNoOfPeople(0);
    setValues({
      tipPerPerson: 0.0,
      totalTipPerPerson: 0.0,
    });
  };

  useEffect(() => {
    calculateTip();
    console.log("yhhh");
  }, [bill, tipPercent, noOfPeople]);

  return (
    <div>
      <header>
        <h2>SPLI</h2>
        <h2>TTER</h2>
      </header>
      <main>
        <div className="calcContainer">
          <CalcValues
            setBill={setBill}
            bill={bill}
            tipPercent={tipPercent}
            setTipPercent={setTipPercent}
            noOfPeople={noOfPeople}
          />
          <DisplayValues {...values} resetFunction={resetValues} />
        </div>
      </main>

      <script src="/script.js"></script>
    </div>
  );
}

export default App;
