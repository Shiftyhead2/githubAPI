import './App.css';
import React, {useState,useEffect} from 'react';
import SearchForm from "./components/SearchForm";
import User from "./components/User";

function App() {
  const [user,setUser] = useState(null);
  const [searchText,setSearchText] = useState("");


  useEffect(() => {
    /* fetchaj korisnika s githuba samo ako searchText(username) nije prazan string  */
    if(searchText.length > 0){
      fetch(`https://api.github.com/users/${searchText}`)
      .then((res) => {
        /* Ovo je blok koji provjerava da li nam response vraća kod 200. Ako ne onda imamo error koji moramo ispisati korisniku. */
        if(res.status != 200){
          throw Error(`Responded with code ${res.status}: User ${res.statusText.toLocaleLowerCase()}`);
        }else{
          /* Ovo je i mene zezalo dok nisam shvatio što sam zajebo. Kada radimo sa API-om uvijek moramo returnati(vratiti) što god smo dobili u responsu u json formatu*/
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
      {/* Ako user postoji(nije null) prikaži User komponentu. Ako user ne postoji(null je) prikaži SearchForm komponentu */}
      {user ? <User user = {user} setUser = {setUser} /> : <SearchForm setSearchText = {setSearchText} />}
    </div>
  );
}

export default App;
