import { FaPlus } from "react-icons/fa";

export default function AddItem({handleAddItem, inputRef, item, setItem}) {

  return <form className="addForm" onSubmit={handleAddItem}>
    <label htmlFor="addItem">Add Item</label>
    <input
      autoFocus
      ref={inputRef}
      id="addItem"
      type="text"
      placeholder="Add Item"
      required
      value={item}
      onChange={(e) => setItem(e.target.value)} />
    <button type="submit" aria-label="Add Item" onClick={() => inputRef.current.focus()}>
      <FaPlus />
    </button>
  </form>;
}
