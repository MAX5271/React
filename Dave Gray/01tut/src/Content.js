import { useRef } from "react";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import AddItem from "./AddItem";

function Content({ items, setItems, fetchError,handleAddItem,item, setItem, handleCheckBox,handleDelete }) {
  
  const inputRef = useRef();

 
  return (
    <main>
        {<AddItem handleAddItem={handleAddItem} inputRef={inputRef} item={item} setItem={setItem} />}
      { fetchError?fetchError: items.length ? (
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



