import './App.css';
import React, {useState,useEffect} from 'react';
import SearchForm from "./components/SearchForm";
import User from "./components/User";

function App() {
  const [user,setUser] = useState(null);
  const [searchText,setSearchText] = useState("");

  useEffect(() => {
    if(searchText.length > 0){
      fetch(`https://api.github.com/users/${searchText}`)
      .then((res) => {
        if(res.status != 200){
          throw Error(`Responded with code ${res.status}: User ${res.statusText.toLocaleLowerCase()}`);
        }else{
          return res.json();
        }
      })
      .then(data => setUser(data))
      .catch((err) => alert(err))
      .finally(setSearchText(""));
    }
  },[searchText])

  return (
    <div className="flex justify-center">
      {user ? <User user = {user} setUser = {setUser} /> : <SearchForm setSearchText = {setSearchText} />}
    </div>
  );
}

export default App;
