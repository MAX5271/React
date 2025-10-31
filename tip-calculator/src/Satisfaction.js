export const Satisfaction = ({ children, amount, onHandleS }) => {
  return <div>
    {children}
    <select value={amount} onChange={(e) => onHandleS(Number(e.target.value))}>
      <option value={0}>Dissatisfied(0%)</option>
      <option value={5}>It was ok(5%)</option>
      <option value={10}>It was good(10%)</option>
      <option value={20}>Outstanding(20%)</option>
    </select>
  </div>;
};
