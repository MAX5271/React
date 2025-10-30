
export function Stats({ items }) {
  if (items.length === 0)
    return <em className="stats">Start adding items to you packing list👜</em>;

  const packed = items.filter((item) => item.packed == true).length;

  return (
    <footer className="stats">
      {Math.round((packed * 100) / items.length) == 100 ? (
        <em>Packing Complete. Enjoy your trip🌴</em>
      ) : (
        <em>
          👜You have {items.length} items on your list, and you have packed{" "}
          {packed}({Math.round((packed * 100) / items.length)}%)
        </em>
      )}
    </footer>
  );
}