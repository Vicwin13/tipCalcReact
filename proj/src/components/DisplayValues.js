import React from "react";

export const DisplayValues = ({
  tipPerson = 0.0,
  totalTipPerPerson = 0.0,
  resetFunction,
}) => {
  return (
    <section className="second">
      <div className="tipAmount">
        <p className="tipText">
          Tip Amount <br />
          <span>/ person</span>
        </p>
        <p className="again" id="tipPrice">
          ${tipPerson.toFixed(2)}
        </p>
      </div>
      <div className="tipTotal">
        <p className="tipText">
          Total <br />
          <span>/ person</span>
        </p>
        <p className="again-total" id="totalPrice">
          ${totalTipPerPerson.toFixed(2)}
        </p>
      </div>

      <button onClick={resetFunction} type="reset" id="reset">
        RESET
      </button>
    </section>
  );
};

export default DisplayValues;
