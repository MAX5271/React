import { useEffect, useState } from 'react';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import SearchItem from './SearchItem';
import apiRequest from './apiRequest';

function App() {

  const API_URL='http://localhost:3500/items';

  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  const [search,setSearch] = useState("");
  const [fetchError,setFetchError] = useState(null);

  useEffect(()=>{
    const fetchItems = async ()=>{
      try {
        const res = await fetch(API_URL);
        if(!res.ok) throw Error("Did not receive expected data!");
        const listItems = await res.json();
        setItems(listItems);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      }
    }

    (async () => fetchItems())();

  },[]);

  async function handleAddItem (e) {
      e.preventDefault();
      if (item === "") return;
      const newItem = {
          id: items.length ? `${Number(items[items.length - 1].id) + 1}` : 1,
          checked: false,
          item: item,
        };
      const arr = [
        ...items,
        newItem,
      ];
      setItems(arr);
      setItem("");

      const postOptions = {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(newItem)
      }

      const result = await apiRequest(API_URL,postOptions,)
      if(result) setFetchError(result);

    }

     async function handleCheckBox(id) {
        const arr = items.map((ele) => {
          if (ele.id === id)
            return { id: ele.id, checked: !ele.checked, item: ele.item };
          else return ele;
        });
        setItems(arr);

        const myItem = items.filter((item)=> item.id===id);
        const updateOptions = {
          method:'PATCH',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({checked:!myItem[0].checked})
        };
        const reqUrl = `${API_URL}/${id}`;
        const result = await apiRequest(reqUrl,updateOptions);
        if(result) setFetchError(result);
      }
    
      async function handleDelete(id) {
        const arr = items.filter((ele) => ele.id !== id);
        setItems(arr);

        const deleteOptions = {method:'DELETE'};
        const reqUrl = `${API_URL}/${id}`;
        const result = await apiRequest(reqUrl,deleteOptions);
        if(result) setFetchError(result);
      }
    

  return (
    <div className="App" style={{display:"flex",flexDirection:"column",height:"100vh",justifyContent:"space-between"}}>
      <Header/>
      <SearchItem search={search} setSearch={setSearch} />
      <Content items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))} setItems={setItems} fetchError={fetchError} handleAddItem={handleAddItem} item={item} setItem={setItem} handleCheckBox={handleCheckBox} handleDelete={handleDelete} />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
