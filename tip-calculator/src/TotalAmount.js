export const TotalAmount = ({ amount, onHandleReset }) => {
  if (amount.s1 == 0 && amount.s2 == 0 && amount.bill == 0) return;
  const percentage = (amount.s1 + amount.s2) / 2;
  return <div>
    <h1>You pay ${Math.round(amount.bill * (1 + percentage * 0.01))} (${amount.bill}+${Math.round(amount.bill * percentage * 0.01)})</h1>
    <button onClick={onHandleReset}>Reset</button>
  </div>;
};
