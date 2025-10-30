import { useState } from "react";
import "./index.css";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  const handleDeleteItem = (id)=>{
    setItems((items)=>items.filter(item=>item.id!==id));
  }
  const handlePacked = (id)=>{
    setItems(items.map((item)=>{
      if(item.id==id){
        return { description:item.description, amount:item.amount, packed: !item.packed, id:item.id }
      }
      return item;
    }));
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} onPack={handlePacked} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴Far Away 👜</h1>;
}
function Form({onAddItems}) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, amount, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setAmount(1);
  }

  function handleAmount(e) {
    e.preventDefault();
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
function PackingList({ items,onDeleteItem,onPack }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} onPack={onPack} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item, onDeleteItem,onPack }) {


  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        <input type="checkbox" value={item.packed} onClick={()=>onPack(item.id)} />
        {item.quantity} {item.description}
      </span>
      <button onClick={()=>onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>👜You have X items on your list, and you have packed X(X%)</em>
    </footer>
  );
}
