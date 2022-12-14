import React, {useState,useEffect} from 'react';
import ReposList from "./ReposList";

const User = ({user,setUser}) => {

  const [repos,setRepos] = useState(null);

  useEffect(() => {
    /* Fetchaj repos od usera samo ako user postoji(nije null) */
    if(user){
      fetch(`https://api.github.com/users/${user.login}/repos`)
      .then((res) => {
        /* Ovo je ista provjera koju sam napravio u App.jsx komponenti. OK je kod 200 */
        if(!res.ok){
          throw Error(`Responded with code ${res.status}: ${res.statusText}`);
        }else{
          return res.json();
        }
      })
      .then(data => setRepos(data))
      .catch(err => alert(err));
    }
  },[user]);


  return (
    <div className='m-12 flex flex-col justify-center items-center gap-3'>
      <img className="w-1/5" src = {user.avatar_url} alt = {user.name} />
      <h2 className="text-xl">Name:{user.name}</h2>
      <h2 className="text-xl break-words mx-60">Bio:{user.bio}</h2>
      <h2 className='text-xl'>Repos:</h2>
      {/* Ako reposi postoje(nisu null) onda prikaži ReposList komponentu. Ako reposi ne postoje(null su) prikaži paragraph koji kaže da nije mogao pronaći repose */}
      {repos ? <ReposList repos = {repos} /> : <p>No repos found!</p>}
      <button className="bg-lime-500  w-1/5 text-gray-800 py-2 px-3 rounded hover:bg-lime-400 hover:text-gray-900" onClick={(e) => { e.preventDefault()
        setUser(null)
        }}>Reset</button>
    </div>
  );
}

export default User;