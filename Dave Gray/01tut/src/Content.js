import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Content() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Aata",
    },
    {
      id: 2,
      checked: false,
      item: "Sattu",
    },
    {
      id: 3,
      checked: false,
      item: "Maida",
    },
  ]);
  const [item, setItem] = useState("");

  function handleCheckBox(id) {
    const arr = items.map((ele) => {
      if (ele.id === id)
        return { id: ele.id, checked: !ele.checked, item: ele.item };
      else return ele;
    });
    setItems(arr);
  }

  function handleDelete(id) {
    const arr = items.filter((ele) => ele.id !== id);
    setItems(arr);
    localStorage.setItem("shoppingList", JSON.stringify(arr));
  }

  function handleAddItem() {
    if (item === "") return;
    const arr = [
      ...items,
      { id: items.length + 2, checked: false, item: item },
    ];
    setItems(arr);
    setItem("");
    localStorage.setItem("shoppingList", JSON.stringify(arr));
  }

  return (
    <main>
      {items.length ? (
        <div>
          <ul>
            {items.map((item) => (
              <li className="item" key={item.id}>
                <input
                  type="checkbox"
                  onChange={() => handleCheckBox(item.id)}
                  checked={item.checked}
                />
                <label
                  style={
                    item.checked ? { textDecoration: "line-through" } : null
                  }
                  onDoubleClick={() => handleCheckBox(item.id)}
                >
                  {item.item}
                </label>
                <FaTrashAlt
                  onClick={() => handleDelete(item.id)}
                  role="button"
                  tabIndex="0"
                />
              </li>
            ))}
          </ul>
          <div>
            {" "}
            <input
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />{" "}
            <button onClick={handleAddItem}>Add Item</button>{" "}
          </div>
        </div>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}
    </main>
  );
}

export default Content;
