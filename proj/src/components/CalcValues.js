const availableTip = [5, 10, 15, 20, 50];

export const CalcValues = ({
  bill,
  setBill,
  setNoOfPeople,
  setTipPercent,
  tipPercent,
  noOfPeople,
}) => {
  return (
    <section className="first">
      <div className="firstHolder">
        <label htmlFor="bill"> Bill</label>
        <i>
          <img src="/images/icon-dollar.svg" alt="" />
        </i>
        <input
          type="number"
          onChange={(e) => setBill(Number(e.target.value))}
          placeholder="0"
          name="bill"
          id="bill"
        />
      </div>

      <div className="tipContain">
        <label htmlFor="tip">Select Tip %</label>
        <div className="tip">
          {availableTip.map((tip) => (
            <button
              key={tip}
              onClick={() => setTipPercent(tip)}
              className={`tipping ${tip === tipPercent && "active"}`}
            >
              {tip}%
            </button>
          ))}
        </div>
      </div>

      <div className="people">
        <label htmlFor="people">Number of people</label>
        <p id="errorMessage">This can't be zero</p>
      </div>
      <div className="secondHolder">
        <i>
          <img src="/images/icon-person.svg" alt="" />
        </i>
        <input
          type="number"
          onChange={(e) => setNoOfPeople(Number(e.target.value))}
          placeholder="0"
          name="people"
          id="people"
        />
      </div>
    </section>
  );
};

export default CalcValues;
