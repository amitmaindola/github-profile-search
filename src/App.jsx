import { useState } from 'react';
import './App.css';
import Profile from './components/Profile';
 
function App() {
  const [username, setUsername] = useState("")
  const [result, setResult] = useState([])
  const usernameHandler = (e) => {
    setUsername(e.target.value)
  }

  async function fetchAPI(){
    const response = await fetch(`https://api.github.com/search/users?q=${username}`);
    const data = await response.json();
    setResult(data.items);
  }


  const search = () => {
    if(username==""){
      setResult([]);
    }
    else{
      fetchAPI();
    }
  }

  return (
    <div className="App">
      <div style={{width: 652, margin: '40px auto'}}>
        <h1>Github User Search</h1>
        <input value={username} onChange={usernameHandler} style={{width: 300, padding: 10, borderRadius: 5, marginRight: 30, border: '1px solid #777'}} type="text" />
        <button style={{width: 300, padding: 12, borderRadius: 5, border: 'none', backgroundColor: '#cc0'}} onClick={search}>Search</button>
        <h2>Results</h2>

        {result.map(item=>{
          return <Profile id={item.login} image={item.avatar_url} url={item.html_url}/>
        })}
      </div>
    </div>
  );
}

export default App;