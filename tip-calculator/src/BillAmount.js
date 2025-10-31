export const BillAmount = ({ amount, onHandleBill }) => {
  return <div>
    <span>
      How much was the bill?
      <input value={amount} onChange={(e) => onHandleBill(Number(e.target.value))} />
    </span>
  </div>;
};
