import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="App" style={{display:"flex",flexDirection:"column",height:"100vh",justifyContent:"space-between"}}>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
