import { useState,useRef } from "react";
import { FaTrashAlt, FaPlus } from "react-icons/fa";

function Content({ items, setItems }) {
  const [item, setItem] = useState("");
  const inputRef = useRef();

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

  function handleAddItem(e) {
    e.preventDefault();
    if (item === "") return;
    const arr = [
      ...items,
      {
        id: items.length ? items[items.length - 1].id + 1 : 1,
        checked: false,
        item: item,
      },
    ];
    setItems(arr);
    setItem("");
    localStorage.setItem("shoppingList", JSON.stringify(arr));
  }

  return (
    <main>
        <form className="addForm" onSubmit={handleAddItem}>
            <label htmlFor="addItem">Add Item</label>
            <input
              autoFocus
              ref={inputRef}
              id="addItem"
              type="text"
              placeholder="Add Item"
              required
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
            <button type="submit" aria-label="Add Item" onClick={()=>inputRef.current.focus()}>
              <FaPlus />
            </button>
          </form>
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
          
        </div>
      ) : (
        <p style={{ marginTop: "2rem" }}>Nothing to see here.</p>
      )}
    </main>
  );
}

export default Content;
