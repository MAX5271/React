import { use, useEffect, useState } from "react"
import Header from "./Header";
import User from "./User";
import Posts from "./Posts";
import Comments from "./Comments";

function App() {

  const API_URL = "https://jsonplaceholder.typicode.com/";

  const [section,setSection] = useState('user');
  const [usersData,setUsersData] = useState([]);
  const [postsData,setPostsData] = useState([]);
  const [commentsData,setCommentsData] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const uRes = await fetch(`${API_URL}users`);
        if(!uRes.ok) throw Error("Error in fetching Users data.");
        const uData = await uRes.json();
        setUsersData(uData);
        const pRes = await fetch(`${API_URL}posts`);
        if(!pRes.ok) throw Error("Error in fetching Posts data.");
        const pData = await pRes.json();
        setPostsData(pData);
        const cRes = await fetch(`${API_URL}comments`);
        if(!cRes.ok) throw Error("Error in fetching Comments data.");
        const cData = await cRes.json();
        setCommentsData(cData);
      } catch (error) {
        console.log(error.message);
      }
    };

    (async ()=>fetchData())();

  },[]);

  const handleSection = (sec)=>{
    setSection(sec);
  }

  return (
    <div>
      <Header handleSection={handleSection} section={section} />
      {
        section==='user'?<User usersData={usersData} />:section==='posts'?<Posts postsData={postsData} />:<Comments commentsData={commentsData} />
      }
    </div>
  )
}

export default App