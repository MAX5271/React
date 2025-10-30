import { useState } from "react";

export function PackingList({ items, onDeleteItem, onPack, onDeleteItems }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy == "input") {
    sortedItems = items;
  } else if (sortBy == "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((sortedItem) => (
          <Item
            item={sortedItem}
            onDeleteItem={onDeleteItem}
            onPack={onPack}
            key={sortedItem.id}
          />
        ))}
      </ul>
      <div className="actions">
        <span>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by the input order</option>
            <option value="description">Sort by the description</option>
            <option value="packed">Sort by the packed status</option>
          </select>
          <button onClick={onDeleteItems}>Clear List</button>
        </span>
      </div>
    </div>
  );
}
export function Item({ item, onDeleteItem, onPack }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        <input
          type="checkbox"
          value={item.packed}
          onClick={() => onPack(item.id)}
        />
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
