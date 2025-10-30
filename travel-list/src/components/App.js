import { useState } from "react";
import "../index.css";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";
export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handlePacked = (id) => {
    setItems(
      items.map((item) => {
        if (item.id == id) {
          return {
            description: item.description,
            amount: item.amount,
            packed: !item.packed,
            id: item.id,
          };
        }
        return item;
      })
    );
  };

  const handelDeleteItems = () => {
    const confirm = window.confirm("Are you sure you want to clear the list?");
    if (confirm) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onPack={handlePacked}
        onDeleteItems={handelDeleteItems}
      />
      <Stats items={items} />
    </div>
  );
}
