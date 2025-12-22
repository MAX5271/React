import { useState } from 'react';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import SearchItem from './SearchItem';

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppingList")));
  const [search,setSearch] = useState("");

  return (
    <div className="App" style={{display:"flex",flexDirection:"column",height:"100vh",justifyContent:"space-between"}}>
      <Header/>
      <SearchItem search={search} setSearch={setSearch} />
      <Content items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))} setItems={setItems} />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
